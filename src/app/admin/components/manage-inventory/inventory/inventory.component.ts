import { Component } from '@angular/core';
import { InventoryService } from '../../../../service/inventory.service';
import { Inventory } from '../../../../model/inventory.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-inventory',
  imports: [CommonModule,FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
openEditModal(_t18: Inventory) {
throw new Error('Method not implemented.');
}
openInventoryForm() {
throw new Error('Method not implemented.');
}
updateInventory() {
throw new Error('Method not implemented.');
}
editing: any;
deleteInventory(arg0: number|undefined) {
throw new Error('Method not implemented.');
}
editInventory(_t16: Inventory) {
throw new Error('Method not implemented.');
}

  constructor(private inventoryService:InventoryService){}

  newInventory:Inventory={
    quantityInStock: 0,
    reorderLevel: 0,

  }

  inventories:Inventory[]=[];



  createInventory():void
  {
     this.inventoryService.addInventory(this.newInventory).subscribe((invent)=>{
      $("#addCategoryModal").modal("hide")
      this.inventories.push(invent)
      this.newInventory={
        quantityInStock: 0,
        reorderLevel: 0,
    
      }
     })
  }
  getAllInventory(){
    this.inventoryService.getInventory().subscribe((response)=>{
      this.inventories=response
    })
  }
}
