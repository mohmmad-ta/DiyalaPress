import axios from "axios";

axios.defaults.baseURL = "https://api.diyalapress.com/";
axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("token");