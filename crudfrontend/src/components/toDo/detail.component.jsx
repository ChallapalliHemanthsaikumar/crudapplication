import {
    useHistory,useParams
   } from "react-router-dom";

   import React,{useEffect,useState} from 'react';
import { Button } from 'antd';
import {get,add,Edit} from '../../Service/api';
import './detail.css';


const Detail = () =>{

    const [name,setname] = useState("");
    const [age,setage] = useState('Hemanth');
    const [_id,setid] = useState(null);
    
    let history =useHistory();
    let {id} = useParams();



    useEffect(()=>{
        if(id){
            let value = {
                id:id
            }
console.log(id)
            get(value).then((response) =>{
            console.log(response)
            setid(response.data[0]._id)
            setname(response.data[0].Name);
            setage(response.data[0].Age);
          


        }); 
    }
       
        
           
        
},[]);
    
    
       

    return(
        <div  style={{display:'flex',height:'100%',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      
             
           
           <div style={{border:'1px solid black',height:'85%',width:'50%',flexDirection:'column',justifyContent:'flex-start'}}  >
           
               <div style={{marginTop:'2.5em',marginBottom:'1em',display:'flex',justifyContent:'space-around'}}> 
               <label>Student Name :</label>
               <p style={{width:'80%',display:'flex',justifyContent:'flex-start'}}> {name} </p>
               </div>
               <div style={{marginTop:'2.5em',marginBottom:'1em',display:'flex',justifyContent:'space-evenly',width:'100%'}}> 
               <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}> 
               <label>Age:</label>
               <p style={{width:'60%',display:'flex',justifyContent:'flex-start'}}>{age}  </p >
    
   
            </div>

               
               
           </div>
        
                 <div style={{display:'flex',justifyContent:'flex-end',alignSelf:'flex-end',margin:'1em',marginRight:'30em'}}>
             <Button type="primary" block  value="small" style={{fontSize:'medium'}}  onClick={()=> { history.push('/');}}
               >
              
              Back
             </Button>
             
           </div>

          
        </div>
        </div>
    )

}

export default Detail;
