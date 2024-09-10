import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/user/home/home.component';
import { BlogComponent } from './components/user/blog/blog.component';
import { BlogDetailsComponent } from './components/user/blog-details/blog-details.component';
import { PortfolioDetailsComponent } from './components/user/portfolio-details/portfolio-details.component';
import { ServicesDetailsComponent } from './components/user/services-details/services-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateBlogComponent } from './components/admin/create-blog/create-blog.component';
import { UpdateBlogComponent } from './components/admin/update-blog/update-blog.component';
import { CreatePortfolioComponent } from './components/admin/create-portfolio/create-portfolio.component';
import { UpdatePortfolioComponent } from './components/admin/update-portfolio/update-portfolio.component';
import { CreateServiceComponent } from './components/admin/create-service/create-service.component';
import { UpdateServiceComponent } from './components/admin/update-service/update-service.component';
import { ShowPortfolioComponent } from './components/admin/show-portfolio/show-portfolio.component';
import { ShowBlogComponent } from './components/admin/show-blog/show-blog.component';
import { ShowServiceComponent } from './components/admin/show-service/show-service.component';
import { MainpageadminComponent } from './components/admin/mainpageadmin/mainpageadmin.component';
import { ShowoneblogComponent } from './components/admin/showoneblog/showoneblog.component';
import { ShowoneportfolioComponent } from './components/admin/showoneportfolio/showoneportfolio.component';
import { ShowoneserviceComponent } from './components/admin/showoneservice/showoneservice.component';
import { LoginComponent } from './components/admin/login/login.component';

const routes: Routes = [
  /* Main Routers */
  {path : '', component : HomeComponent},
  {path : 'blog', component : BlogComponent},
  {path : 'blog-details' , component : BlogDetailsComponent}, 
  {path : 'portfolio-details' , component :PortfolioDetailsComponent },
  {path : "services-details" , component : ServicesDetailsComponent},
  {path:"login" , component:LoginComponent},

  /* admin Routers */
  {path:"admin" , component:MainpageadminComponent , children:[

    { path: '', redirectTo: 'show-blog', pathMatch: 'full' },
    {path:"show-blog" , component:ShowBlogComponent},
    {path:"create-blog",component:CreateBlogComponent},
    {path:"update-blog/:id",component:UpdateBlogComponent},
    {path:"show-one-blog/:id" , component:ShowoneblogComponent},

  
  
    {path:"show-portfolio" , component:ShowPortfolioComponent},
    {path:"create-portfolio",component:CreatePortfolioComponent},
    {path:"update-portfolio/:id",component:UpdatePortfolioComponent},
    {path:"show-one-portfolio/:id",component:ShowoneportfolioComponent},
    
    {path:"show-service" , component:ShowServiceComponent},
    {path:"create-service" , component:CreateServiceComponent},
    {path:"update-service/:id" , component:UpdateServiceComponent},
    {path:"show-one-service/:id" , component:ShowoneserviceComponent},
  
  ]},
  
  /* If Not Found Path In Routers Show The Router */
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
