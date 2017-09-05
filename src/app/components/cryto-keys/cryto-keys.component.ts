import { Component, OnInit } from '@angular/core';
import * as sjcl from 'sjcl';

/* Links to examples:
   https://github.com/bitwiseshiftleft/sjcl/wiki/Asymmetric-Crypto
   http://blog.peramid.es/blog/2014/09/09/short-introduction-to-sjcl/
 */

@Component({
  selector: 'app-cryto-keys',
  templateUrl: './cryto-keys.component.html',
  styleUrls: ['./cryto-keys.component.scss']
})
export class CrytoKeysComponent implements OnInit {
  keyPair: any;
  pub: any;
  sec: any;
  serializedPub: string;
  serializedSec: string;
  msgOriginal: string;
  msgEncrypted: any;
  msgDecrypted: string;

  constructor() { }

  ngOnInit() {
    this.serializedPub = 'Not Generated';
    this.serializedSec = 'Not Generated';
  }


  clickNewKeypair() {
    const keyPair = sjcl.ecc.elGamal.generateKeys(256, 10);
    this.pub = keyPair.pub.get();
    this.sec = keyPair.sec.get();
    this.serializedPub = sjcl.codec.base64.fromBits(this.pub.x.concat(this.pub.y));
    this.serializedSec = sjcl.codec.base64.fromBits(this.sec);

  }

  getSec() {
    return this.sec.get();
  }

  doEncryptMsg() {
    this.msgEncrypted = sjcl.encrypt(this.serializedPub, this.msgOriginal);
  }

  doDecryptMsg() {
    return false;
  }
}
/* Not on encrypted output
{
"iv":"tjp81jkAzUpW1bI9gLDDpg==", // iv Base64 encoded
"v":1,                           // version
"iter":1000,                     // iteration count
"ks":128,                        // key size in bits
"ts":64,                         // authentication strength
"mode":"ccm",                    // mode
"adata":"xxx",                   // authenticated data
"cipher":"aes",                  // cipher
"salt":"lx06UoJDNys=",           // key derivation salt
"ct":"Gv7ptKdTtUz6AGtX"          // ciphet text
}
 */
