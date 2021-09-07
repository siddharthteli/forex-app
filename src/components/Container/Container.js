import Cards from  '../Cards/Cards.js'
import './Container.css'
const Container =() => {
    return(
        <div className="grid-wrapper">
           <Cards/>
           <Cards/>
           <Cards/>
          
        </div>
    )
}


export default Container;