import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  min_nonce = 0;
  max_nonce = 1000000;
  blockid: number;
  nonce: number;
  content: string;
  prev_block: string;
  hash: string;

  constructor() {
    this.blockid = 1;
    this.nonce = this.newNonce();
    this.hash = this.getHash();
  }

  ngOnInit() {
  }

  newNonce(): number {
    return Math.round(Math.random() * (this.max_nonce - this.min_nonce)
      + this.min_nonce);
  }

  getHash(): string {
    // examples https://stackoverflow.com/questions/16752924/good-stanford-javascript-crypto-library-sjcl-examples-js-cryptography
    // also http://blog.peramid.es/blog/2014/09/09/short-introduction-to-sjcl/
    let data = String(this.blockid);
    data += String(this.nonce);
    data += this.content;
    data += this.prev_block;
    return data;
  }

}
