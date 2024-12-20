import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales',
  imports: [CommonModule,FormsModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
sales: any;

}
