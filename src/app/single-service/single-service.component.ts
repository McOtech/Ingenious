import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService, Good } from '../services/company.service';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.scss']
})
export class SingleServiceComponent implements OnInit {
  service!: Good;
  constructor(
    private company: CompanyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['name'];
    if (id !== undefined) {
      this.getService(id);
    }
  }

  getService(id: string) {
    this.company.getGoods().forEach((good: Good) => {
      console.log( id);
      if (good.id === id) {
        this.service = good;
      }
    });
  }
}
