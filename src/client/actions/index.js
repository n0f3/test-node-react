import axios from 'axios';
import ActionTypes from './actionTypes';

const getTagRequest = () => ({
  type: ActionTypes.GET_TAG_REQUEST,
});

const getTagInfoSuccess = result => ({
  type: ActionTypes.GET_TAG_SUCCESS,
  result,
});

const getTagInfoError = error => ({
  type: ActionTypes.GET_TAG_ERROR,
  error,
});

export const getTagInfo =
  (endpoint, tag) => (dispatch) => {
    dispatch(getTagRequest());
    axios.request({
      url: '/api/parse',
      method: 'get',
      params: {
        endpoint,
        tag,
      },
    })
      .then(
        (result) => {
          console.log(result);
          dispatch(getTagInfoSuccess(result));
        }
      )
      .catch(
        error =>
          dispatch(getTagInfoError(error))
      );
  };
