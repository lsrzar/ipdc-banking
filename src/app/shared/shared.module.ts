import { NavigationComponent } from './header/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [CommonModule, HeaderModule, NavbarModule],
})
export class SharedModule {}
