import { Injectable } from '@angular/core';
import { BlockData } from '../models/block-data';

@Injectable()
export class DataService {

  blocks: BlockData[];
  constructor() { }

  getBlocks() {
    console.log('Implement getBlocks');
  }

  addBlock(data) {
    console.log('Impleent addBlocks');
  }
}
