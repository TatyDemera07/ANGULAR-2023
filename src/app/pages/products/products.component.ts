import { Component, OnInit } from '@angular/core';
import { CreateProductDto, ProductModel, UpdateProductDto } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient as HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  httpClient: any;
   products:ProductModel[] = [];
   selectedProduct: UpdateProductDto = {title:'', price:0, description:''};
  productsServices: any;
  constructor(private productService:ProductService) {
  }
  privateProductId=0

  dataBody={
    title: '',
    price:0,
    description:''
  }
  initProduct(){
    this.selectedProduct = {title: '', price: 0, description:''};
  }

  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts() {
    this.productService.getAll().subscribe
      (response => {
        this.products = response;
        //console.log(response)
      });
  }
  getProduct() {
    const url = 'http://api.escuelajs.co/api/v1/products/20';
    this.productService.getOne(2).subscribe
      (response => {
        console.log(response)
      });
  }
  createProduct() {
    const data = {
      title: "Zapatos",
      price: 25,
      description: "Deportivos / Tatiana Demera",
      images: ['https://m.media-amazon.com/images/I/41lL4RYD-PL._SL500_.jpg'],
      categoryId: 1,
    }
    const url = 'http://api.escuelajs.co/api/v1/products';
    this.productsServices.store(data).subscribe
      ((response: any) => {
        console.log(response)
      });
  }
  updateProduct() {
    const data = {
      // title: "Camisetas",
      // price: 15,
      // description: "Deportivos / Tatiana Demera",
      // images: ['https://m.media-amazon.com/images/I/41lL4RYD-PL._SL500_.jpg'],
      // categoryId: 1
      ...this.selectedProduct,
      ...this.dataBody
    }
    console.log(data)
    //const url = 'http://api.escuelajs.co/api/v1/products/226';
    this.productService.update(this.privateProductId, data).subscribe(response => {
      console.log('hola')
    });
  }
  deleteProduct(id: ProductModel['id']){
    this.productService.destroy(id).subscribe(
      response =>{
        this.products = this.products.filter(product => product.id != id); 
        console.log(response);
      }
    );
  }
  editProduct(product:ProductModel){
    this.selectedProduct = product;
    this.privateProductId=product.id
  }
}

