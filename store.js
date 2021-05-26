import * as redux from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

// Actions
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';

const countIntialState = {
  count: 0
}

const countReducer = (state = countIntialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return { ...state, count: state.count + 1 };
      break;
    }
    case COUNTER_DECREMENT: {
      return { ...state, count: state.count - 1 };
      break;
    }
    default: {
      return state;
    }
  }
}

const rootReducer = redux.combineReducers({
    counter: countReducer,
    form: formReducer,
  }
);

const store = redux.createStore(rootReducer, redux.applyMiddleware(thunk));
export default store;
