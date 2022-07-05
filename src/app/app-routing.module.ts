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
    path: 'guardar-mascota/:id',
    loadChildren: () => import('./mascota/guardar-mascota/guardar-mascota.module').then( m => m.GuardarMascotaPageModule)
  },
  {
    path: 'editar-mascota',
    loadChildren: () => import('./mascota/editar-mascota/editar-mascota.module').then( m => m.EditarMascotaPageModule)
  },
  {
    path: 'listar-gastos',
    loadChildren: () => import('./mascota/listar-gastos/listar-gastos.module').then( m => m.ListarGastosPageModule)
  },
  {
    path: 'guardar-gastos',
    loadChildren: () => import('./mascota/guardar-gastos/guardar-gastos.module').then( m => m.GuardarGastosPageModule)
  },
  {
    path: 'listar-vacunas',
    loadChildren: () => import('./mascota/listar-vacunas/listar-vacunas.module').then( m => m.ListarVacunasPageModule)
  },
  {
    path: 'guardar-vacunas',
    loadChildren: () => import('./mascota/guardar-vacunas/guardar-vacunas.module').then( m => m.GuardarVacunasPageModule)
  },
  {
    path: 'listar-banho',
    loadChildren: () => import('./mascota/listar-banho/listar-banho.module').then( m => m.ListarBanhoPageModule)
  },
  {
    path: 'guardar-banho',
    loadChildren: () => import('./mascota/guardar-banho/guardar-banho.module').then( m => m.GuardarBanhoPageModule)
  },
  {
    path: 'listar-peluqueria',
    loadChildren: () => import('./mascota/listar-peluqueria/listar-peluqueria.module').then( m => m.ListarPeluqueriaPageModule)
  },
  {
    path: 'guardar-peluqueria',
    loadChildren: () => import('./mascota/guardar-peluqueria/guardar-peluqueria.module').then( m => m.GuardarPeluqueriaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
