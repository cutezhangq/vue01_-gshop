/**
 *  ajax请求函数模块
 * 返回值:promise对象(异步返回的数据是response.data)
*/
import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') { // 默认向外暴露一个函数
  return new Promise(function (resolve, reject) { // resolve成功  reject失败
  // 接收函数的函数--->高阶函数   function (resolve, reject) {}
  // resolve, reject都是函数类型

  // 执行异步ajax请求
    let promise
    // 若是get请求，将data数据拼接到url中 ；若是post，则直接使用data里面的数据
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url) // 返回的promise是response
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    // 成功时，promise.then()
    promise.then(function (response) { // axios返回promise得到的就是response
      resolve(response.data) // 成功了调用resolve  // 能拿到response中的data数据了
    }).catch(function (error) { // 失败时，promise.catch()
      reject(error) // 失败了调用reject
    })
  })
}

/*
//封装了一个接口函数
const response = await ajax()
const result = response.data
//希望实现效果------不想要response,想要data
const result = await ajax()
*/
