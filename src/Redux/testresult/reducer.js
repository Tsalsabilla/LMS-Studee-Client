import * as types from "./types";

// Define the initial state
const initialState = {
    testResult: null
};

// Create the reducer function
const testResultReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.SAVE_TEST_RESULT:
            return {
                ...state,
                testResult: payload
            };
        default:
            return state;
    }
};

export default testResultReducer;
