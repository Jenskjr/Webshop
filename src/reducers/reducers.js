import {BASKET_ITEM_ADD, 
		FAVITEM_ADD,
		BASKET_ITEM_REMOVE, 
		FAVITEM_REMOVE, 
		FETCH_DATA_RECEIVE, 
		FETCH_DATA_START, 
		FETCH_DATA_FAIL, 
		ITEM_SEARCH, 
		ITEM_CLEAR_SEARCH, 
    BASKET_SHOW,
    BASKET_CLOSE,
    FAV_SHOW, 
    FAV_CLOSE
		} from '../constants/action_types'


const initialState = {
    punkAPIBeers: [
		{id: 1001, name: "Buzz", tagline: "A Real Bitter Experience", price: 10, image_url: "https://images.punkapi.com/v2/keg.png"}, 
		{id: 1002, name: "Trashy Blond", tagline: "You Know You Shouldn't", price: 10, image_url: "https://images.punkapi.com/v2/2.png"},
        {id: 1003, name: "Avery Brown Dredge", tagline: "Bloggers' Imperial Pilsner", price: 10, image_url: "https://images.punkapi.com/v2/keg.png"}
	],
	basketItems: [],
	favItems: [],
	dataStart: false,
	searchResults: [],
    activeItems: true,
	activeSearch: false, 
    activeFavItems: false,
    activeBasketItems: false
}


const rootReducer = (state = initialState, action) => {
    
    
    if (action.type === BASKET_SHOW){
        return Object.assign ({}, state, { 
            activeBasketItems: true,
            activeFavItems: false
        })
    }

    if (action.type === BASKET_CLOSE){
        return Object.assign ({}, state, { 
            activeBasketItems: false,
            activeFavItems: false
        })
    }

    if (action.type === FAV_SHOW){
        return Object.assign ({}, state, { 
            activeFavItems: true,
            activeBasketItems: false
        })    
    }

    if (action.type === FAV_CLOSE){
        return Object.assign ({}, state, { 
            activeFavItems: false,
            activeBasketItems: false
        })   
    }

	if (action.type === ITEM_SEARCH){

      	const data = new FormData(action.event.target);
      	const searchString = data.get("searchString")
        const searchResult = state.punkAPIBeers.filter(function(item) {
            return item.name.includes(searchString)||item.tagline.includes(searchString)
        });

      	if (searchString !== "") {
      		return Object.assign ({}, state, {
      			activeItems: false,
                activeSearch: true,
      			searchResults: [...searchResult]
      		})	
      	}
    }

    if (action.type === ITEM_CLEAR_SEARCH) {
    	return Object.assign ({}, state, {
    		activeItems: true,
            searchResults: [], 
    		activeSearch: false
    	})
    }

	if (action.type === BASKET_ITEM_ADD && action.itemID != null) {
		
		const basketItems = Object.assign({}, state, {
            basketItems: [
                ...state.basketItems,
                ...state.punkAPIBeers.filter(item => item.id === action.itemID)
            ]
         })

        return basketItems    
       
	}

	if (action.type === FAVITEM_ADD && action.itemID != null) {
		const i = state.favItems.findIndex(item => item.id === action.itemID);
		
		if (i === -1) {			
			return Object.assign({}, state, {
                favItems: [
                    ...state.favItems,
                    ...state.punkAPIBeers.filter(item => item.id === action.itemID)
            	]
			})	
		}
	}

	if (action.type === BASKET_ITEM_REMOVE && action.itemID != null) {
	   	
	   	const i = state.basketItems.findIndex(item => item.id === action.itemID);
        const updatedBasketItems = [...state.basketItems];
        updatedBasketItems.splice(i, 1);


        if (updatedBasketItems.length === 0 ) {
            return Object.assign({}, state, {
                basketItems: updatedBasketItems, 
                activebasketItems: false
            })
        }
        else {
            return Object.assign({}, state, {
                basketItems: updatedBasketItems
            });
        } 
     } 

     if (action.type === FAVITEM_REMOVE) {
	   	
	   	const i = state.favItems.findIndex(item => item.id === action.id);
     	const updatedFavItems = [...state.favItems];
     	updatedFavItems.splice(i, 1)

        if (updatedFavItems.length === 0 ) {
            return Object.assign({}, state, {
                favItems: updatedFavItems, 
                activeFavItems: false
            })
        }
        else {
            return Object.assign({}, state, {
                favItems: updatedFavItems
            })
        }
	}

	if (action.type === FETCH_DATA_RECEIVE){

    	action.data.map(item => { item.price = 10})

		return Object.assign({}, state, {
        	 punkAPIBeers : action.data, 
        	 dataStart: false
    	}) 	
	} 

	if (action.type === FETCH_DATA_START){

		return Object.assign({}, state, {
            dataStart: true
        });    	
	}

	if (action.type === FETCH_DATA_FAIL){
        console.log ("Reducer: FETCH_DATA_FAIL")
	}
    

  	return state;
}

export default rootReducer