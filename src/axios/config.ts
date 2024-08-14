import axios from "axios";
import 'dotenv/config'

const baseURL = process.env.BASE_URL
const api = axios.create({
    baseURL
  });

export { api }