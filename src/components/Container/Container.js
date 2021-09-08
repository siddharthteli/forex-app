import axios from "axios";
import React from "react";


class Container extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            cards_list:{}
        };
    }
    componentDidMount() {
        axios.get("http://api.exchangeratesapi.io/v1/latest?access_key=ea27f11e67cc1a6cb6d066300def6963&format=1")
        .then(response => {
                let rates=response.data.rates;
                  this.setState({ cards_list:rates },()=>{
                      console.log(this.state.cards_list)
                  });
                  console.log(this.state.cards_list);

                }
        ); 
       
      }
    render() {
       let listOf= Object.keys(this.state.cards_list);
      return <div>
          <ul>
          {listOf.map((card,idx) =>
         <li key={idx}>{card}</li>
     )}     
          </ul>
              
      </div>;
    }
    // {this.state.cards_list.map((card,idx) =>
    //     <li key={idx}>{Object.keys(card)}</li>
    // )}
    
  }

  export default Container;


// import React from 'react';

// import axios from 'axios';

// export default class Container extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=ea27f11e67cc1a6cb6d066300def6963&format=1`)
//       .then(res => {
//         const persons = res.data.rates;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person["AED"]}</li>)}
//       </ul>
//     )
//   }
// }

 