import Cards from  '../Cards/Cards.js'
import axios from 'axios';
import './Container.css'
import React, { useState } from 'react';
import { Component } from 'react';

// const Container = () => {
//     const cartlist=[1,2,3,4,5];
//     return(
        
//        cartlist.map((card) => 
//            <h1>HEllo no is {card}</h1>
//        )
       
       
       
//     )
// }



let cards_list=[];
    let card;
const Container =() =>
        axios.get("http://api.exchangeratesapi.io/v1/latest?access_key=ea27f11e67cc1a6cb6d066300def6963&format=1").then(
            (response) => {
                let rates=response.data.rates;
                for (var key in rates) {
                    card= {
                        "name":key,
                        "rate":rates[key],
                    }
                    cards_list.push(card);
                    
                }
                
                
                
                }
        );  
        return (
            cards_list.map((card) => 
                       <h6>HEllo no is {card.name}</h6>
                    )
        ) 





// const Container =() => {
//     const [count,setcount]=useState(1);
//     React.useEffect(() => {
//         axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=ea27f11e67cc1a6cb6d066300def6963&format=1`).then((response) => {
//           console.log("Get getting called")
//           setcount(response);
//         });
//       }, []);
//       if (!count) return null;
//     return(
        
//         <div className="grid-wrapper">
//             <h1>{count.rates} </h1>
//            <Cards/>
//            <Cards/>
//            <Cards/>
          
//         </div>
//     )
// }


 

export default Container;