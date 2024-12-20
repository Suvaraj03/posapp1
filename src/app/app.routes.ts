import { ChildActivationStart, Routes } from '@angular/router';
import { RegisterComponent } from './shared/register/register.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { LoginComponent } from './shared/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { ManageProductsComponent } from './admin/components/manage-products/manage-products.component';
import { authGuard } from './guard/auth-guard';
import { CategoryComponent } from './admin/components/manage-category/category.component';
import { InventoryComponent } from './admin/components/manage-inventory/inventory/inventory.component';


export const routes: Routes = [
    { path: "", component: HomePageComponent },
    { 
      path: "admin", 
      component: AdminComponent, 
      data: { breadcrumb: 'Admin' }, 
      children: [
        { path: "", redirectTo: "dashboard", pathMatch: "full" },
        { 
          path: "dashboard", 
          component: DashboardComponent, 
          canActivate: [authGuard], 
          data: { breadcrumb: 'Dashboard' } 
        },
        { 
          path: "manage-products", 
          component: ManageProductsComponent, 
          data: { breadcrumb: 'Manage-Product' } 
        },
        { 
          path: "manage-category", 
          component: CategoryComponent, 
          data: { breadcrumb: 'Manage-Category' } 
        },
        {
          path:"manage-inventory",
          component: InventoryComponent,
          data:{ breacrumb:"Manage-Inventory"}
        }
      ]
    }
  ];