import './App.css';
import {useState,useRef,useEffect} from 'react';
import Ticker from 'react-ticker'
import {db,app_storage} from './firebase1';
import {collection,getDocs,addDoc,updateDoc,doc,query,where,onSnapshot,add} from 'firebase/firestore';
function Content() {
    
    
    const [Users, setUsers] = useState([]);
    const texter = useRef();
    const name = useRef();
   useEffect(()=>{

      const USERS = collection(db,"users"); 
           onSnapshot(USERS,(snap)=>{
           setUsers(snap.docs.map((doc)=>({...doc.data(), id:doc.id})));
            })
   },[Users.length]); 
  
    const make_account = async ()=>{
         const USERS = collection(db,"users"); 
        await addDoc(USERS,{Name: name.current.value})   
    }
   
  return (
    <div className = "content">
         <h2> content </h2>
<marquee style = {{width:"60%", direction:"left", height:"100px"}}>
  This is a sample scrolling text that has scrolls texts to left.
</marquee>
        <h3 > Share your words </h3>
     
 <input ref = {name} placeholder = "Name..." />      
<textarea ref = {texter} style = {textareastyles} placeholder = "comment..."/>
<button type = "submit" onClick = {make_account}> ADD </button>
 {Users.map((data)=>(<h1> {data.Name} </h1>))}
     <section>
     <div>
     mnbvmbnmbnmbnmbmfjfghjhgjhgfj
         <Ticker>
        {({ index }) => (
            <>
                <h1>This is the Headline of element #{index}!</h1>
                <img src="www.my-image-source.com/" alt=""/>
            </>
        )}
    </Ticker>
    </div>
     </section>
  </div>
  );
}
  

      export default Content;
      const textareastyles = {
          borderRadius: "10px",
          outline: "none",
          border:"node",
          width:"60%",
          marginBottom: "20px",
          width: "40%"
      };
     const btn  = {
         backgroundColor : "black",
         color : "red"
     }    