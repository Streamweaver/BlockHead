import { Component, OnInit } from '@angular/core';
import * as sjcl from 'sjcl';

// Some examples of encoding
/* Key examples and code pulled form sjcl wiki at
   https://github.com/bitwiseshiftleft/sjcl/wiki/Asymmetric-Crypto
 */

@Component({
  selector: 'app-cryto-keys',
  templateUrl: './cryto-keys.component.html',
  styleUrls: ['./cryto-keys.component.scss']
})
export class CrytoKeysComponent implements OnInit {
  keyPair: any;
  pubKey: string;
  secKey: string;

  constructor() { }

  ngOnInit() {
    this.pubKey = 'Not Generated';
    this.secKey = 'Not Generated';
  }


  clickNewKeypair() {
    const keyPair = sjcl.ecc.elGamal.generateKeys(256, 10);
    const pub = keyPair.pub.get();
    const sec = keyPair.sec.get();
    this.pubKey = sjcl.codec.base64.fromBits(pub.x.concat(pub.y));
    this.secKey = sjcl.codec.base64.fromBits(sec);

  }

  getPub() {
    return this.keyPair.pub.get();
  }

  getSec() {
    return this.keyPair.sec.get();
  }
}
