import { Injectable } from '@angular/core';
import { BlockData } from '../models/block-data';

@Injectable()
export class DataService {

  blockChain: BlockData[];

  constructor() { }

  getBlocks() {
    return this.blockChain;
  }

  addBlock(data: BlockData) {
    this.blockChain.push(data);
  }
}
