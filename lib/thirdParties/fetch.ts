import returnFetch from "return-fetch"

const fetch = returnFetch({
  baseUrl: process.env.NODE_ENV === "development" ? "http://localhost:4109" : "https://yanggoon.dev",
})
export default fetch
