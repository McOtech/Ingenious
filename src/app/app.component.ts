import { Component, Inject, OnInit } from '@angular/core';
import { CompanyService, Good } from './services/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ingenious';
  services: Good[] | undefined;

  constructor(
    private company: CompanyService
  ) {}

  ngOnInit() {
    this.services = this.company.getGoods().slice(0, 4);
  }
}

// "./node_modules/toastr/build/toastr.min.css",
// "./node_modules/bootstrap/dist/css/bootstrap.min.css",
// "./semantic/dist/semantic.min.css",

// "./node_modules/toastr/build/toastr.min.js",
// "./node_modules/popper.js/dist/umd/popper.min.js",
// "./node_modules/bootstrap/dist/js/bootstrap.min.js",
// "./semantic/dist/semantic.min.js",
