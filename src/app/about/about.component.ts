import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  values: string[] = [];

  constructor(
    private company: CompanyService
  ) { }

  ngOnInit(): void {
    this.values = this.company.getValues();
  }

}
