import axios from "axios";

const KEY = process.env.REACT_APP_NOT_SECRET_CODE
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResult:5,
        key:KEY
    }

})