import {query,deleteTask} from '../services/task';
import { message } from 'antd';
export default {
  namespace: 'tasks',
  state: {
      taskList :[],
      loading:true,
  },
 
  effects:{
  	*list(_, { call , put }) {
  		const response = yield call(query);
      if(response.success){
          yield put({
                type :'lists',
                payload : response.data,
              })

      }else{
            yield put({
              type :'lists',
              payload : [],
            })
      }
  	},
    *delete({payload},{call ,put }){
        const response = yield call(deleteTask,payload);
        if(response.success){
           message.success('删除成功');
        }else{
            message.success('删除失败');
        }
        const response1 = yield call(query);
            if(response1.success){
                yield put({
                      type :'lists',
                      payload : response1.data,
                    })

            }else{
                  yield put({
                    type :'lists',
                    payload : [],
                  })
            }
    } 
  },

   reducers: {
    delete(state, { payload: id }) {
      const map = state.productList.filter(item => item.id !== id);
      return {  
        ...state,
        productList : map,
      } ;
    },
    lists(state , action ){
        return {
          ...state,
          taskList : action.payload,
        };
    }

  },
  
};