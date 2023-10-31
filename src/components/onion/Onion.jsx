import React, { useEffect,useState } from 'react'

export default function Onion() {

        let [onion,setOnion]=useState([]);
        const getOnion=async()=>{
            let response =await fetch("https://forkify-api.herokuapp.com/api/search?q=Onion");
            let data3=await response.json();
        console.log(data3);
         setOnion(data3.recipes);
        }
         useEffect(()=>{
            getOnion();
         },[])
         
        
      return (
    <div className='row'>
       {onion.map((ele)=>{
            return <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
    <img src ={ele.image_url} className='w-100'/>
            </div>
        }
        )}
        </div>
      )
    }

