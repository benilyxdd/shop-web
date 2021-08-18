import { FETCH_DATA } from "../Actions/initial";

const initState = {
	products: [],
};

const initialReducer = (state = initState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return { ...state, products: action.data };
		default:
			return state;
	}
};

export default initialReducer;
