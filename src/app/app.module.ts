import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlockComponent } from './components/block/block.component';
import { NavComponent } from './components/nav/nav.component';
import { BlockchainComponent } from './components/blockchain/blockchain.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    NavComponent,
    BlockchainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
