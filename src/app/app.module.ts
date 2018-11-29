import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ImgSlideComponent } from './image-slider/img-slide/img-slide.component';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {GalleryConfig} from './image-gallery/token';

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    ImgSlideComponent
  ],
  imports: [
    BrowserModule,
    ImageGalleryModule
  ],
  providers: [{provide: GalleryConfig, useValue: 2}],
  bootstrap: [AppComponent]
})
export class AppModule { }
