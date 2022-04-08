import Web3 from "web3";

// ADDRESS, KEY and URL are examples.
const CONTRACT_ADDRESS = "";//deploy.tsを実行してコンソールに表示されたアドレス
const PUBLIC_KEY = "";//hardhatのAccount0のPublicKey
const PRIVATE_KEY = "";//hardhatのAccount0のPrivateKey
const PROVIDER_URL = "http://localhost:8545";

const mintNFT = async () => {
    const web3 = new Web3(PROVIDER_URL);
    const contract = require("../artifacts/contracts/MYNFT.sol/MYNFT.json");
    const nftContract = new web3.eth.Contract(contract.abi, CONTRACT_ADDRESS);
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest");
    const tx = {
        from: PUBLIC_KEY,
        to: CONTRACT_ADDRESS,
        nonce: nonce,
        gas: 500000,
        data: nftContract.methods.mint(PUBLIC_KEY).encodeABI(),
    };

    const signPromise = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);

    if (signPromise.rawTransaction !== undefined) {
        web3.eth.sendSignedTransaction(signPromise.rawTransaction, function (err, hash) {
            if (!err) {
                console.log("トランザクションhash: ", hash);
            } else {
                console.log("トランザクション発行エラー:", err);
            }
        })
    }
}

export default mintNFT