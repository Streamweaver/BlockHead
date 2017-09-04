import { Component, OnInit } from '@angular/core';
import * as sjcl from 'sjcl';
import * as keypair from 'keypair';

// Promosing simple example library
// https://github.com/wwwtyro/cryptico


// Keypair library https://github.com/juliangruber/keypair

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
  pubKey: string;
  secKey: string;

  constructor() { }

  ngOnInit() {
    this.pubKey = 'Not Generated';
    this.secKey = 'Not Generated';
  }


  clickNewKeypair() {
    // sjcl.ecc.elGamal.generateKeys(256)
    const keyPair = keypair();
    this.pubKey = keyPair['public'];
    this.secKey = keyPair['private'];

  }
}
