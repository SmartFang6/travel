let defaultCity = '河南'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default  {
  city: defaultCity
}