import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from './user/add-user/add-user.component';

const routes: Routes = [
  { path: '', component: AddUserComponent }
];

export const routing = RouterModule.forRoot(routes);
