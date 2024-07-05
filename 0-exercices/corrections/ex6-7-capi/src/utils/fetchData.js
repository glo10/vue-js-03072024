export const fetchJSON = async (url) => {
  return fetch(url)
    .then((data) => data.json())
};

export const getBaseApi = (port = 7000) => {
  let baseApi = "https://api.exchangerate-api.com/v4/latest"
  if(import.meta.env.MODE === 'development') {
    baseApi = `http://127.0.0.1:${port}/${baseApi}`
  }
  return baseApi
}