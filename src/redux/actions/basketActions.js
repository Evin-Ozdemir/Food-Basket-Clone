import ActionTypes from "../actionTypes";
import api from "../../api/index";

//! Sepeteki ürünleri api'den alıp reducer'a haber ver
export const getBasket = () => async (dispatch) => {
  dispatch({ type: ActionTypes.CART_LOADING });

  api
    .get("/cart")
    .then((res) =>
      dispatch({ type: ActionTypes.CART_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.CART_ERROR, payload: err.message })
    );
};

// ! Api'a yeni ürün ekle reducer'a haber ver
export const createItem = (product) => async (dispatch) => {
  // 1. sepete eklenicek olan ürünün bilgilerini belirle
  const newItem = {
    id: product.id,
    category: product.category,
    title: product.title,
    price: product.price,
    photo: product.photo,
    amount: 1,
  };

  // 2. api'a sepete eklemek için istek at
  api
    .post("/cart", newItem)
    // 3. istek başarılı olursa reducer'a haber ver
    .then(() => dispatch({ type: ActionTypes.CREATE_ITEM, payload: newItem }))
    .catch((err) => alert("Üzgünüz bir sorun oluştu"));
};

// ! Api'daki ürünün miktarını güncelle ve reducer'a haber ver
export const updateItem = (id, newAmount) => async (dispatch) => {
  // Api'a güncelleme isteği at
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    // istek başarılı olursa reducer'a haber ver
    .then((res) =>
      dispatch({ type: ActionTypes.UPDATE_ITEM, payload: res.data })
    )
    .catch((err) => alert("Üzgünüz bir sorun oluştu.Güncelleme olmadı"));
};

// ! Api'deki ürünü sildikten sonra reducer'a haber gönder
export const deleteItem = (id) => async (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => dispatch({ type: ActionTypes.DELETE_ITEM, payload: id }))
    .catch((err) => alert("Üzgünüz bir sorun oluştu.Silme işlemi olmadı"));
};
