import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatDialogModule
} from '@angular/material';
import { UIHelperService } from '../langing-page/ui-helper.service';

import { AppLoaderComponent } from './services/app-loader/app-loader.component';

// DIRECTIVES
import { FontSizeDirective } from './directives/font-size.directive';
import { ScrollToDirective } from './directives/scroll-to.directive';

// SERVICES
import { AuthGuard } from './services/auth/auth.guard';
import { AppLoaderService } from './services/app-loader/app-loader.service';
import { LandingFixService } from '../shared/services/landing-fix.service';

const classesToInclude = [
  AppLoaderComponent,
  FontSizeDirective,
  ScrollToDirective
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDialogModule,
  ],
  entryComponents: [AppLoaderComponent],
  providers: [AuthGuard, AppLoaderService, LandingFixService, UIHelperService],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class SharedModule {}
