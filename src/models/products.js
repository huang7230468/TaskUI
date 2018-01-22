import {query} from '../services/products';

export default {
  namespace: 'products',
  state: {
      productList :[],
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
  
  effects:{
  	*list(_, { call , put }) {
  		const response = yield call(query);
      console.log("response",response);
  		yield put({
  			type :'a',
  			payload : {
            productList : response,
        } ,
  		})
  	}
  }
};