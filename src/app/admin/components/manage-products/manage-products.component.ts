import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../service/product.service';
import { Category } from '../../../model/category';
import { CategoryService } from '../../../service/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent implements OnInit {

  filteredProducts: Product[] = []
  myProducts : Product[] = []
  myCategories:Category[]=[] ;
  isEditMode: any;
  newProduct:Product ={
    name: "", description: "", price: 0, quantity: 0, category: { name: "", description: "" },
    inventory: {
      quantityInStock: 132,
      reorderLevel: 0
    }
  }

  constructor(private productService:ProductService,private categoryService:CategoryService){}
  
  
  ngOnInit(): void {
   
    this.productService.getProduct().subscribe((res)=>{
      this.myProducts=res
    })
    this.getCategories()
  }

  



  onAddProduct() {
    throw new Error('Method not implemented.');
  }
  onEditProduct(_t18: any) {
    throw new Error('Method not implemented.');
  }
  
  onSubmit() {
    this.productService.addProduct(this.newProduct).subscribe((savedProduct)=>{
      this.myProducts.push(savedProduct)
      this.newProduct ={name:"",description:"",price:0,quantity:0 ,category:{name:"",description:""}, inventory: {
        quantityInStock: 132,
        reorderLevel: 0
      }}
    })
  }

 

  filterCategory(arg0: string) {
    throw new Error('Method not implemented.');
  }

  getCategories(){
    this.categoryService.getAllCategory().subscribe((response)=>{
      this.myCategories=response;
    })
  }


}
