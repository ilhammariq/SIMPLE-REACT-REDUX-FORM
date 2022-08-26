import axios from 'axios';

import {
  dispatchSuccess,
  dispatchError,
  dispatchLoading,
} from '../config/dispatchs';

export const POST_MAHASISWA = 'POST_MAHASISWA';
export const GET_LIST_MAHASISWA = 'GET_LIST_MAHASISWA';
export const DEL_LIST_MAHASISWA = 'DEL_LIST_MAHASISWA'
export const UPDATE_LIST_MAHASISWA = 'UPDATE_LIST_MAHASISWA';
export const DETAIL_LIST_MAHASISWA = 'DETAIL_LIST_MAHASISWA';

export const postMahasiswa = (data) => {
  return (dispatch) => {
    dispatchLoading(dispatch, POST_MAHASISWA);
    axios({
      method: 'post',
      url: 'https://63072feec0d0f2b80128d3c6.mockapi.io/api/mahasiswa',
      timeout: 150000,
      data,
    })
      .then((response) => {
        if (response.data) {
          dispatchSuccess(dispatch, POST_MAHASISWA, 'Submit data berhasil');
        }
      })
      .catch((error) => {
        dispatchError(dispatch, POST_MAHASISWA, error.message);
      });
  };
};

export const getListMahasiswa = () => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_MAHASISWA);
    axios({
      method: 'get',
      url: 'https://63072feec0d0f2b80128d3c6.mockapi.io/api/mahasiswa',
      timeout: 150000,
    })
      .then((response) => {
        if (response.data) {
          dispatchSuccess(dispatch, GET_LIST_MAHASISWA, response.data);
        }
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_MAHASISWA, error.message);
      });
  };
};

export const deleteListMahasiswa = (id) => {
  return (dispatch) => {
    dispatchLoading(dispatch, DEL_LIST_MAHASISWA);
    axios({
      method: 'delete',
      url: `https://63072feec0d0f2b80128d3c6.mockapi.io/api/mahasiswa/${id}`,
      timeout: 150000,
    })
      .then((response) => {
        if (response.data) {
          dispatchSuccess(dispatch, DEL_LIST_MAHASISWA, response.data);
        }
      })
      .catch((error) => {
        dispatchError(dispatch, DEL_LIST_MAHASISWA, error.message);
      });
  };
};

export const detailListMahasiswa = (id) => {
  return (dispatch) => {
    dispatchLoading(dispatch, DETAIL_LIST_MAHASISWA);
    axios({
      method: 'get',
      url: `https://63072feec0d0f2b80128d3c6.mockapi.io/api/mahasiswa/${id}`,
      timeout: 150000,
    })
      .then((response) => {
        if (response.data) {
          dispatchSuccess(dispatch, DETAIL_LIST_MAHASISWA, response.data);
        }
      })
      .catch((error) => {
        dispatchError(dispatch, DETAIL_LIST_MAHASISWA, error.message);
      });
  };
};

export const updateListMahasiswa = (id, data) => {
  return (dispatch) => {
    dispatchLoading(dispatch, UPDATE_LIST_MAHASISWA);
    axios({
      method: 'put',
      url: `https://63072feec0d0f2b80128d3c6.mockapi.io/api/mahasiswa/${id}`,
      data,
      timeout: 150000,
    })
      .then((response) => {
        if (response.data) {
          dispatchSuccess(dispatch, UPDATE_LIST_MAHASISWA, 'Update data berhasil');
        }
      })
      .catch((error) => {
        dispatchError(dispatch, UPDATE_LIST_MAHASISWA, error.message);
      });
  };
};
