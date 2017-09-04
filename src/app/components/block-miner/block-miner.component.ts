import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BlockData } from '../../models/block-data';
import * as sjcl from 'sjcl';


@Component({
  selector: 'app-block-miner',
  templateUrl: './block-miner.component.html',
  styleUrls: ['./block-miner.component.scss']
})
export class BlockMinerComponent implements OnInit {
  next_id: number;
  prev_hash: string;
  blockData: BlockData;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.nextBlock();
  }

  nextBlock() {
    this.next_id = (this.next_id) ? this.next_id++ : 1;
    this.prev_hash = (this.blockData) ? this.blockData.hash : '000000000';
    this.blockData = {
      id: this.next_id,
      nonce: this._getRandomInt(0, 100000),
      body: '',
      prev: this.prev_hash,
      hash: this._getHash()
    };
  }

  isValid(): boolean {
    return true;
  }

  onBlockSubmit() {
    this.dataService.addBlock(this.blockData);
    this.nextBlock();
  }

  diagnostic(): string {
    return JSON.stringify(this.blockData);
  }

  /* Gets a random int inclusive of range of min to max */
  private _getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /* Gets the Hash Value of the block blockData */
  private _getHash(): string {
    const hash = sjcl.hash.sha256.hash('this is my test string');
    return sjcl.codec.hex.fromBits(hash);
  }

}
