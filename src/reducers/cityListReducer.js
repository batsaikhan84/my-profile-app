const cityListReducer = (state = {cities: []}, action) => {
    switch(action.type) {
        case 'GET_CITY':
            return {
                ...state,
                cities: [ ...state.cities]
            }
        default:
            return state;
    }
}