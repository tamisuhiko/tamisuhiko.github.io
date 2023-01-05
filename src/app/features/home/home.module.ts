import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
  declarations: [HomeComponent],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
