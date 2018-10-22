import React from "react"

class Item extends React.Component {

     handleAddItem = (event) => {
        event.preventDefault()
        this.props.addItem(this.props.id)
    }

     handleAddFavItem = (event) => {
        event.preventDefault()
        this.props.addFavItem(this.props.id)
    }

    render () { 
        return (
            <div className="col-lg-4 col-md-6">
                <div className="card border border-dark bg-light p-3 mb-4 text-center">
                    <div    style={{height: "230px"}} 
                            className="border bg-white p-3">
                            <img style={{ width: "17%", verticalAlign: "baseline"}}  src={this.props.photo} alt=""/>
                    </div>
                    <div className="card-body flex-column mt-2">
                        <div style={{height: "140px"}}>
                            <h5 className="card-title">{this.props.name} </h5>
                            <h6 className="card-subtitle mt-2">{this.props.tagline}</h6>
                            <a href="#" className="p-4">Read more ...</a>
                            <h4 className="mt-2">{this.props.price} €</h4>
                        </div>
                        <div className="card-text mt-2 mb-2">
                            <button className="btn btn-outline-success w-100 mb-2" style={{cursor: "pointer"}} onClick={this.handleAddItem}>Add to cart</button>   
                            <button className="btn btn-outline-primary w-100 mt-2" style={{cursor: "pointer"}} onClick={this.handleAddFavItem}>Add to favorites</button>   
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }

export default Item