import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iprod } from './prod.interface';

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.scss']
})
export class ProductdashboardComponent implements OnInit {
 
    prodInfo !: Iprod[]

  constructor(
    private _prod : ProductService
  ) { }

  ngOnInit(): void {
    this.prodInfo = this._prod.fetchProdInfo()
  }

}
