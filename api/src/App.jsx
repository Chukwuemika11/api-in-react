import './App.css'
import Axios from 'axios';
import { useEffect, useState } from 'react';

// fetch("https://catfact.ninja/fact").then(function(res){
//   res.json().then(function(data){
    
//   })
// })

function App() {
  // const [catfact, setCatFact] = useState(""); 

  // function fetchCatFact(){
  //   useEffect(()=>{
  //     Axios.get("https://catfact.ninja/fact").then((res)=>{
  //       setCatFact(res.data.fact);
  //      });
  //   },[]);
  // }
  
  // useEffect(()=>{
  //  fetchCatFact();
  // },[]);
  // const [name, setName]  = useState("");
  // const [predictedAge, setPredictedAge] = useState(0);
  
  // function fetchData (){
  //   Axios.get(`https://api.agify.io/?name=${name}`).then(function(res){
  //     setPredictedAge(res.data.age);
  //   })
  // }

  // function changeName(event){
  //   setName(event.target.value);
  // }
 const [generatedExcuse, setGeneratedExcuse] = useState("");
  function fetchExcuse(excuse){
   Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res)=>{
    setGeneratedExcuse(res.data[0].excuse);
   });
  };

  return(
    <div>
      {/* <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catfact}</p> */}
{/* <input type="text" placeholder='enter name' onChange={changeName}/>
<button onClick={fetchData}>predictedAge</button>
<h1>predicted Age: {predictedAge}</h1> */}
<h1>Generate an excuse</h1>
<button onClick={()=>fetchExcuse("party")}>Party</button>
<button onClick={()=>fetchExcuse("family")}>Family</button>
<button onClick={()=>fetchExcuse("office")}>Office</button>
   
   <p>{generatedExcuse}</p>
    </div>
  )
}

export default App
