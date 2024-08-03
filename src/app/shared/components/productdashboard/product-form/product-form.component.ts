import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iprod } from '../prod.interface';
import { UuidService } from 'src/app/shared/services/uuid.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
 
  isinEditMode : boolean = false;

  prodForm!: FormGroup;

  prodId !: string ;
  prodObj !: Iprod;
  canReturn !: string; 

  constructor(
    private _uuid : UuidService,
    private _prod : ProductService,
    private _route : ActivatedRoute,
    private _snackBarMsg : SnackbarService
  ) {}

  ngOnInit(): void {
    this.productForm();
    this.editModeHandling()
    this.queryParamsHandling()
  }

  productForm() {
    this.prodForm = new FormGroup({
      pname : new FormControl(null ,[ Validators.required]),
      pStatus : new FormControl(null ,[ Validators.required]),
      productDescription : new FormControl(null ,[ Validators.required]),
      productImg : new FormControl(null ,[ Validators.required]),
      canReturn : new FormControl(null ,[ Validators.required]),
    })
  }

  editModeHandling(){
    this.prodId = this._route.snapshot.params['prodId']
    if(this.prodId){
      this.isinEditMode = true
      this.prodObj = this._prod.getProdObj(this.prodId)!
      this.prodForm.patchValue(this.prodObj)
    }else{
      this.isinEditMode = false
    }
  }

  queryParamsHandling(){
    this.canReturn = this._route.snapshot.queryParams['canReturn']
    if(this.canReturn === '0'){
      this.prodForm.disable()
    }
    else{
      this.prodForm.enable()
    }
  }

  getControls(control : string){
    return this.prodForm.get(control) as FormControl
  }

  onProdAdd(){
    if(this.prodForm.valid){
        console.log(this.prodForm.getRawValue);
        let CanReturnVal = +this.prodForm.get('canReturn')?.value
        let newProd = {...this.prodForm.value , canReturn : CanReturnVal , pId : this._uuid.uuid()}
        this._prod.addProdInfo(newProd)
    }else{
        // alert(`WARNING!!! All fields are Requried!!`)
        this._snackBarMsg.openSnackBar(`WARNING !! ALL FIELDS ARE REQURIED!!`)
    }
  }

  onProdUpdate(){
    let CanReturnVal = +this.prodForm.get('canReturn')?.value
    let updateProd = {...this.prodForm.value , canReturn : CanReturnVal , pId : this.prodId}
    console.log(updateProd);
    
    this._prod.updateProdInfo(updateProd)
  }

 
}
