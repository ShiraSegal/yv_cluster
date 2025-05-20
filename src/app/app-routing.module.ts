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
          path: 'auto cluster', loadComponent: () => import('./components/pages/auto-claster/auto-claster.component').then(x => x.AutoClasterComponent)
        },
        {
          path: 'crmClusters/:id', loadComponent: () => import('./components/pages/crm-clusters/crm-clusters.component').then(x => x.CrmClustersComponent)
        },
        {
          path: 'test', loadComponent: () => import('./components/test/test.component').then(x => x.TestComponent)
        },
     ],
  },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    initialNavigation: 'enabledNonBlocking',useHash: true,
})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
