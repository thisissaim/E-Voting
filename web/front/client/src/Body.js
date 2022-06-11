import React , {useState} from 'react';

import './Body.css'

const Body = ({candidate1 , candidate2 , votecandidate , account}) => {

   const[Candidate,setCandidate] = useState("");

   const onchange = (e)=>{
       setCandidate(e.target.value);
   }

const onsubmit = (e)=>{
    e.preventDefault();//form wont be executed if empty
    if(Candidate.id!==0) votecandidate(Number(Candidate));
    else window.alert("Error in Submission");

}

  return (
    <div>
        <h2 className='el'>Election Results</h2>
        
        <div className=''>
            <div className='head'>
                <div className='col'>
                    <p className='title'>Id</p>
                </div>
                <div className='col'>
                    <p className='title'>Name</p>
                </div>
                <div className='col'>
                    <p className='title'>Votes</p>
                </div>
            </div>
            <hr/>
            <div className='row'>
                <div className='col'>
                    <p>{candidate1.id}</p>
                </div>
                <div className='col'>
                    <p>{candidate1.name}</p>
                </div>
                <div className='col'>
                    <p>{candidate1.voteCount}</p>
                </div>
            </div>
            <hr/>
            <div className='row'>
                <div className='col'>
                    <p>{candidate2.id}</p>
                </div>
                <div className='col'>
                    <p>{candidate2.name}</p>
                </div>
                <div className='col'>
                    <p>{candidate2.voteCount}</p>
                </div>
            </div>
        </div>
        <div className='cast'>
            <h4 className='castvote'>Cast Vote    </h4>
            <br/>
           
            <form onSubmit={onsubmit}>
                <select name='candidate' className='form-control' onChange={onchange}>
                    <option defaultValue="">
                        Select
                    </option>
                    <option value="1">{candidate1.name}</option>
                    <option value="2">{candidate2.name}</option>
                </select>
                <button className='btn btn-primary'>
                    Vote Candidate{" "}{Candidate}
                </button>
            </form>
        </div>
        <p className='my-5'>
            Address: <span className='font-weight-bold'>{account}</span>
        </p>
        
    </div>
  );
};

export default Body