import './Cards.css'

const Cards = ({id_card,name,price}) => {
    return(
    <div className="card-container">
        <div className="header-card">
           <h3 class="identifier">{id_card}</h3>
           <h3>{name}</h3>
        </div>
        <div className="section-card">
        <h3>Current rate:</h3>
        <h3>{price}</h3>
        </div>
         
         
    </div>)

}

Cards.defaultProps = {
    id_card:1,
    name:"BTC",
    price:"12.30 Euro",
}


export default Cards;