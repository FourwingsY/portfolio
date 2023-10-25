import returnFetch from "return-fetch"

const fetch = returnFetch({
  baseUrl: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://yanggoon.dev",
})
export default fetch
