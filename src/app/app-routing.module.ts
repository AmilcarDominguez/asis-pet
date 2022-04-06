import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./usuarios/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./usuarios/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'restaurar-contra-usuario',
    loadChildren: () => import('./usuarios/restaurar-contra-usuario/restaurar-contra-usuario.module').then( m => m.RestaurarContraUsuarioPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./usuarios/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'listar-mascota',
    loadChildren: () => import('./mascota/listar-mascota/listar-mascota.module').then( m => m.ListarMascotaPageModule)
  },
  {
    path: 'cambiar-contra',
    loadChildren: () => import('./usuarios/cambiar-contra/cambiar-contra.module').then( m => m.CambiarContraPageModule)
  },
  {
    path: 'guardar-mascota',
    loadChildren: () => import('./mascota/guardar-mascota/guardar-mascota.module').then( m => m.GuardarMascotaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
