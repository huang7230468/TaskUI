


// 是否禁用代理
const noProxy =  true;//process.env.NO_PROXY === 'false';


const proxy = {
	'GET /products/list': [
			       { key:1,name: 'dva', id: 1 },
			       { key :2,name: 'antd', id: 2 }
			     ]
}


export default noProxy ? {
		'POST /web/(.*)': 'http://localhost:8080/web',
	} : proxy;

