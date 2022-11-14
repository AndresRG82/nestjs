import { SetMetadata } from '@nestjs/common';
import { Permissions } from '../models/permission.model';

export const PERMISSION_KEY = 'SuperAdmin';

export const Requires = (...permissions: Permissions[]) =>
  SetMetadata(PERMISSION_KEY, permissions);
