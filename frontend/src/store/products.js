import { csrfFetch } from './csrf';

export const LOAD_PRODUCT = "products/LOAD_PRODUCTS"
export const REMOVE_PRODUCT = "products/REMOVE_PRODUCT"
export const UPDATE_PRODUCT = "products/UPDATE_PRODUCT"
export const ADD_PRODUCT = "products/ADD_PRODUCT"

const load = (products) => {
    return {
        type: LOAD_PRODUCT,
        payload: products
    }
}

const removeProduct = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        payload: productId
    }
}

const updateProduct = (productId) => {
    return {
        type: UPDATE_PRODUCT,
        payload: productId
    }
}
//uses object
const addOneProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

//Thunk Actions:
export const getSingleProduct = (id) => async(dispatch) => {
    const response = await csrfFetch(`api/products/${id}`)

    if(response.ok){
        const product = await response.json();
        dispatch(load(product))
    }
    return response;
}


//fetch all products in products list
export const getProducts = () => async (dispatch) => {
    const response = await csrfFetch(`/api/products`)

    if (response.ok){
        const products = await response.json();
        dispatch(load(products))
    }
    return response;
}

export const deleteProduct = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${id}`, {
        method: 'DELETE',
    });
    dispatch(removeProduct(id));
    return response;
}

export const createProduct = (product) => async (dispatch) => {
    const response = await csrfFetch(`/api/products`, {
        method: "POST",
        body: JSON.stringify({
            product
        })
    });
    const data = await response.json();
    dispatch(addOneProduct(data.product))
    return response;
};

export const updateOneProduct = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/:id`, {
        method: "PUT"
    });
    const data = await response.json();
    dispatch(updateProduct(data.product));
    return response;
}

const initialState = {};

const productReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case LOAD_PRODUCT:
            newState = action.payload.reduce((obj, el) => {
                obj[el.id] = el;
                return obj;
            }, {})
            return newState;

        case REMOVE_PRODUCT:
            newState = Object.assign({}, state);
            newState.products = action.payload;
            return newState;
        case UPDATE_PRODUCT:
            newState = Object.assign({}, state);
            newState.products = null;
            return newState;
        case ADD_PRODUCT:
            newState = Object.assign({}, state);
            newState.products = null;
            return newState;
        default:
            return state;
    }
}

export default productReducer;