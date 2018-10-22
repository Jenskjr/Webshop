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
                        <h3 className="text-center mb-4">Search Results</h3>  
                        <div className="text-primary mb-4" style={{cursor: "pointer"}} onClick={this.props.clearSearchItems}>
                            X Clear search
                        </div>
                        <div className="d-flex flex-wrap border">  
                                    
                        <SearchResult   addItem={this.props.addItem} 
                                        addFavItem={this.props.addFavItem} 
                                        activeSearch={this.props.activeSearch} 
                                        searchResultList = {this.props.searchResultList}/> 
                        </div>
                        
                    </div>
                    :
                    <span></span>
                }

                {this.props.searchResultList.length === 0 && this.props.activeSearch === true? 
                    <div className="container">
                        <div className="text-primary mb-4" style={{cursor: "pointer"}} onClick={this.props.clearSearchItems}>
                            X Clear search
                        </div>
                        <p>No search items found</p>
                    </div>:
                    <span></span>
                    
                }  
           
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