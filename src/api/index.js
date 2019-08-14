/*
包含n个接口请求函数的模块
函数的返回值：promise独享
*/
import ajax from './ajax'

// [1、根据经纬度获取位置详情]
// 要学会看文档写接口函数   例如ajax(`/position/40.10038,116.36867`)里面的url就是文档中的url,只不过40.10038,116.36867是动态获取的
// 如果写ajax(`/position/`,{geohash})里面的{geohash}是query参数,封装在?后面的。但是此处应该为param参数，写在url里面，所以写成`/position/${geohash}`
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)// 请求的都以req开头

// [2、获取食品分类列表]  //由文档知，不需要传别的参数，参数类型：无
export const reqFoodTypes = () => ajax(`/index_category`)

// [3、根据经纬度获取商铺列表]
// ajax('/shops', {longitude, latitude})中参数对象的名字一定要与文档中一致
export const reqShops = (longitude, latitude) => ajax('/shops', {longitude, latitude})
// 如果想使用一个参数传2个数据过去，则是如下写法
// export const reqShops = ({longitude, latitude}) => ajax()

// [4、根据经纬度和关键字搜索商铺列表]

// [5、获取一次性验证码]
// [6、用户名密码登陆]
// [7、发送短信验证码]
// [8、手机号验证码登陆]
// [9、根据会话获取用户信息]
// [10、用户登出]
