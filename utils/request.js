import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = '/api'
//axios.defaults.headers['token'] = window.localStorage.getItem('token')

axios.interceptors.request.use(function (config) {
    // config.data = qs.stringify(config.data) //序列化字符串
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
	config.headers['Content-Type'] = 'application/json; charset=UTF-8'
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    if (response.status != 200) {
        //weui.alert('网络不给力')
    }
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default axios