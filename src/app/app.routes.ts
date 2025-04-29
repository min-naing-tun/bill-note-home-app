import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//#region Components Imported
//admin
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
//login
import { LoginFormComponent } from './login/login-form/login-form.component';
//active-bill
import { ActiveBillListComponent } from './active-bill/active-bill-list/active-bill-list.component';
import { BillCalculateComponent } from './active-bill/bill-calculate/bill-calculate.component';
//inActive-bill
import { InActiveBillListComponent } from './inActive-bill/in-active-bill-list/in-active-bill-list.component';
//statistics
import { StatisticsListComponent } from './statistics/statistics-list/statistics-list.component';
//#endregion

export const routes: Routes = [
  {
    path: 'admin/panel',
    title: 'Bill-Note-Home: Admin',
    component: AdminPanelComponent
  },
  {
    path: 'active-bill/list',
    title: 'Bill-Note-Home: Active Bill',
    component: ActiveBillListComponent
  },
  {
    path: 'active-bill/calculate',
    title: 'Bill-Note-Home: Active Bill',
    component: BillCalculateComponent
  },
  {
    path: 'inactive-bill/list',
    title: 'Bill-Note-Home: InActive Bill',
    component: InActiveBillListComponent
  },
  {
    path: 'login/index',
    title: 'Bill-Note-Home: Login',
    component: LoginFormComponent
  },
  {
    path: 'statistics/list',
    title: 'Bill-Note-Home: Statistics',
    component: StatisticsListComponent
  },
];
