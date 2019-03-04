import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { LandingPageComponent } from './langing-page/landing-page.component';
import { WINDOW_PROVIDERS } from './shared/helpers/window.helper';
import { HeaderComponent } from './layouts/shared-sections/header/header.component';
import { FooterComponent } from './layouts/shared-sections/footer/footer.component';
import { SignInComponent } from './signin/signin.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/services/auth/auth.service';
import { CountUpModule } from 'countup.js-angular2';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ComponentsModule } from './components/components.module';

const config: SocketIoConfig = {
  url: 'https://hitadata.com',
  options: {}
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    MatIconModule,
    ComponentsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    CountUpModule,
    MatTooltipModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    SignInComponent,
    AdminLayoutComponent
  ],
  providers: [WINDOW_PROVIDERS, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
