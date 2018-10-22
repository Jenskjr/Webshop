import React from 'react'
import Footer from './footer'
import Header from './header'
import ItemList from './itemlist'
import BasketItemList from './basketItemList'
import FavItemList from './favItemList'
import {    addItem, 
            addFavItem, 
            removeItem, 
            removeFavItem, 
            requestData, 
            searchItems, 
            clearSearchItems,
            showBasket,
            closeBasket,
            showFav,
            closeFav} from './actions/action_creators'
import { connect } from "react-redux"


class App extends React.Component {

    componentDidMount = () => {
        this.props.updateShopItemList()
    } 

    

    render() {
        return (
            <div>
                <Header     searchItems={this.props.searchItems}  
                            clearSearchItems={this.props.clearSearchItems}
                            updateShopItemList={this.props.updateShopItemList}
                            dataStart={this.props.dataStart}
                            basketItems={this.props.basketItems}
                            favItems={this.props.favItems}
                            showBasket={this.props.showBasket}
                            showFav={this.props.showFav}   />
                <FavItemList    favItems={this.props.favItems} 
                                activeFavItems={this.props.activeFavItems}
                                removeFavItem={this.props.removeFavItem} 
                                addItem={this.props.addItem}
                                closeFav={this.props.closeFav}/>
                <BasketItemList basketItems={this.props.basketItems}
                                activeBasketItems={this.props.activeBasketItems} 
                                removeItem={this.props.removeItem}
                                closeBasket={this.props.closeBasket}/>
                <ItemList activeItems={this.props.activeItems}
                          punkAPIBeers={this.props.punkAPIBeers}
                          basketItems={this.props.basketItems}
                          showBasket={this.props.showBasket}
                          favItems={this.props.favItems} 
                          showFav={this.props.showFav}
                          searchResultList={this.props.searchResultList}
                          clearSearchItems={this.props.clearSearchItems}
                          activeSearch={this.props.activeSearch}
                          dataStart={this.props.dataStart} 
                          updateShopItemList={this.props.updateShopItemList} 
                          searchItems={this.props.searchItems}  
                          addItem={this.props.addItem} 
                          addFavItem={this.props.addFavItem}/>   
                <Footer />    
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return {
        punkAPIBeers: state.punkAPIBeers,
        basketItems: state.basketItems,
        favItems: state.favItems,
        dataStart: state.dataStart,
        searchResultList: state.searchResults,
        activeSearch: state.activeSearch, 
        activeFavItems: state.activeFavItems,
        activeBasketItems: state.activeBasketItems,
        activeItems: state.activeItems
    }
}

const mapDispatchToProps = dispatch => {  
    return {
      addItem: itemID => dispatch(addItem(itemID)),
      addFavItem: itemID => dispatch(addFavItem(itemID)),
      removeItem: itemID => dispatch(removeItem(itemID)), 
      removeFavItem: itemID => dispatch(removeFavItem(itemID)),
      searchItems: event => dispatch(searchItems(event)),
      clearSearchItems: () => dispatch(clearSearchItems()),
      showBasket: () => dispatch(showBasket()),
      closeBasket: () => dispatch(closeBasket()),
      showFav: () => dispatch(showFav()),
      closeFav: () => dispatch(closeFav()),
      updateShopItemList: () => {dispatch(requestData())}   
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);