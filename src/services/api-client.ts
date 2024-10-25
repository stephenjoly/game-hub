import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '706930698a8f4595987d84fae76be672'
  }
})