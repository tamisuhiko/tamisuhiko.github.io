import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { UserRepositoryService } from './services/user-repository.service';

//CommonModule - Using for ngClass, ng**,.. in the elements

@NgModule({
  imports: [CommonModule],
  exports: [
    WrapperComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  declarations: [
    WrapperComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  providers: [UserRepositoryService],
  bootstrap: [],
})
export class CoreModule {}
