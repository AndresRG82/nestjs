import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { GroupsService } from 'src/admins/services/groups.service';
import { SessionService } from 'src/session/session.service';
import { PayloadToken } from '../models/token.model';
import { Permissions } from '../models/permission.model';
import { PERMISSION_KEY } from '../decorators/requires.decotator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private groupsService: GroupsService,
    private sessionService: SessionService,
  ) {}
  async getPermissions(groupname) {
    const permissions = await this.groupsService.findByNameWithRelations(
      groupname,
    );
    return permissions;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req_permissions = this.reflector.get<Permissions[]>(
      PERMISSION_KEY,
      context.getHandler(),
    );
    //console.log(req_permissions);
    if (!req_permissions) {
      return true;
    }
    const req = context.switchToHttp().getRequest();
    const admin = req.user as PayloadToken;
    const rawData = await this.getPermissions(admin.group);
    console.log(req);
    if (!rawData) {
      throw new UnauthorizedException(
        "You don't have enough permissions for this operation.",
      );
    }
    const permissions: Permissions[] = [];
    for (let i = 0; i < rawData.permissions.length; i++) {
      const element = rawData.permissions[i];
      permissions.push(element.permission as Permissions);
    }
    const hasPermission = req_permissions.some((permission) => {
      for (let i = 0; i < permissions.length; i++) {
        const element = permissions[i];
        if (element === permission) {
          return true;
        }
      }
    });
    if (!hasPermission) {
      throw new UnauthorizedException(
        "you don't have enough permissions for this operation.",
      );
    }
    const now = new Date();
    const sessionInfo = {
      user_id: admin.id,
      ip_adress: req.ip,
      user_agent: req.headers['user-agent'],
      payload: {
        url: req.url,
        method: req.method,
        body: req.body,
      },
      last_activity: now.toString(),
    };
    this.sessionService.create(sessionInfo);
    //console.log(sessionInfo);
    return true;
  }
}
