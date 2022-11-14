import { Injectable } from '@nestjs/common';
import {
  AbilityBuilder,
  AbilityClass,
  InferSubjects,
  PureAbility,
} from '@casl/ability';

import { Action } from './models/action.model';
import { Admins } from 'src/admins/entities/admin.entity';

export type Subjects = InferSubjects<typeof Admins> | 'all';
export type AppAbility = PureAbility<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  defineAbility(admin: Admins) {
    const { can, cannot, build } = new AbilityBuilder(
      PureAbility as AbilityClass<AppAbility>,
    );

    if (admin.super === 1) {
      can(Action.Manage, Admins);
    }
  }
}
