import React, { useEffect,useState } from 'react'

export default function Salad() {

        let [salad,setSalad]=useState([]);
        const getSalad=async()=>{
            let response =await fetch("https://forkify-api.herokuapp.com/api/search?q=Salad");
            let data4=await response.json();
        console.log(data4);
         setSalad(data4.recipes);
        }
         useEffect(()=>{
            getSalad();
         },[])
         
        
      return (
    <div className='row'>
       {salad.map((ele)=>{
            return <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
    <img src ={ele.image_url} className='w-100'/>
            </div>
        }
        )}
        </div>
      )
    }
