import { createStore } from "redux";
import { Dispatch } from "redux";

//create
const store = createStore(reducer, preLoadedState, enhancer);
const currentState = store.getState(); //check

//update
store.dispatch({
    type: 'ADD',
    payload: 'thing to be added'
});

const stateAfterAction = store.getState() //check

//reducer - dispatch
const dispatch = Dispatch();

const addApple = (apple) => {
    return {
        type: 'ADD_APPLE',
        payload: apple
    }
}

const newApple = addApple('someApple');
store.dispatch(newApple);