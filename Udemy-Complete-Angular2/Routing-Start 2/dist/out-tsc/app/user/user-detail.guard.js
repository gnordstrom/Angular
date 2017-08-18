export var UserDetailGuard = (function () {
    function UserDetailGuard() {
    }
    UserDetailGuard.prototype.canActivate = function (route, state) {
        return confirm('Are you sure?');
    };
    return UserDetailGuard;
}());
//# sourceMappingURL=../../../../src/app/user/user-detail.guard.js.map