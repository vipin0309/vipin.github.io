import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterationComponent } from './registeration/registeration.component';
import{FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './data.service';
import { OrderService } from './order.service';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    CandidateListComponent,
    StudentListComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
