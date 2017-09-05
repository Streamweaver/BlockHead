# Blockhead

This is a small application that I am using to teach the basic concepts of blockchain.

## Various Notes

### Stanford Javascript Crypto Library

I am using this library to compute various hashes and for other crypto functions.

Some notes on installing and uisng this.

**Installing with ECC**

In order to use the asymetric crypto features of the SJCL library you need to build the library at command line using the --with-ecc option for configure.  Directions for compiling.  This build depends on perl and java for make to work.

In my instance I configured the build with options for `--with-ecc --with-srp`

An important part of the `make test` step is it confirms witch options are enabled in the test ouput.

**Installing**

Running `npm install` from the project root should install the compiled version from `vendors/sjcl-ecc/` into node_modules/

I'm unsure if sjcl types is helpful but have installed those via the following command:

```nodejs
npm install @types/sjcl --save
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
