import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  // salesChart: any; // For Sales Chart
  // productChart: any; // For Product Performance Chart

  // ngOnInit(): void {
  //   // Initialize charts on component load
  //   this.createSalesChart();
  //   this.createProductChart();
  // }

  // // Create Sales Chart
  // createSalesChart() {
  //   this.salesChart = new Chart('salesChart', {
  //     type: 'bar',
  //     data: {
  //       labels: ['January', 'February', 'March', 'April', 'May'],
  //       datasets: [{
  //         label: 'Sales ($)',
  //         data: [2000, 3000, 4000, 2500, 5200],
  //         backgroundColor: '#007bff',
  //         borderColor: '#0056b3',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }

  // // Create Product Performance Chart
  // createProductChart() {
  //   this.productChart = new Chart('productChart', {
  //     type: 'pie',
  //     data: {
  //       labels: ['Electronics', 'Clothing', 'Furniture', 'Food'],
  //       datasets: [{
  //         data: [120, 80, 60, 40],
  //         backgroundColor: ['#28a745', '#dc3545', '#ffc107', '#007bff']
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         legend: {
  //           position: 'top',
  //         }
  //       }
  //     }
  //   });
  // }
  salesChart: any; // For Sales Chart
  productChart: any; // For Product Performance Chart

  ngOnInit(): void {
    // Initialize charts on component load
    this.createSalesChart();
    
  }

  // Create Sales Chart
  createSalesChart() {
    this.salesChart = new Chart('salesChart', {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Sales ($)',
          data: [2000, 3000, 4000, 2500, 5200],
          backgroundColor: '#007bff',
          borderColor: '#0056b3',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Create Product Chart
  createProductChart() {
    this.productChart = new Chart('productChart', {
      type: 'pie',
      data: {
        labels: ['Electronics', 'Clothing', 'Furniture', 'Food'],
        datasets: [{
          data: [120, 80, 60, 40],
          backgroundColor: ['#28a745', '#dc3545', '#ffc107', '#007bff']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
      }
    });
  }
  

}
