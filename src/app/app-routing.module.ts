import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLangResolver } from 'app-lang-resolver';
import { LayoutComponent } from './components/core-components/layout/layout.component'

export const routes: Routes = [
  {
    path: ':lang', component: LayoutComponent, resolve: {lang: AppLangResolver},
      children: [
        {
          path: 'home', loadComponent: () => import('./components/pages/home/home.component').then(x => x.HomeComponent)
        },
        {
          path: 'auto cluster', loadComponent: () => import('./components/pages/auto-claster/auto-claster.component').then(x => x.AutoClasterComponent)
        },
         {
          path: 'CRM Clusters', loadComponent: () => import('./components/pages/crm-clusters/crm-clusters.component').then(x => x.CrmClustersComponent)
        },
        {
          path: 'report', loadComponent: () => import('./components/test/test.component').then(x => x.TestComponent)
        },
     ],
  },

  {
    path: '', pathMatch: 'full', resolve: {lang: AppLangResolver},redirectTo: "/home"
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    initialNavigation: 'enabledNonBlocking',useHash: true,
})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
