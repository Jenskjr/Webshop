import * as type from "../constants/action_types";
import API_URL from "../data/api";

//--------EVENT ACTION CREATORS -------------

export const searchItems = (event) => {
    return { type: type.ITEM_SEARCH, event }
}

export const clearSearchItems = () => {
  return {type: type.ITEM_CLEAR_SEARCH}
}

export const addItem = itemID => {
  	return { type: type.BASKET_ITEM_ADD, itemID }
}

export const addFavItem = itemID => {
  	return { type: type.FAVITEM_ADD, itemID }
}

export const removeItem = itemID => {
  return { type: type.BASKET_ITEM_REMOVE, itemID }
}

export const removeFavItem = itemID => {
  return { type: type.FAVITEM_REMOVE, itemID }
}

export const showBasket = event => {
  return { type: type.BASKET_SHOW }
}

export const closeBasket = event => {
  return { type: type.BASKET_CLOSE }
}

export const showFav = event => {
  return { type: type.FAV_SHOW }
}

export const closeFav = event => {
  return { type: type.FAV_CLOSE }
}

//-----------SYNKRONE ACTION CREATORS-----------

export const fetchDataStart = () => {
    return {
        type: type.FETCH_DATA_START
    };
};

export const fetchDataReceive = data => {
    return {
        type: type.FETCH_DATA_RECEIVE,
        data
    };
};

export const fetchDataFail = msg => {
    return {
        type: type.FETCH_DATA_FAIL,
        error: msg
    };
};

// ---------- ASYNKRON ACTION CREATOR ------------

export const requestData = () => {
  
	return function (dispatch, getState) {

    dispatch(fetchDataStart())

		return fetch (API_URL)
			.then (
				res => {
          		    if (res.status >= 400) {
            			throw new Error("Bad response from server");
          		    }
          			return res.json()
                }
            )
            .then (  
                json => dispatch(fetchDataReceive(json)),
                fejlstatus => console.log("Fejl ved henting af data. Kode:", fejlstatus)	     
            )
	}
}

