import {query,deleteTask,createTask} from '../services/task';
import { message } from 'antd';
export default {
  namespace: 'tasks',
  state: {
      taskList :[],
      loading:true,
      submitting : false ,
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
    *create({payload},{call,put}){
         yield put({
          type: 'changeFormSubmitting',
          payload: true,
        });


         const response = yield call(createTask,payload);
         if(response.success){
           message.success('创建成功');
        }else{
            message.success('创建失败');
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
            yield put({
              type: 'changeFormSubmitting',
              payload: false,
            });
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
    },
    changeFormSubmitting(state,action){
      return{
        ...state,
      submitting : action.payload,
      }
    }
  },
  
};