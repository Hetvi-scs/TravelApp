// INFO: all API call methods added here
import {API_URL} from 'config';
import axios from 'axios';
import {userLogout, store} from 'redux-actions';
import OneSignal from 'react-native-onesignal';

const showLog = false;

function _post(url, headers, data) {
  const options = {
    url: url,
    method: 'POST',
    headers: headers.headers || headers,
    data:
      headers.headers['Content-Type'] === 'multipart/form-data'
        ? data
        : JSON.stringify(data) || data,
  };

  showLog && console.log('POST API OPTIONS ==>', options);

  return axios(options)
    .then(res => {
      showLog && console.log('POST API RESPONSE ==>', res.data);
      if (res.data != undefined) {
        return res.data;
      }
    })
    .catch(async err => {
      showLog && console.log('POST API ERROR ==>', err);
      if (err.response.data.message == 'Invalid token') {
        let playerId = await OneSignal.getDeviceState().then(res => {
          return res.userId;
        });

        await store.dispatch(
          userLogout({
            u_id: store.getState().authReducer.userLoginResponse.u_id,
            player_id: playerId,
          }),
        );
      }
      throw 'response' in err
        ? typeof err.response.data === 'object'
          ? err.response.data
          : err
        : err;
    });
}
function _postStringified(url, headers, data) {
  const options = {
    url: url,
    method: 'POST',
    headers: headers.headers || headers,
    data: data,
  };

  showLog && console.log('POST API OPTIONS ==>', options);

  return axios(options)
    .then(res => {
      showLog && console.log('POST API RESPONSE ==>', res.data);
      if (res.data != undefined) {
        return res.data;
      }
    })
    .catch(async err => {
      showLog && console.log('POST API ERROR ==>', err);
      if (err.response.data.message == 'Invalid token') {
        let playerId = await OneSignal.getDeviceState().then(res => {
          return res.userId;
        });

        await store.dispatch(
          userLogout({
            u_id: store.getState().authReducer.userLoginResponse.u_id,
            player_id: playerId,
          }),
        );
      }
      throw 'response' in err
        ? typeof err.response.data === 'object'
          ? err.response.data
          : err
        : err;
    });
}
function _put(url, headers, data) {
  const options = {
    url: url,
    method: 'PUT',
    headers: headers.headers,
    data:
      headers.headers['Content-Type'] === 'multipart/form-data'
        ? data
        : JSON.stringify(data),
  };

  showLog && console.log('PUT API OPTIONS ==>', options);

  return axios(options)
    .then(res => {
      showLog && console.log('PUT API RESPONSE ==>', res.data);
      if (res.data != undefined) {
        return res.data;
      }
    })
    .catch(err => {
      showLog && console.log('PUT API ERROR ==>', err);
      throw 'response' in err
        ? typeof err.response.data === 'object'
          ? err.response.data
          : err
        : err;
    });
}
function _putStringified(url, headers, data) {
  const options = {
    url: url,
    method: 'PUT',
    headers: headers.headers,
    data: data,
  };

  showLog && console.log('PUT API OPTIONS ==>', options);

  return axios(options)
    .then(res => {
      showLog && console.log('PUT API RESPONSE ==>', res.data);
      if (res.data != undefined) {
        return res.data;
      }
    })
    .catch(err => {
      showLog && console.log('PUT API ERROR ==>', err);
      throw 'response' in err
        ? typeof err.response.data === 'object'
          ? err.response.data
          : err
        : err;
    });
}
function _patch(url, headers, data) {
  const options = {
    url: url,
    method: 'PATCH',
    headers: headers.headers,
    data:
      headers.headers['Content-Type'] === 'multipart/form-data'
        ? data
        : JSON.stringify(data),
  };

  showLog && console.log('PATCH API OPTIONS ==>', options);

  return axios(options)
    .then(res => {
      showLog && console.log('PATCH API RESPONSE ==>', res.data);
      if (res.data != undefined) {
        return res.data;
      }
    })
    .catch(err => {
      showLog && console.log('PATCH API ERROR ==>', err);
      throw 'response' in err
        ? typeof err.response.data === 'object'
          ? err.response.data
          : err
        : err;
    });
}

function _get(url, headers) {
  const options = {
    url: url,
    method: 'GET',
    headers: headers.headers,
  };
  showLog && console.log('GET API OPTIONS ==>', options);
  return axios(options)
    .then(res => {
      showLog && console.log('GET API RESPONSE ==>', res.data);
      if (res.data != undefined) {
        return res.data;
      }
    })
    .catch(async err => {
      showLog && console.log('GET API ERROR ==>', err);
      if (err.response.data.message == 'Invalid token') {
        let playerId = await OneSignal.getDeviceState().then(res => {
          // console.log('object', res);
          return res.userId;
        });

        await store.dispatch(
          userLogout({
            u_id: store.getState().authReducer.userLoginResponse.u_id,
            player_id: playerId,
          }),
        );
      }
      throw 'response' in err
        ? typeof err.response.data === 'object'
          ? err.response.data
          : err
        : err;
    });
}

function _delete(url, headers, data) {
  const options = {
    url: url,
    method: 'DELETE',
    headers: headers.headers,
    body: JSON.stringify(data),
  };
  showLog && console.log('DELETE API OPTIONS ==>', options);
  return axios(options)
    .then(res => {
      showLog && console.log('DELETE API RESPONSE ==>', res.data);
      if (res.data != undefined) {
        return res.data;
      }
    })
    .catch(err => {
      showLog && console.log('DELETE API ERROR ==>', err);
      throw 'response' in err
        ? typeof err.response.data === 'object'
          ? err.response.data
          : err
        : err;
    });
}

function _api_calls(type, url, headers = {}, data = {}) {
  url = `${API_URL + url}`;

  switch (type) {
    case 'POST':
      return _post(url, headers, data);
    case 'POST_WITHOUT_STRINGIFIED':
      return _postStringified(url, headers, data);
    case 'PUT_WITHOUT_STRINGIFIED':
      return _putStringified(url, headers, data);
    case 'GET':
      return _get(url, headers);
    case 'DELETE':
      return _delete(url, headers, data);
    case 'PUT':
      return _put(url, headers, data);
    case 'PATCH':
      return _patch(url, headers, data);
    default:
      break;
  }
}

const HttpCalls = {
  _api_calls,
  _post,
  _get,
  _delete,
  _put,
  _postStringified,
  _putStringified,
};

export default HttpCalls;
