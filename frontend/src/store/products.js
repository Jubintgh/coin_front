export const LOAD_PRODUCT = "products/LOAD_PRODUCTS"
export const REMOVE_PRODUCT = "products/REMOVE_PRODUCT"
export const UPDATE_PRODUCT = "products/UPDATE_PRODUCT"
export const ADD_PRODUCT = "products/ADD_PRODUCT"

const load = (products) => {
    return {
        type: LOAD_PRODUCT,
        products
    }
}

const removeProduct = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        productId
    }
}

const updateProduct = (productId) => {
    return {
        type: UPDATE_PRODUCT,
        productId
    }
}
//uses object
const addOneProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        product
    }
}

/* Thunk Actions:

fetch all products in products list*/
export const getProducts = () => async (dispatch) => {
    const response = await fetch(`/api/products`)

    if (response.ok){
        const products = await response.json();
        dispatch(load(products))
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
    });
    dispatch(removeProduct(id));
    return response;
}

export const createProduct = (product) => async (dispatch) => {
    const response = await fetch(`/api/products`, {
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
    const response = await fetch(`/api/products/:id`, {
        method: "PUT"
    });
    const data = await response.json();
    dispatch(updateProduct(data.product));
    return response;
}

const initialState = { user: null };

const productReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case REMOVE_PRODUCT:
            newState = Object.assign({}, state);
            newState.product = action.payload;
            return newState;
        case UPDATE_PRODUCT:
            newState = Object.assign({}, state);
            newState.product = null;
            return newState;
        case ADD_PRODUCT:
            newState = Object.assign({}, state);
            newState.product = null;
            return newState;
        default:
            return state;
    }
}

export default productReducer;