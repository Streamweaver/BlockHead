# Blockhead

This is a small application that I am using to teach the basic concepts of blockchain.

## Various Notes

### Stanford Javascript Crypto Library

I am using this library to compute various hashes and for other crypto functions.

Some notes on installing and uisng this.

**Install Via NPM**

This requires both the sjcl library and the type library.

```nodejs
npm install sjcl @types/sjcl --save
```
**Importing**

To import use `import * as sjcl from 'sjcl'';`

**SHA256 Example**

There are some good examples online from [peramid.es](http://blog.peramid.es/blog/2014/09/09/short-introduction-to-sjcl/) and [stackoverflow](https://stackoverflow.com/questions/16752924/good-stanford-javascript-crypto-library-sjcl-examples-js-cryptography). 

A basic example of using an import:
```typescript
  private _getHash(): string {
      const hash = sjcl.hash.sha256.hash('this is my test string');
      return sjcl.codec.hex.fromBits(hash);
    }
```
