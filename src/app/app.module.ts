import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { ServicespanelComponent } from './servicespanel/servicespanel.component';
import { ClientreviewComponent } from './clientreview/clientreview.component';
import { EmployeesComponent } from './employees/employees.component';
import { PromoComponent } from './promo/promo.component';
import { BlogComponent } from './blog/blog.component';
import { TwittertimelineComponent } from './twittertimeline/twittertimeline.component';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { NgxStepperModule } from 'ngx-stepper';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ListTipsComponent } from './list-tips/list-tips.component';
import { ListPromoComponent } from './list-promo/list-promo.component';
import { TipDetailComponent } from './tip-detail/tip-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailListComponent } from './service-detail-list/service-detail-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TipsService } from './provider/tips/tips.service';
import { ServiceService } from './provider/service/service.service';


const appRoutes: Routes =
  [
    {
      path: 'signup',
      component: SignupComponent
    },
    { path: '', component: HomeComponent },
    { path: 'tips', component: ListTipsComponent },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'promos',
      component: ListPromoComponent
    },
    {
      path: 'portfolio',
      component: PortfolioComponent
    },
    {
      path: 'tipDetail',
      component: TipDetailComponent
    },
    {
      path: 'serviceList',
      component: ServiceListComponent
    },
    {
      path: 'serviceDetailList',
      component: ServiceDetailListComponent
    },
    {
      path: 'employeeList',
      component: EmployeeListComponent
    },
    { path: '', component: HomeComponent }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HeroComponent,
    ServicespanelComponent,
    ClientreviewComponent,
    EmployeesComponent,
    PromoComponent,
    BlogComponent,
    TwittertimelineComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    ListTipsComponent,
    ListPromoComponent,
    TipDetailComponent,
    ServiceListComponent,
    ServiceDetailListComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    Ng4TwitterTimelineModule,
    AngularFontAwesomeModule,
    routing,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgxStepperModule
  ],
  providers: [TipsService, ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
