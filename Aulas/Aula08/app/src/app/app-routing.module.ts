import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextInterpolationComponent } from './components/views/text-interpolation/text-interpolation.component';
import { PropertyBindingComponent } from './components/views/property-binding/property-binding.component';
import { EventBindingComponent } from './components/views/event-binding/event-binding.component';
import { TwoWayDataBindComponent } from './components/views/two-way-data-bind/two-way-data-bind.component';

const routes: Routes = [
  { path: '', component: TextInterpolationComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'event-two-way-data-bind', component: TwoWayDataBindComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
