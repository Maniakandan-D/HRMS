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
];
