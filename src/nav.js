import React from "react"


class Nav extends React.Component {
    handleSearchSubmit = (event) => {
      	event.preventDefault()
        this.props.searchItems(event)
    }

    handleShowBasket = () => {
        this.props.showBasket()
    }

    handleShowFav = () => {
        this.props.showFav()
    }

	render () {
		return (
            <div>
                <nav className ="navbar navbar-dark bg-dark border fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <form className="form-inline" style={{display: "inline"}} role="search" onSubmit={this.handleSearchSubmit}>
                                <input  className="form-control border-light m-2 p-2" type="text" name="searchString" placeholder="Search" />
                                <input style={{cursor: "pointer"}} className="btn bg-dark btn-outline-light m-2 text-light rounded" type="submit" value="Submit"/>
                             </form>
                            <button style={{cursor: "pointer"}} className="btn bg-dark btn-outline-light m-2 text-light rounded" onClick={this.props.clearSearchItems}>
                                Clear search
                            </button>
                            {this.props.basketItems.length>0?
                                <span style={{cursor: "pointer"}} role="button" className="p-2 m-2 text-white font-weight-bold" onClick={this.handleShowBasket}>Cart
                                    <span className="p-1 pr-2 pl-2 ml-2 bg-danger text-white rounded">{this.props.basketItems.length}</span>
                                </span>:
                                <span></span>}
                            {this.props.favItems.length>0?
                                <span style={{cursor: "pointer"}} role="button" className="p-2 m-2 text-white font-weight-bold" onClick={this.handleShowFav}>Favorites
                                    <span className="p-1 pr-2 pl-2 ml-2 bg-danger text-white rounded">{this.props.favItems.length}</span>
                                </span>:
                                <span></span>}

                            <div className="ml-2 mt-2 font-weight-bold">
                                 <label className="label text-white">{this.props.dataStart === true? "Loading ...": ""}</label>
                            </div>
                        </div>
                    </div>
                </nav>     
            </div>       
		)
	}
}

export default Nav