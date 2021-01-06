import { Component, OnInit } from '@angular/core';
import { CompanyService, Good } from '../services/company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  services: Good[] = [];

  constructor(
    private company: CompanyService
  ) { }

  ngOnInit(): void {
    this.getServices();
  }
  getServices() {
    this.services = this.company.getGoods();
  }

}
