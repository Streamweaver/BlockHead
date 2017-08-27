import { Component, OnInit } from '@angular/core';
import { BlockData } from '../../models/block-data';

@Component({
  selector: 'app-block-chain',
  templateUrl: './block-chain.component.html',
  styleUrls: ['./block-chain.component.scss']
})
export class BlockChainComponent implements OnInit {

  blocks: BlockData[];

  constructor() { }

  ngOnInit() {
    this.blocks = [];
  }

}
