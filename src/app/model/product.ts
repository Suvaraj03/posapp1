import { interval } from "rxjs";
import { Category } from "./category";
import { Inventory } from "./inventory.model";

export interface Product {
    id?: number;       
    name: string;
    description: string;
    price: number;      
    quantity: number;  
    category: Category;
    inventory:Inventory;
  }
