import React from 'react'
import Item from "./item"

class SearchResult extends React.Component {
	
	render () {
		return (
			this.props.searchResultList.map((item, index) => 
				<Item   key={index} 
                        id = {item.id}
                        photo = {item.image_url}
                        name={item.name} 
                        tagline={item.tagline} 
                        price={item.price} 
                        addItem={this.props.addItem} 
                        addFavItem={this.props.addFavItem} />)
			)
		}
}

export default SearchResult