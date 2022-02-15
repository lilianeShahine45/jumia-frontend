import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from './model/Customer';
import { CustomerService } from './service/Customer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selected: number = 1;
  customers: Customer[];
  title: string;
  customer: Customer;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private customerService: CustomerService) {
    this.customer = new Customer();
    this.title = 'Jumia- Angular Application';
  }

  onClickSubmit(data) {
    alert("data : "+JSON.stringify(data));
    console.log("selected"+this.selected);
    alert("state selected : " + this.selected);
    this.loadData(this.selected,data.state);

 }

 selectOption(id: number) {
  //getted from event
  console.log(id);
  this.selected=id;
  //getted from binding
  console.log(this.selected)
 
}
loadData(id:number,state:string){
  console.log("code param  "+id);
  console.log("state param  "+state);
this.customerService.findAll(id+"",state).subscribe(data => {
  this.customers = data;
  console.log("data customers  "+this.customers);
});
}

}
