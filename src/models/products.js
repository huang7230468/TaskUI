import {query} from '../services/products';

export default {
  namespace: 'products',
  state: {
      productList :[],
      loading:true,
  },
 
  effects:{
  	*list(_, { call , put }) {
  		const response = yield call(query);
      
      console.log("response",response);

  		yield put({
  			type :'lists',
  			payload : response ,
  		})
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
      console.log("state=====",state);
      console.log("action=====",action);
        return {
          ...state,
          productList : action.payload,
        };
    }

  },
  
};