import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LottieAnimationViewModule } from 'ng-lottie';
import {
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatGridListModule,
  MatDialogModule,
  MatBadgeModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatInputModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatChipsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatStepperModule,
  MatOptionModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './components/icon/icon.component';
import { IconDefinitionsComponent } from './components/icon-definitions/icon-definitions.component';

@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonToggleModule,
    LottieAnimationViewModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    IconComponent,
    IconDefinitionsComponent
  ],
  declarations: [IconComponent, IconDefinitionsComponent]
})
export class SharedModule {}
