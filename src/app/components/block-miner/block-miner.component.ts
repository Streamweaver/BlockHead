import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BlockData } from '../../models/block-data';

@Component({
  selector: 'app-block-miner',
  templateUrl: './block-miner.component.html',
  styleUrls: ['./block-miner.component.scss']
})
export class BlockMinerComponent implements OnInit {
  next_id: number;
  prev_hash: string;
  data: BlockData;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.next_id = 0;
    this.data = {
      id: this.next_id,
      nonce: 1000,
      body: '',
      prev: '',
      hash: ''
    };
  }

  isValid(): boolean {
    return true;
  }

  onBlockSubmit() {
    this.dataService.addBlock(this.data);
  }
}
