import { UserDetailComponent } from './user-detail.component';
import { UserEditComponent } from './user-edit.component';
import { UserDetailGuard } from './user-detail.guard';
export var USER_ROUTES = [
    { path: 'detail', component: UserDetailComponent, canActivate: [UserDetailGuard] },
    { path: 'edit', component: UserEditComponent }
];
//# sourceMappingURL=../../../../src/app/user/user.routes.js.map