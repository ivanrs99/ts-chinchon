import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'jugar3',
    loadChildren: () => import('./jugar3/jugar3.module').then( m => m.Jugar3PageModule)
  },
  {
    path: 'jugar4',
    loadChildren: () => import('./jugar4/jugar4.module').then( m => m.Jugar4PageModule)
  },
  {
    path: 'clasificacion',
    loadChildren: () => import('./clasificacion/clasificacion.module').then( m => m.ClasificacionPageModule)
  },
  {
    path: 'selection',
    loadChildren: () => import('./selection/selection.module').then( m => m.SelectionPageModule)
  },
  {
    path: 'jugar2',
    loadChildren: () => import('./jugar2/jugar2.module').then( m => m.Jugar2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
