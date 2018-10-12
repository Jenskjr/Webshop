import React from "react"
import FavItem from "./favItem"

const styles = {
    favItemList: {
        zIndex: "2",  
        position: "fixed", 
        top: "100px", 
        width: "400px",
        padding: "30px",
        maxHeight: "500px",  
        overflow: "scroll"
    }
}

class FavItemList extends React.Component {

    handleCloseFavBox = () => {
        this.props.closeFav()
    }

    render () {      
        return (
            <div className="container">
                {this.props.favItems.length > 0 && this.props.activeFavItems === true?
                
                <div style={styles.favItemList} className="border border-dark bg-white">
                    <h4 style={{float: "right", cursor: "pointer"}} 
                        className="p-1 pr-2 pl-2 ml-2 bg-white border rounded" 
                        onClick={this.handleCloseFavBox}>X</h4>
                    <h4>Your favorite Beers </h4>
                    
                    {this.props.favItems.map ((item, index) => 
                         <FavItem   key={index}
                                    listID = {index} 
                                    id = {item.id}
                                    name= {item.name} 
                                    tagline= {item.tagline} 
                                    price= {item.price}
                                    removeFavItem={this.props.removeFavItem} 
                                    addItem={this.props.addItem}/>
                    )}
                </div>
                :
                <span></span>}
            </div>
            )
        }
    }

export default FavItemList