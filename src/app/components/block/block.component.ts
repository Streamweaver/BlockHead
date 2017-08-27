import { Component, OnInit } from '@angular/core';
import { BlockData } from '../../models/block-data';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  data: BlockData;

  constructor() {}

  ngOnInit() {}

  getHash(): string {
    // examples https://stackoverflow.com/questions/16752924/good-stanford-javascript-crypto-library-sjcl-examples-js-cryptography
    // also http://blog.peramid.es/blog/2014/09/09/short-introduction-to-sjcl/
    return 'implement hash';
  }

}
