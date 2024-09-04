import { NgModule } from '@angular/core';
import { MvpRoutingModule } from './mvp-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { MvpState } from './store';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {LandingComponent} from "./pages/home/landing.component";

@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    MvpRoutingModule,
    NgxsModule.forFeature([MvpState]),
  ],
  exports: [MvpRoutingModule],
})
export class MvpModule {}
