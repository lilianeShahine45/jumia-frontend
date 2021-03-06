import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/Customer.service';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  customer: Customer;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private customerService: CustomerService) {
    this.customer = new Customer();
  }

  onSubmit() {
    this.customerService.save(this.customer).subscribe(result => this.gotoCustomerList());
  }

  gotoCustomerList() {
    this.router.navigate(['/customers']);
  }
}