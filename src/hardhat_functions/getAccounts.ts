import Web3 from "web3"

const getAccounts = async() => {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    const accountsList = await web3.eth.getAccounts()
    console.log(accountsList)
    return accountsList
}

export default getAccounts