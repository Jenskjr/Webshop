import React from "react"
import Nav from "./nav"

class Header extends React.Component {

	render () {
		return (
				<div>
					<header>
                    	<div className="container text-center pb-4" style={{paddingTop: "160px"}}>
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
				</div>
			)
	}
}

export default Header