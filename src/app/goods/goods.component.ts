import { Component, OnInit } from '@angular/core';
import { CompanyService, Good } from '../services/company.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  services: Good[] = [];
  constructor(
    private company: CompanyService
  ) { }

  ngOnInit(): void {
    this.services = this.company.getGoods();
  }

}
