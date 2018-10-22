import React from "react"

class BasketItem extends React.Component {

	handleRemoveItem = (event) => {
        event.preventDefault()
        this.props.removeItem(this.props.id)
    }

    render () {      

        return (
            <div className="">
                <div className="border-bottom">
                    <span className="mr-2">{this.props.quantity}</span>
                    <span>{this.props.name} </span>
                    <div>{this.props.tagline} </div>
                    <div>Price: {this.props.price} €</div>
                    <button style={{cursor: "pointer"}} className="btn-danger mr-2 mb-4 mt-2" onClick={this.handleRemoveItem}>Remove item</button>
                 </div>
            </div>
            )
        }
    }


export default BasketItem