import api from "../../api";
import ActionTypes from "../actionTypes";

// ! Senkron Fonksiyonlar
export const setRestaurant = (payload) => ({
  type: ActionTypes.REST_SUCCESS,
  payload,
});

// ! Asenkron Thunk Fonksiyon
//  Senkron aksiyonlardan farklı olarak api isteği atıp ardından dispatch ile reducer'a haber gönderebilecegiz.
export const getRestaurants = () => {
  return async (dispatch) => {
    // Reducer'a haber gönder
    dispatch({ type: ActionTypes.REST_LOADING });

    // Api isteği at
    api
      .get("/restaurants")
      .then((res) => {
        dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data });
      })
      .catch((err) => dispatch({ type: ActionTypes.REST_ERROR, payload: err }));
  };
};
