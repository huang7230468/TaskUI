import request from '../utils/request';

export function query() {
  return request('/products/list');
}
/*export function query() {
  return request('/web/task/allTasks',{
  	 method: 'POST'
  });
}
*/