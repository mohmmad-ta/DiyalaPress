import axios from "axios";

axios.defaults.baseURL = "https://api.diyalanewsagency.com/";
axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("token");