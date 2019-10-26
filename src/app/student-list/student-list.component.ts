import { Component, OnInit,ViewChildren,ViewChild, QueryList,ElementRef } from '@angular/core';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @ViewChildren('orderId') orderIDList:QueryList<ElementRef>;
  selectedOrder=[];
  ordersData = [
    { id: 100, name: 'order 1',skill:'Java,Bootstrap' },
    { id: 200, name: 'order 2' ,skill:'Angular,Bootstrap' },
    { id: 300, name: 'order 3' ,skill:'C#,Bootstrap' },
    { id: 400, name: 'order 4',skill:'Ruby,Bootstrap'  }
  ];
  constructor(private _elRef:ElementRef) { }

  ngAfterViewInit() {
    
  }

  
  onSelect(e){
    this.orderIDList.toArray().forEach(el => {
       if(e.target.checked) {
        el.nativeElement.checked=true;
       }
       else {
        el.nativeElement.checked=false;
       }
       
  });

  }

  _searchTerm:string;
  filterData=[];
  get searchTerm(){
    return this._searchTerm;
  }
  set searchTerm(val){
    this._searchTerm=val;
    this.filterData=this.ordersData.filter((data)=>{return data.skill.toLowerCase().indexOf(val.toLowerCase())!==-1});
    console.log(this.filterData);
  }

  ngOnInit() {
    this.filterData=this.ordersData;
  }


  onSubmitForm(){
    this.selectedOrder=[];
    this.orderIDList.toArray().forEach(el => {
       if(el.nativeElement.checked){
        this.selectedOrder.push(el.nativeElement.value);
       }
    });
    console.log(this.selectedOrder);
  }

}
