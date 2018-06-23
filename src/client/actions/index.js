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
          dispatch(getTagInfoSuccess(result.data));
        }
      )
      .catch(
        error =>
          dispatch(getTagInfoError(error))
      );
  };
