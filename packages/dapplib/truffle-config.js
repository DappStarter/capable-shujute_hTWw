require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note soap attitude heavy produce bone ghost'; 
let testAccounts = [
"0x846efe2fda6752121dd41294a2629ec5deb1e8c0fab0030b53d431abb6bab27d",
"0xc23e370ef71d8d09f3d82a974e958634de2a931355bb2af249c0269d4e667da4",
"0x332ed606fd2d241576f4daaeb225dc5a18ec78c3c25ac963cd9b3d776e0f92dc",
"0x82eb53abcd0158bf613b19e8dcba574755cb815309811f488bc77a563af83ac0",
"0x6ce81d0e6e25787ae888b538ff5b216e0fa99f9b48f171f21aa4c6e79b906452",
"0xe8c1f0f1113d163b274fa2c4b16c96289f12a5a769b32294b577caffdaa128c5",
"0x408128b15f673b988730262c534025312868da5c903c9bbb83b550bcbae91b0c",
"0xb08a7efb3ae07f8180d8d245598b7331190dbf75e347c66193337aa9ca1c8186",
"0x5d933e1cf1f2851597e00d4b483a208f38607cc565b80d0ff45aa094ffa72597",
"0x52ba931ceb06a4ed2935608a79b7e9cdc893734eb543a6f05f2d9f324577572b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

