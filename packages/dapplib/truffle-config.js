require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth predict coach hope problem oil stadium'; 
let testAccounts = [
"0xfe29ee60084679b5faf071ebcd8a106cce8e211dfb025036e6774e3a970436c7",
"0xc83b3d52e366f8f8ebb8340943c12626b97ed95baa2226f35d44df2ed2bee768",
"0x474995282781632d1326e4f43d99638ae2f5c4073d3be6f86d1f2d2a0b28106f",
"0xcc9f8d9b786eaa7c0f05034206adcf8bafb18e930b93399f846c1d27ab0558c3",
"0x05b4f68edb87747a9274a845fb681943f2f2acfd4eb8eb428d3442696d188ce5",
"0xf9740ed99978401b4cc790cf58238fa45f60dc9b91559084a70d861c4d7bca6e",
"0x3f3daa45a56f14d2a13308589c860517431602d2c7184e25fa9042c28c906704",
"0x9268ec4ced3f5ce918748245f737c881b44b23524fe984510e23888d65de44ed",
"0x2bbac1c5e3ef749af65599add4919ae0d4d0f0eafcb384153364d1d85447a35e",
"0xfb0ab087dcef8be3cd64a0cabb76e9c28e26ccf683ea9991aba697756dc9e2fe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


