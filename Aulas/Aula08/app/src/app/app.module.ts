import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TextInterpolationComponent } from './components/views/text-interpolation/text-interpolation.component';
import { PropertyBindingComponent } from './components/views/property-binding/property-binding.component';
import { EventBindingComponent } from './components/views/event-binding/event-binding.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { TwoWayDataBindComponent } from './components/views/two-way-data-bind/two-way-data-bind.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    ButtonComponent,
    TwoWayDataBindComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
