


// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'false';

const proxy = {
	'GET /products/list': [
			       { name: 'dva', id: 1 },
			       { name: 'antd', id: 2 }
			     ]
}


export default noProxy ? {} : proxy;

