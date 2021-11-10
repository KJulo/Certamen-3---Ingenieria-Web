import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { EditarScreenComponent } from './screens/editar-screen/editar-screen.component';
import { TasksScreenComponent } from './screens/tasks-screen/tasks-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeScreenComponent},
  { path: 'tasks', component: TasksScreenComponent},
  //{ path: 'edit', component: EditarScreenComponent}
  { path: 'detalleTarea/:id', component:EditarScreenComponent},
  { path: 'detalleTarea', component:EditarScreenComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }