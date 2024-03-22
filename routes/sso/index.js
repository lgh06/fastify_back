import {knexMssql, knexOracle} from "../../helpers/index.mjs";


import formbody from "@fastify/formbody";
import cors from '@fastify/cors'

export default async function (fastify, opts) {
  await fastify.register(formbody);
  await fastify.register(cors);

  // http://oa.heshenghe.cn:8089/interface/Entrance.jsp?id=titanlocal

  // http://oa.heshenghe.cn:8089/wui/engine.html#/integration/outter  

  // 标识 名称 titanlocal
  // 内外网地址 http://localhost:3000/sso/e9  
  // 请求方式 POST 或 GET 

  // 账号参数名   user 使用ecology账号	 
  // 密码参数名   pass 使用ecology密码
  // 登录系统编码 UTF-8
  // 单点登录地址 /interface/Entrance.jsp




  fastify.get('/e9', async function (request, reply) {
    let {query, body, params, header} = request
    return {query, body, params, header};
  })

  fastify.post('/e9', async function (request, reply) {
    let {query, body, params, header} = request
    return {query, body, params, header};
  })

  fastify.get('/e9getLoginForm', async function (request, reply) {
    return fetch("http://oa.heshenghe.cn:8089/api/hrm/login/getLoginForm",{
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `loginid=&langid=7&` // 6
    }).then(res => {
      return res.json()
    })
    // let {query, body, params, header} = request
    // return {query, body, params, header};
  })


  fastify.get('/e9getQCLoginStatus', async function (request, reply) {
    let loginkey = request.query.loginkey;
    let cookies, result;
    await fetch("http://oa.heshenghe.cn:8089/api/hrm/login/qrcode/getQCLoginStatus",{
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `langid=7&loginkey=${loginkey}&isie=false&`
    }).then(res => {
      cookies = res.headers.getSetCookie();
      if(cookies && cookies.length){
        cookies = cookies.filter(e => String(e).includes("loginidweaver"));
      }
      return res.json()
    }).then(res =>{
      result = res;
    })
    return { cookies, result}
    // let {query, body, params, header} = request
    // return {query, body, params, header};
  })
}
