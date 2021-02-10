import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PhotoComponent } from '../components/photo/photo.component';
import { HttpClient } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [
    HomePage,
    PhotoComponent
  ],
  providers: [
    HttpClient
  ]
})
export class HomePageModule {}
