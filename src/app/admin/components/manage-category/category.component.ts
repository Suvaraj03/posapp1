import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../model/category';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-category',
  imports: [CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  constructor(private category: CategoryService) { }


  newCategory: Category = { name: "", description: "" }
  categories: Category[] = []
  editingCategory:Category|null=null
  updatedCategory:Category={ name: "", description: "" }

  createCategory(): void {
    this.category.addCategory(this.newCategory).subscribe((savedCategory) => {
      this.categories.push(savedCategory)
      this.newCategory = { name: "", description: "" }
      $("#addCategoryModal").modal("hide")
    });
  }

  showAllCategory() {
    this.category.getAllCategory().subscribe((categories) => {
      this.categories = categories
    })
  }
  ngOnInit(): void {
    this.showAllCategory()
  }
  editCategory(category:Category){
    this.editingCategory=category
    this.updatedCategory={...category}
  }
  updateCategory():void{
    if(this.editingCategory){
      this.category.editCategory(this.editingCategory.id!,this.updatedCategory)
      .subscribe((result)=>{
       const index=this.categories.findIndex((c)=>c.id==this.editingCategory!.id)
       if(index !=-1){
        this.categories[index]=result
        this.cancelEdit()
       }
      })
    }
  }
  cancelEdit(){
    this.editingCategory=null;
    this.updatedCategory={ name: "", description: "" }
  }

  deleteCategory(id:number){
    if(confirm('Are you sure Want to delete?'))
      this.category.deleteCategory(id)
    .subscribe(()=>{
      this.categories=this.categories.filter((c)=>c.id !==id)
      if(this.editingCategory && this.editingCategory.id==id){
        this.cancelEdit
      }
    })
  }

}
