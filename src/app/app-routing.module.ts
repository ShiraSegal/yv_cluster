import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLangResolver } from 'app-lang-resolver';
import { LayoutComponent } from './components/core-components/layout/layout.component'

export const routes: Routes = [
  {
    path: ':lang', component: LayoutComponent, resolve: {lang: AppLangResolver},
      children: [
        // {
        //   path: 'home', loadComponent: () => import('./features/pages/yv-home/yv-home.component').then(x => x.HomeComponent)
        // }
        {
          path: 'test', loadComponent: () => import('./components/test/test.component').then(x => x.TestComponent)
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