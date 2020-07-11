import { ADD_CLIENT } from "../Actions/";
import { DELETE_CLIENT } from "../Actions/";
import { clients } from "../Data";

// Reducer de cadastrar os clientes
const clientReducer = (state = clients, action) => {
	switch (action.type) {
		case ADD_CLIENT:
			return [{...action.client}, ...state];
		case DELETE_CLIENT:
			return state.filter((cliente) => cliente !== action.value);
		default:
			return state;
	}
}

export default clientReducer;
