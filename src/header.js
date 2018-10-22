import React from "react"
import Nav from "./nav"

class Header extends React.Component {

	render () {
		return (
				<div>
					<header className="bg-warning">
                    	<div className="container text-center pb-4 pt-4">
                    		<h1>PunkAPI Beer Shop</h1>
                            <a href="https://punkapi.com/">https://punkapi.com</a>
                    	</div>  
                		 <Nav   searchItems={this.props.searchItems}  
                                		clearSearchItems={this.props.clearSearchItems}
                                		updateShopItemList={this.props.updateShopItemList}
                               	 		dataStart={this.props.dataStart}
                                		basketItems={this.props.basketItems}
                                		favItems={this.props.favItems}
                                		showBasket={this.props.showBasket}
                                		showFav={this.props.showFav}   />
                	</header> 
                     <div className="container text-center mt-4 mb-4 font-weight-bold">
                                 <label className="label">{this.props.dataStart === true? "Loading ...": ""}</label>
                    </div>
				</div>
			)
	}
}

export default Header