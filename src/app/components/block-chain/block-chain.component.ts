import { Component, OnInit } from '@angular/core';
import { BlockData } from '../../models/block-data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-block-chain',
  templateUrl: './block-chain.component.html',
  styleUrls: ['./block-chain.component.scss']
})
export class BlockChainComponent implements OnInit {

  blockChain: BlockData[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.blockChain = this.dataService.getBlocks();
  }

}
