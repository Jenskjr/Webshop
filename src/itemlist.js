import React from "react"
import Item from "./item"
import SearchResult from "./searchResult"

class ItemList extends React.Component {

    render () {      
        return (
            <div>    
                {/* Search Results*/}
                {this.props.searchResultList.length > 0?                 
                    <div className="container">
                        <h3 className="mt-4 mb-2">Search Results</h3>  
                        <div className="d-flex flex-wrap border">  
                                    
                        <SearchResult   addItem={this.props.addItem} 
                                        addFavItem={this.props.addFavItem} 
                                        activeSearch={this.props.activeSearch} 
                                        searchResultList = {this.props.searchResultList}/> 
                        </div>
                    </div>:
                    <span></span>
                }

                {this.props.searchResultList.length === 0 && this.props.activeSearch === true? 
                    <p className="container padding">No search items found</p>:
                    <span></span>}  
           
                {/*Item list*/}
                {this.props.activeItems === true?
                    <div className="container mt-4 mb-2">
                       <div className="row">
            
                                {this.props.punkAPIBeers.map ((item, index) => (
                                    <Item   key={index} 
                                            id = {item.id}
                                            photo = {item.image_url}
                                            name={item.name} 
                                            tagline={item.tagline} 
                                            description={item.description}
                                            price={item.price} 
                                            addItem={this.props.addItem} 
                                            addFavItem={this.props.addFavItem} />)
                                )}
                            {/*</div>*/}
                        </div>
                    </div>:
                    <span></span>
                }
            </div>
            )
        }
    }

export default ItemList