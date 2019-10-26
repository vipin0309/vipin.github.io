import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{RegisterationComponent} from './registeration/registeration.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { StudentListComponent } from './student-list/student-list.component';

export const AppRoutes: Routes = [
  {path: 'registeration',  component: RegisterationComponent },
  {path: '',  component: CandidateListComponent },
  {path: 'student',  component: StudentListComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
