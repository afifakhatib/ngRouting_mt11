import { Component, OnInit } from '@angular/core';
import { Iprod } from '../prod.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  prodId !: string;
  prodObj !: Iprod

  constructor(
    private _prod : ProductService,
    private _route : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.getSingleProd()
  }

  getSingleProd(){
      this.prodId = this._route.snapshot.params['prodId']
      console.log(this.prodId);
      if(this.prodId){
        this.prodObj = this._prod.getProdObj(this.prodId)! as Iprod
        console.log(this.prodObj);
      } 
  }

  onRemoveProd(){
    let confirmation = confirm(`Are you sure ? Do you want to Remove ${this.prodObj.pname} product ?`)
    if(confirmation){
      this._prod.removeProdInfo(this.prodObj)
    }
  }
}
