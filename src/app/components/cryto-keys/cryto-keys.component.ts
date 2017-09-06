import { Component, OnInit } from '@angular/core';
import * as sjcl from 'sjcl';
import {
  BitArray, SjclElGamalPublicKey, SjclElGamalSecretKey, SjclEllipticalCurve,
  SjclEllipticalCurveStatic
} from 'sjcl';


/* Links to examples:
   https://github.com/bitwiseshiftleft/sjcl/wiki/Asymmetric-Crypto
   http://blog.peramid.es/blog/2014/09/09/short-introduction-to-sjcl/

   Type Defenitions:
   https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/sjcl/index.d.ts
 */

@Component({
  selector: 'app-cryto-keys',
  templateUrl: './cryto-keys.component.html',
  styleUrls: ['./cryto-keys.component.scss']
})
export class CrytoKeysComponent implements OnInit {
  pubKey: string;
  secKey: string;
  reKey: string;

  constructor() { }

  ngOnInit() {}

  generateKeys() {
    const keyPair = sjcl.ecc.elGamal.generateKeys(256, 10);
    this.pubKey = this.serializePub(keyPair.pub);
    this.secKey = this.serializeSec(keyPair.sec);
  }

  serializePub(pub: SjclElGamalPublicKey): string {
    return sjcl.codec.base64.fromBits(pub.get().x.concat(pub.get().y));
  }

  unSerializePub(pub: string): SjclElGamalPublicKey {
    return new sjcl.ecc.elGamal.publicKey(
      sjcl.ecc.curves.c256,
      sjcl.codec.base64.toBits(pub)
    );
  }

  serializeSec(sec: SjclElGamalSecretKey): string {
    return sjcl.codec.base64.fromBits(sec.get());
  }

  unSerializeSec(sec: string): SjclElGamalSecretKey {
    return new sjcl.ecc.elGamal.secretKey(
      sjcl.ecc.curves.c256,
      sjcl.bn.fromBits(sjcl.codec.base64.toBits(sec))
    );
  }

  doRebuildKey() {
    const sec = this.unSerializeSec(this.secKey);
    this.reKey = sjcl.codec.base64.fromBits(sec.get());
  }
}

