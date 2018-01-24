import request from '../utils/request';


export function query() {
  return request('/web/task/allTasks',{
  	 method: 'POST'
  });
}

//注意带参数的url 需要使用 ``
export async function deleteTask(params){
	return request(`web/task/${params}/remove`,{
		method:'POST'
	});
}