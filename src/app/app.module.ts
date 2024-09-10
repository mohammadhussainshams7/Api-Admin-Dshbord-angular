import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/user/home/home.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { BlogComponent } from './components/user/blog/blog.component';
import { BlogDetailsComponent } from './components/user/blog-details/blog-details.component';
import { PortfolioDetailsComponent } from './components/user/portfolio-details/portfolio-details.component';
import { ServicesDetailsComponent } from './components/user/services-details/services-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateBlogComponent } from './components/admin/create-blog/create-blog.component';
import { CreateServiceComponent } from './components/admin/create-service/create-service.component';
import { CreatePortfolioComponent } from './components/admin/create-portfolio/create-portfolio.component';
import { ShowPortfolioComponent } from './components/admin/show-portfolio/show-portfolio.component';
import { ShowServiceComponent } from './components/admin/show-service/show-service.component';
import { UpdateServiceComponent } from './components/admin/update-service/update-service.component';
import { UpdatePortfolioComponent } from './components/admin/update-portfolio/update-portfolio.component';
import { UpdateBlogComponent } from './components/admin/update-blog/update-blog.component';
import { NavbarAdminComponent } from './components/admin/navbar-admin/navbar-admin.component';
import { ShowBlogComponent } from './components/admin/show-blog/show-blog.component';
import { MainpageadminComponent } from './components/admin/mainpageadmin/mainpageadmin.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ShowoneblogComponent } from './components/admin/showoneblog/showoneblog.component';
import { ShowoneportfolioComponent } from './components/admin/showoneportfolio/showoneportfolio.component';
import { ShowoneserviceComponent } from './components/admin/showoneservice/showoneservice.component';
import { LoginComponent } from './components/admin/login/login.component';
import { NavbartopComponent } from './components/admin/navbartop/navbartop.component';
import { ModalNavbarComponent } from './components/admin/modal-navbar/modal-navbar.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BlogComponent,
    BlogDetailsComponent,
    PortfolioDetailsComponent,
    ServicesDetailsComponent,
    NotFoundComponent,
    CreateBlogComponent,
    CreateServiceComponent,
    CreatePortfolioComponent,
    ShowPortfolioComponent,
    ShowServiceComponent,
    UpdateServiceComponent,
    UpdatePortfolioComponent,
    UpdateBlogComponent,
    NavbarAdminComponent,
    ShowBlogComponent,
    MainpageadminComponent,
    ShowoneblogComponent,
    ShowoneportfolioComponent,
    ShowoneserviceComponent,
    LoginComponent,
    NavbartopComponent,
    ModalNavbarComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    /*   The HttpClientModule is a service 
     *   module provided by Angular that allows
     *   us to perform HTTP requests and easily
     *   manipulate those requests
     *   and their responses 
    */
    HttpClientModule,
    /*  Exports the required providers and 
     *  directives for template-driven forms */
    FormsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
