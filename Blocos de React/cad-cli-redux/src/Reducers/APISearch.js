import { REQUEST_API, PROCESS_API_DATA, PROCESS_ERROR } from "../Actions/";

const init_state = {
  loading: false,
  results: [],
  resultCount: 0,
  error: null
};

// Reducer de cadastrar os clientes
const APISearchReducer = (state = init_state, action) => {
	switch (action.type) {
		case REQUEST_API:
			return {
        ...state,
        loading: true,
        error: null
      }
		case PROCESS_API_DATA:
			return  {
        ...state,
        loading: false,
        results: action.results,
        resultCount: action.resultCount
      }
		case PROCESS_ERROR:
			return  {
        loading: false,
        error: action.error,
        items: []
      };
		default:
			return state;
	}
}

export default APISearchReducer;
