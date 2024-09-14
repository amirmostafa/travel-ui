import { Routes } from '@angular/router';
import { IndexOneComponent } from './pages/index/index-one/index-one.component';
import { IndexTwoComponent } from './pages/index/index-two/index-two.component';
import { IndexThreeComponent } from './pages/index/index-three/index-three.component';
import { IndexFourComponent } from './pages/index/index-four/index-four.component';
import { IndexFiveComponent } from './pages/index/index-five/index-five.component';
import { GridComponent } from './pages/listing/tour-grid/grid/grid.component';
import { GridLeftSidebarComponent } from './pages/listing/tour-grid/grid-left-sidebar/grid-left-sidebar.component';
import { GridRightSidebarComponent } from './pages/listing/tour-grid/grid-right-sidebar/grid-right-sidebar.component';
import { ListComponent } from './pages/listing/tour-list/list/list.component';
import { ListLeftSidebarComponent } from './pages/listing/tour-list/list-left-sidebar/list-left-sidebar.component';
import { ListRightSidebarComponent } from './pages/listing/tour-list/list-right-sidebar/list-right-sidebar.component';
import { TourDetailOneComponent } from './pages/listing/tour-detail/tour-detail-one/tour-detail-one.component';
import { TourDetailTwoComponent } from './pages/listing/tour-detail/tour-detail-two/tour-detail-two.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { UserProfileComponent } from './pages/account/user-profile/user-profile.component';
import { UserPaymentComponent } from './pages/account/user-payment/user-payment.component';
import { UserInvoiceComponent } from './pages/account/user-invoice/user-invoice.component';
import { UserSocialComponent } from './pages/account/user-social/user-social.component';
import { UserNotificationComponent } from './pages/account/user-notification/user-notification.component';
import { UserSettingComponent } from './pages/account/user-setting/user-setting.component';
import { HelpcenterComponent } from './pages/helpcenter/helpcenter/helpcenter.component';
import { HelpcenterFaqsComponent } from './pages/helpcenter/helpcenter-faqs/helpcenter-faqs.component';
import { HelpcenterGuidesComponent } from './pages/helpcenter/helpcenter-guides/helpcenter-guides.component';
import { HelpcenterSupportComponent } from './pages/helpcenter/helpcenter-support/helpcenter-support.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SignupSuccessComponent } from './pages/auth/signup-success/signup-success.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { LockScreenComponent } from './pages/auth/lock-screen/lock-screen.component';
import { TermsComponent } from './pages/utility/terms/terms.component';
import { PrivacyComponent } from './pages/utility/privacy/privacy.component';
import { ComingsoonComponent } from './pages/special/comingsoon/comingsoon.component';
import { MaintenanceComponent } from './pages/special/maintenance/maintenance.component';
import { ErrorComponent } from './pages/special/error/error.component';
import { BlogsComponent } from './pages/blog/blogs/blogs.component';
import { BlogStandardComponent } from './pages/blog/blog-standard/blog-standard.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:'', component:IndexOneComponent},
    {path:'index-two', component:IndexTwoComponent},
    {path:'index-three', component:IndexThreeComponent},
    {path:'index-four', component:IndexFourComponent},
    {path:'index-five', component:IndexFiveComponent},
    {path:'grid', component:GridComponent},
    {path:'grid-left-sidebar', component:GridLeftSidebarComponent},
    {path:'grid-right-sidebar', component:GridRightSidebarComponent},
    {path:'list', component:ListComponent},
    {path:'list-left-sidebar', component:ListLeftSidebarComponent},
    {path:'list-right-sidebar', component:ListRightSidebarComponent},
    {path:'tour-detail-one', component:TourDetailOneComponent},
    {path:'tour-detail-one/:id', component:TourDetailOneComponent},

    {path:'tour-detail-two', component:TourDetailTwoComponent},
    {path:'aboutus', component:AboutusComponent},
    {path:'user-profile', component:UserProfileComponent},
    {path:'user-payment', component:UserPaymentComponent},
    {path:'user-invoice', component:UserInvoiceComponent},
    {path:'user-social', component:UserSocialComponent},
    {path:'user-notification', component:UserNotificationComponent},
    {path:'user-setting', component:UserSettingComponent},
    {path:'helpcenter', component:HelpcenterComponent},
    {path:'helpcenter-faqs', component:HelpcenterFaqsComponent},
    {path:'helpcenter-guides', component:HelpcenterGuidesComponent},
    {path:'helpcenter-support', component:HelpcenterSupportComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'signup-success', component:SignupSuccessComponent},
    {path:'forgot-password', component:ForgotPasswordComponent},
    {path:'lock-screen', component:LockScreenComponent},
    {path:'terms', component:TermsComponent},
    {path:'privacy', component:PrivacyComponent},
    {path:'comingsoon', component:ComingsoonComponent},
    {path:'maintenance', component:MaintenanceComponent},
    {path:'404', component:ErrorComponent},
    {path:'blogs',component:BlogsComponent},
    {path:'blog-standard', component:BlogStandardComponent},
    {path:'blog-detail', component:BlogDetailComponent},
    {path:'blog-detail/:id', component:BlogDetailComponent},
    {path:'contact',component:ContactComponent}
];
