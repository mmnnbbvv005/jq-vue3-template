/*
 * @Author: your name
 * @Date: 2021-08-27 16:17:54
 * @LastEditTime: 2021-08-27 16:19:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\api\index.ts
 */
import  request  from "../utils/axios";

export function getData(){
  return request({
    url:'/',
    method:"GET",
    params:''
  })
}
