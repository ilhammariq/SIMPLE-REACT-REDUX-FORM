import { DEL_LIST_MAHASISWA, DETAIL_LIST_MAHASISWA, GET_LIST_MAHASISWA, POST_MAHASISWA, UPDATE_LIST_MAHASISWA } from '../actions/MahasiswaAction';

const initialState = {
  postMahasiswaLoading: false,
  postMahasiswaData: false,
  postMahasiswaError: false,

  getListMahasiswaLoading: false,
  getListMahasiswaData: false,
  getListMahasiswaError: false,

  delListMahasiswaLoading: false,
  delListMahasiswaData: false,
  delListMahasiswaError: false,

  updateListMahasiswaLoading: false,
  updateListMahasiswaData: false,
  updateListMahasiswaError: false,

  detailListMahasiswaLoading: false,
  detailListMahasiswaData: false,
  detailListMahasiswaError: false,
};

const mahasiswa = (state = initialState, action) => {
  switch (action.type) {
    case POST_MAHASISWA:
      return {
        ...state,
        postMahasiswaLoading: action.payload.loading,
        postMahasiswaData: action.payload.data,
        postMahasiswaError: action.payload.errorMessage,
      };
    case GET_LIST_MAHASISWA:
      return {
        ...state,
        getListMahasiswaLoading: action.payload.loading,
        getListMahasiswaData: action.payload.data,
        getListMahasiswaError: action.payload.errorMessage,
      };
    case DEL_LIST_MAHASISWA:
      return {
        ...state,
        delListMahasiswaLoading: action.payload.loading,
        delListMahasiswaData: action.payload.data,
        delListMahasiswaError: action.payload.errorMessage,
      };
    case UPDATE_LIST_MAHASISWA:
      return {
        ...state,
        updateListMahasiswaLoading: action.payload.loading,
        updateListMahasiswaData: action.payload.data,
        updateListMahasiswaError: action.payload.errorMessage,
      };
    case DETAIL_LIST_MAHASISWA:
      return {
        ...state,
        detailListMahasiswaLoading: action.payload.loading,
        detailListMahasiswaData: action.payload.data,
        detailListMahasiswaError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export default mahasiswa;
