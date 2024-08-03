import { Injectable } from '@angular/core';
import { Iprod } from '../components/productdashboard/prod.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsArr : Iprod[] = [
    {
        pname: "Apple iPhone 12 Pro",
        pId: "1001",
        pStatus: "Dispatched",
        canReturn: '1',
        productDescription: "The Apple iPhone 12 Pro features a Super Retina XDR display with Ceramic Shield, A14 Bionic chip with next-generation Neural Engine, and a triple-camera system with Ultra Wide, Wide, and Telephoto lenses. It supports Night mode, Deep Fusion, and Dolby Vision HDR recording up to 60fps. The iPhone 12 Pro runs on iOS 15, offering Face ID for secure authentication, MagSafe technology for easy attachment of accessories, and 5G connectivity for fast download speeds.",
        productImg: "https://fdn.gsmarena.com/imgroot/reviews/20/apple-iphone-12-pro/lifestyle/-1024w2/gsmarena_018.jpg"
    },
    {
        pname: "Samsung Galaxy S21 Ultra",
        pId: "1002",
        pStatus: "Delivered",
        canReturn: '0',
        productDescription: "The Samsung Galaxy S21 Ultra features a 108MP quad camera with 100x Space Zoom, 12MP ultra-wide, and two 10MP telephoto lenses. It sports a 6.8-inch Dynamic AMOLED 2X display with a 120Hz refresh rate for smooth scrolling and gameplay. Powered by the Exynos 2100/Snapdragon 888 chipset, it runs on Android 12 with Samsung One UI 4.1. The Galaxy S21 Ultra supports 5G connectivity, has a 5000mAh battery, and offers up to 12GB RAM and 512GB storage.",
        productImg: "https://www.cnet.com/a/img/resize/3e495e5ec2d57f5893947cb6497fd9f4cf236c4e/hub/2021/01/20/5ac18449-617c-49ba-83f2-2971cb51078c/215-samsung-galaxy-s21-ultra-back.jpg?auto=webp&fit=crop&height=1200&width=1200"
    },
    {
        pname: "Sony PlayStation 5",
        pId: "1003",
        pStatus: "In-progress",
        canReturn: '1',
        productDescription: "The Sony PlayStation 5 (PS5) delivers stunning graphics with a custom RDNA 2 GPU and 16GB GDDR6 RAM. It features a lightning-fast SSD with 825GB storage, supporting fast loading times and immersive gaming experiences. The PS5 supports 4K gaming at up to 120fps, ray tracing, and 3D audio with the new DualSense wireless controller for haptic feedback and adaptive triggers. It also supports streaming services like Netflix, Disney+, and Spotify.",
        productImg: "https://s.yimg.com/os/creatr-uploaded-images/2020-11/7c9dc7a0-24f3-11eb-aed4-9f1ba3e2dec3"
    },
    {
        pname: "Nike Air Zoom Pegasus 38",
        pId: "1004",
        pStatus: "Dispatched",
        canReturn: '1',
        productDescription: "The Nike Air Zoom Pegasus 38 is designed for runners seeking responsive cushioning and a reliable fit. It features Zoom Air units in the forefoot and heel for a responsive feel, offering optimal energy return with every stride. The shoe's mesh upper provides breathable comfort, while Flywire technology integrates with the laces for a secure fit. The Nike Air Zoom Pegasus 38 is suitable for daily training and long-distance running.",
        productImg: "https://lh3.googleusercontent.com/YZaUfqPDVlNnu2lEvvF2jXe_izPNOhn1242c3vymYm2V0u3taJuftr7o-NZ8N2jeNyh6kWtsemHabTkpOvLxQHfzq6P0kbllQ7SNpriGAL5cpF-Enm-p4jKDc3Wud91mA0JUQsO7"
    },
    {
        pname: "Bose QuietComfort 45 Headphones",
        pId: "1005",
        pStatus: "Delivered",
        canReturn: '0',
        productDescription: "The Bose QuietComfort 45 Headphones feature Acoustic Noise Cancelling technology to block out ambient noise and provide clear audio. They offer a comfortable around-ear fit with plush ear cushions, ideal for extended listening sessions. The headphones include an intuitive control interface on the earcup for adjusting volume, managing calls, and activating voice assistants. They provide up to 24 hours of wireless playback and include a carrying case for portability.",
        productImg: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45_PDP_Ecom-Gallery-W05.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
    },
  ]

  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private _snackbarMsg : SnackbarService
  ) { }

  fetchProdInfo(){
    return this.productsArr
  }

  getProdObj(prodId : string){
      return this.productsArr.find(prod => prod.pId === prodId)
  }

  addProdInfo(newProd : Iprod){
       this.productsArr.push(newProd)
       this._router.navigate(['/products'])
       this._snackbarMsg.openSnackBar(`New product ${newProd.pname} added successfully!!`)
  }

  updateProdInfo(updateProd : Iprod){
    let getUpdateIndex = this.productsArr.findIndex(prod => prod.pId === updateProd.pId)
     let prevObj = this.productsArr[getUpdateIndex]

     this.productsArr[getUpdateIndex] = updateProd 
     this._router.navigate(['/products'])
     this._snackbarMsg.openSnackBar(`product ${prevObj.pname} is updated to ${updateProd.pname} successfully!!`)

  }

  removeProdInfo(prodId :Iprod){
    let getRemoveIndex = this.productsArr.findIndex(prod => prod.pId === prodId.pId)
    this.productsArr.splice(getRemoveIndex , 1)
    this._router.navigate(['/products'])
    this._snackbarMsg.openSnackBar(`product ${prodId.pname} removed successfully!!`)
  }
}
