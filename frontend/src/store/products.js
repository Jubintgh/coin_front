export const LOAD_PRODUCT = "products/LOAD_PRODUCTS"
export const REMOVE_PRODUCT = "products/REMOVE_PRODUCT"
export const UPDATE_PRODUCT = "products/UPDATE_PRODUCT"
export const ADD_PRODUCT = "products/ADD_PRODUCT"

const load = (products) => ({
    type: LOAD_PRODUCT,
    products
})

const remove = (productId) => ({
    type: REMOVE_PRODUCT,
    productId
})

const update = (productId) => ({
    type: UPDATE_PRODUCT,
    productId
})
//uses object
const addOneProduct = (product) => ({
    type: ADD_PRODUCT,
    product
})

/* Thunk Actions:

fetch all products in products list*/
export const getProducts = () => async (dispatch) => {
    const response = await fetch(`/api/product`)

    if (response.ok){
        const products = await response.json();
        dispatch(load(products))
    }
}