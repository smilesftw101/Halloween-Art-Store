import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { PaintingDetailsComponent } from './painting-details/painting-details.component';
import { ArtDetailsComponent } from './art-details/art-details.component';
import { CartComponent } from './cart/cart.component';

//imported for HttpClient & shipping prices
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PaintingsComponent,
    PaintingDetailsComponent,
    ArtDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        { path: '', component: PaintingsComponent },
        { path: 'paintings/:paintingId', component: PaintingDetailsComponent },
        { path: 'cart', component: CartComponent },
        { path: 'shipping', component: ShippingComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
