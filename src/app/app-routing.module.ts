import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/core-components/layout/layout.component'
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  {
     path: '', 
     component: LayoutComponent,
      children: [
        {
          path: 'home', loadComponent: () => import('./components/pages/home/home.component').then(x => x.HomeComponent)
        },
        {
          path: 'autoCluster', loadComponent: () => import('./components/pages/auto-claster/auto-claster.component').then(x => x.AutoClasterComponent)
        },
        {
          path: 'crmClusters/:id', loadComponent: () => import('./components/pages/crm-clusters/crm-clusters.component').then(x => x.CrmClustersComponent)
        },
        {
          path: 'newCluster/:id', loadComponent: () => import('./components/pages/new-cluster/new-cluster.component').then(x => x.NewClusterComponent)
        },
        {
          path: 'report', loadComponent: () => import('./components/test/test.component').then(x => x.TestComponent)
        },
        {
          path: 'logout', loadComponent: () => import('./components//pages/logout/logout.component').then(x => x.LogoutComponent)
        },
     ],
  },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
