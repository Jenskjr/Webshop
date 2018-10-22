import React from "react"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons'



library.add(faSearch, faHeart, faShoppingCart)

class Nav extends React.Component {
    
    state = {
      value: ''
    }
    
    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.searchItems(event)
        this.setState({value: ''})   
    }

	render () {
		return (
            <div>
                <nav className ="navbar navbar-dark bg-dark">
                    <div className="container">
                        <div className="navbar-header">
                            <form className="form-inline" style={{display: "inline"}} role="search" onSubmit={this.handleSubmit}>
                                <input  className="form-control border-light m-2  p-2" 
                                        type="text" 
                                        name="searchString" 
                                        placeholder="Search"
                                        value={this.state.value}
                                        onChange={this.handleChange} />
                                <button style={{cursor: "pointer"}} className="btn bg-dark btn-outline-light m-2 text-light rounded"><FontAwesomeIcon icon="search" /></button>
                             </form>
                            {this.props.basketItems.length>0?
                                <button style={{cursor: "pointer"}} 
                                        className="btn btn-outline-light m-2 bg-dark text-white font-weight-bold border rounded" 
                                        onClick={this.props.showBasket}><FontAwesomeIcon icon="shopping-cart" />
                                    <span className="p-1 pr-2 pl-2 ml-2 bg-danger text-white rounded">{this.props.basketItems.length}</span>
                                </button>:
                                <span></span>}
                            {this.props.favItems.length>0?
                                <button style={{cursor: "pointer"}} 
                                        className="btn btn-outline-light m-2 bg-dark text-white font-weight-bold border rounded" 
                                        onClick={this.props.showFav}><FontAwesomeIcon icon="heart" />
                                    <span className="p-1 pr-2 pl-2 ml-2 bg-danger text-white rounded">{this.props.favItems.length}</span>
                                </button>:
                                <span></span>}
                        </div>
                    </div>
                </nav>     
            </div>       
		)
	}
}

export default Nav