
import axios from 'axios'
import QS from 'qs'
import {Toast} from 'vant' //提示框架


//根据环境切换地址
if(process.env.NODE_ENV == 'development'){
    axios.defaults.baseURL = 'http://localhost'
}
else if(process.env.NODE_ENV == 'debug'){
    axios.defaults.baseURL = 'http://localhost'
}
else if(process.env.NODE_ENV == 'production'){
    axios.defaults.baseURL = 'http://132.232.40.236'
}

//设置请求超时

axios.defaults.timeout = 10000

// post请求头设置
axios.defaults.header.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
