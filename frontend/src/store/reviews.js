import { csrfFetch } from "./csrf";

export const LOAD_REVIEW = "reviews/LOAD_REVIEW"
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW"
export const UPDATE_REVIEW = "reviews/UPDATE_REVIEW"
export const ADD_REVIEW = "reviews/ADD_REVIEW"

//Review actions
const loadReview = (reviews) => {
    return {
        type: LOAD_REVIEW,
        payload: reviews
    }
}

const removeReview = (review) => {
    return {
        type: REMOVE_REVIEW,
        payload: review
    }
}

const addOneReview = (review) => {
    return {
        type: ADD_REVIEW,
        payload: review
    }
}

//review thunks
export const getReviews = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`)
    if(response.ok){
        const reviews = await response.json();
        dispatch(loadReview(reviews));
        return reviews;
    }
}

export const createReview = (userId, productId, review) => async(dispatch) => {
    
    const response = await csrfFetch(`/api/reviews`, {
        method: "POST",
        body: JSON.stringify({ 
                userId,
                productId,
                review
            })
        });

    if(response){
        const newReview = await response.json();
        dispatch(addOneReview(newReview))
        return newReview;
    }
}

export const deleteReview = (id) => async(dispatch) => {

    const response = await csrfFetch(`/api/reviews`, {
        method: "DELETE",
        body: JSON.stringify({
            id
        })
    });
    dispatch(removeReview(id));
    return response;
}

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case LOAD_REVIEW:
            newState = action.payload.reduce((obj, el) => {
                obj[el.id] = el;
                return obj;
            }, {})
            return newState;
        case ADD_REVIEW:
            newState = Object.assign({}, state);
            newState.reviews = action.payload;
            return newState;
        case REMOVE_REVIEW:
            newState = Object.assign({}, state);
            delete newState.reviews[action.payload.id];
            return newState
        default:
            return state;
    }
}

export default reviewReducer;