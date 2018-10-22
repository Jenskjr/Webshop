import React from "react"
import BasketItem from "./basketItem"
import {BrowserRouter, Route, Link} from "react-router-dom"
import checkOutInfo from "./checkOut"


const styles = {
    basketItemList: {
        zIndex: "2",  
        position: "fixed", 
        top: "0px", 
        width: "400px",
        padding: "30px",
        maxHeight: "500px",  
        overflow: "scroll"
    }
}

class BasketItemList extends React.Component {

    handleCloseBasketBox = () => {
        this.props.closeBasket()
    }

    handleCheckout = () => {
        
        return (
            <BrowserRouter>
                <div> 
                    <Link to="/checkOut">
                        <button className="btn-primary">Check Out</button>
                    </Link>
                   
                    <Route exact path="/checkOut" component={checkOutInfo} />
                </div>
            </BrowserRouter>    
            )
    }

    handleTotal = () => {
        
        const numberOfItems = this.props.basketItems.length
        const basketItems = this.props.basketItems
        const totalPrice = basketItems.reduce(function(prev, cur) {
                return prev + cur.price;
            }, 0);

        return (
            <div> 
                <div className="mt-2 mb-2">
                    <span className="mr-2">Total number of bottles: </span>
                    <span className="mr-2">{numberOfItems}</span>
                </div>
                <div className="mt-2 mb-2">
                    <span className="mr-2">Total price:</span> 
                    <span>{totalPrice}</span>
                    <span className="ml-2">€</span>
                </div>   
            </div>
        )                
    }

    consolidateList = items => {

        const list = {}

        items.map (item => {
            if (list[item.id]) {
                list[item.id].quantity++
            }
            else {
                list[item.id] = item 
                list[item.id].quantity = 1
            }
        })
             
        return Object.values(list);        
    }

    render () {
        const consolidatedList = this.consolidateList([...this.props.basketItems])
        return (
            <div className="container">
                {this.props.basketItems.length > 0 && this.props.activeBasketItems === true? 
                <div style={styles.basketItemList} className="container border border-dark bg-white p-10">
                    
                    <h4 style={{float: "right", cursor: "pointer"}} 
                        className="p-1 pr-2 pl-2 ml-2 bg-white border rounded" 
                        onClick={this.handleCloseBasketBox}>X
                    </h4>
                    <h4> Shopping Cart items </h4>
                    
                    {consolidatedList.map ((item, index) => 
                         <BasketItem   
                                key={index} 
                                listID={index} 
                                id = {item.id}
                                quantity = {item.quantity}
                                name={item.name} 
                                tagline={item.tagline} 
                                price={item.price} 
                                removeItem={this.props.removeItem}
                        />
                    )}

                    <div>
                        {this.handleTotal()}
                        {/*this.handleCheckout()*/}
                    </div>
                </div>
                :
                <span></span>}
            </div>
            )
        }
    }

export default BasketItemList