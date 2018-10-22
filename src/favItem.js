import React from "react"

class FavItem extends React.Component {

    handleRemoveFavItem = (event) => {
        event.preventDefault()
        this.props.removeFavItem(this.props.id)
    }

    handleAddItem = (event) => {
        event.preventDefault()
        this.props.addItem(this.props.id)
    }

    render () { 
        return (
            <div className="row">
                <div className="col-sm-6 border-bottom">
                    <div className="">{this.props.name} </div>
                    <div className="">{this.props.tagline} </div>
                    <div className="">Price: {this.props.price} €</div>
                    <button style={{cursor: "pointer"}} className="btn-success mt-2" onClick={this.handleAddItem}>Add to card</button>
                    <button style={{cursor: "pointer"}} className="btn-danger mt-2 mb-4" onClick={this.handleRemoveFavItem}>Remove item</button>
                 </div>
             </div>
            )
        }
    }

export default FavItem