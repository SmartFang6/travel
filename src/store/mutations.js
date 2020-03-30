export default {
  changeCity(state, city) {
    state.city = city //state.city等于actions的commit传递来的city
    try {
      localStorage.city = city //吧city存储到localstorage中
    } catch (e) {}
  }
}