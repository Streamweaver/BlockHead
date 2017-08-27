import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlockComponent } from './components/block/block.component';
import { NavComponent } from './components/nav/nav.component';
import { DataService } from './services/data.service';
import { BlockMinerComponent } from './components/block-miner/block-miner.component';
import { BlockChainComponent } from './components/block-chain/block-chain.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    NavComponent,
    BlockMinerComponent,
    BlockChainComponent,
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
