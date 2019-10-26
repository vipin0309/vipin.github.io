import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormArray,FormControl } from '@angular/forms';
import { OrderService } from '../order.service';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
 
})
export class CandidateListComponent implements OnInit {
  form: FormGroup;
  _searchTerm:string;
  filterData=[];
  ordersData = [];
  html:string;
  constructor(private formBuilder: FormBuilder,
  private  _order:OrderService,
  private  sanitized:DomSanitizer,
  ) {
    
  }
  get searchTerm(){
    return this._searchTerm;
  }
  set searchTerm(val){
    this._searchTerm=val;
    this.filterData=this.ordersData.filter((data)=>{return data.skill.toLowerCase().indexOf(val.toLowerCase())!==-1});
    this.createForm();
    this.ordersData=this.filterData;
    this.addCheckboxes();
  }

  getData(){
    let htmlData = "<span style=\"color:gold;\">1234</span>";
    return this.sanitized.bypassSecurityTrustHtml(htmlData);
  }


  private addCheckboxes() {
    this.ordersData.forEach((o, i) => {
    const control = new FormControl(false); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }


  ngOnInit() {
    this.createForm();
    this._order.getOrders().subscribe((data : any[])=>{
       this.ordersData = data;
       this.addCheckboxes();
    });
  }

  

 createForm(){
  this.form = this.formBuilder.group({
    orders: this.formBuilder.array([])
  });
  
 }




  onSubmitForm(){
    const selectedOrderIds = this.form.controls['orders'].value
    .map((v, i) => v ? this.ordersData[i].id : null)
    .filter(v => v !== null);
    console.log(selectedOrderIds);
  }
  
  onSelect(e){
    (this.form.controls.orders as FormArray).controls.map((control)=>{
      control.setValue(e.target.checked);
    })
  }

}
