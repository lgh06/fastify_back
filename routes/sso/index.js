import {knexMssql, knexOracle} from "../../helpers/index.mjs";


import formbody from "@fastify/formbody";

export default async function (fastify, opts) {
  fastify.register(formbody);

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

  fastify.post('/e9getLoginForm', async function (request, reply) {
    return fetch("http://oa.heshenghe.cn:8089/api/hrm/login/getLoginForm",{
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `loginid=&langid=7&`
    }).then(res => {
      return res.json()
    })
    // let {query, body, params, header} = request
    // return {query, body, params, header};
  })
}
