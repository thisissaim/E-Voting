const path = require('path')

const mkdirp = require("mkdirp");
const fs = require("fs");

const writeFile = async (path, content) => {
  await mkdirp(path);
  fs.writeFileSync(path, content);
};


const solc = require('solc');
const { default: Web3 } = require('web3');
Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
const electionPath = path.resolve(__dirname, 'contract' , 'Election.sol');
const source = fs.readFileSync(electionPath , 'utf-8');

var output = (solc.compile(source , 1));
console.log(output);
ABI = output.contracts["Election.sol"]["Election"].abi;
bytecode=output.contracts["Election.sol"]["ELection"].evm.bytecode.object;
console.log("ABI" . ABI);
console.log("Bytecode" , bytecode);


