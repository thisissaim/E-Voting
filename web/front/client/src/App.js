import React, { useEffect, useState } from 'react';

import './App.css';
import Body from './Body';
import Electionabi from './contracts/Election.json'
import ContactUs from './ContactUs';
import Web3 from "web3";
import Navbar from "./Navbar";


function App() {

  useEffect(() =>{
    loadWeb3();
    loadBlockchainData();

  } , [])

  const[currentAccount , setCurrentAccount] = useState("");
  const[loader,setloader] = useState(true);
  const[Electionsm,SetElectionsm] = useState();
  const[Candidate1 , setCandidate1] = useState();
  const[Candidate2 , setCandidate2] = useState();

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockchainData = async () => {
    setloader(true);
   

    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentAccount(account);

    const networkId = await web3.eth.net.getId();

    const networkData = Electionabi.networks[networkId];

    if (networkData) {
      const election = new web3.eth.Contract(Electionabi.abi, networkData.address);
      const candidate1 = await election.methods.candidates(1).call();
      const candidate1id = candidate1.id;
      // const candidate1name = candidate1.name;
      // const candidate1votecount = candidate1.voteCount;
      const candidate2 = await election.methods.candidates(2).call();
      // const candidate2id = candidate2.id;
      // const candidate2name = candidate2.name;
      // const candidate2votecount = candidate2.voteCount;
     setCandidate1(candidate1);
     setCandidate2(candidate2);

      console.log(candidate1);
      console.log(candidate2);
      console.log(candidate1id);
      console.log(Candidate1);

      SetElectionsm(election);
      setloader(false);//stop loading if network connects 
    }
    else{
      window.alert("Not deployed on current network");
    }
  };

  const votecandidate = async (candidateid) =>{
    setloader(true);
    await Electionsm
    .methods
    .vote(candidateid)
    .send({from : currentAccount})
    .on("TransactionHash" , ()=>{
      console.log("Successfully Ran!");
    })
    setloader(false);
  }

  if(loader){
    return <div>Loading...</div>
  }

  return (
    <div>
   <Navbar account = {currentAccount}/>
   <Body
    candidate1 = {Candidate1}
     candidate2 = {Candidate2}
      votecandidate={votecandidate}
      account = {currentAccount}
      />
    <login/>
      <ContactUs />
    </div>
  );
};

export default App;