import ActionTypes from '../actions/actionTypes';

const getTag = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_TAG_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: {}
      };
    case ActionTypes.GET_TAG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tagsResult: action.result,
      };
    case ActionTypes.GET_TAG_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default getTag;
