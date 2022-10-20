export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('src/app/employees/employeeDetails.module').then(
        m => m.EmployeeDetailsModule
      ),
    data: { icon: 'assignment', text: 'EmployeeDetails' }
  },
  {
    path: 'users',
    loadChildren: () =>
      import('src/app/users/users.module').then(
        m => m.UsersModule
      ),
    data: { icon: 'table_chart', text: 'Users' }
  },

  {
    path: 'register',
    loadChildren: () =>
      import('src/app/password/password.module').then(
        m => m.PasswordModule
      ),
    data: { icon: 'assignment', text: 'Password' }
  },
];
