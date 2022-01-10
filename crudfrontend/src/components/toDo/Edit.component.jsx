import React,{useEffect,useState} from 'react';
import { Button } from 'antd';
import {get,add,Edit} from '../../Service/api';

import {
    useHistory,useParams
   } from "react-router-dom";
const Form = () =>{
    const [name,setname] = useState("");
    const [age,setage] = useState(0);
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
    
    const Add =(e) =>{
        e.preventDefault();
        let values= {
           
            Name:name,
           
            Age:age,

        }
    add(values).then(response =>{
        console.log(response);
        if(response.data === 'successfully registered'){
          history.push("/")
        }
      });
    }

    const edit = (e) =>{
        e.preventDefault();
        let values= {
            id:_id,
           
            Name:name,
          
            Age:age,
          

        }
        Edit(values).then(response =>{
            console.log(response);
            // setdata(response.data);
            history.push("/")
            
          })
    }

    return(
        <div style={{display:'flex',border:'1px solid black',height:'100%',justifyContent:'center',alignItems:'center'}}>
           
        <form style={{border:'1px solid black',height:'85%',width:'50%',flexDirection:'column'}}  >
        {
              id ?  <h1>Edit Details</h1>:
              <h1> Add Details </h1>
            }
            <div style={{marginTop:'2.5em',marginBottom:'1em',display:'flex',justifyContent:'space-around'}}> 
            <label>Student Name :</label>
            <input value={name} type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="Enter the task name"   style={{width:'80%'}} required/>
            </div>
            <div style={{marginTop:'2.5em',marginBottom:'1em',display:'flex',justifyContent:'space-evenly',width:'100%'}}> 
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}> 
            <label>Age:</label>
            <input value={age}  onChange={(e)=>{setage(e.target.value)}} style={{width:'60%'}} />
            </div>
            </div>
            {
                id? (
            
             <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'20%'}}>
                 <Button type="primary" block  value="small" style={{width:'15%',fontSize:'medium',fontWeight:'bold'}}   onClick={(e)=>{edit(e)}}  >Edit</Button>
             </div> ) 
             :(<div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'20%'}}>
             <Button type="primary" block  value="small" style={{width:'15%',fontSize:'medium',fontWeight:'bold'}} onClick={(e)=>{Add(e)}}  >Add</Button>
         </div>)
             }
            
        </form>
        </div>
    )

}

export default Form;