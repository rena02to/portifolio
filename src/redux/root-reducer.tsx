import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default: localStorage
import { stateReducer } from './reducers';

//variavel de configuração depersistência (ou não)
const persistConfig = {
  key: 'states',
  storage,
  whitelist: [''], // Lista dos reducers a serem persistidos
  blacklist: ['windowWidth', 'openMenu'], // Lista dos reducers a não serem persistidos
};

//combina a variável de configuração de persistência com os estados
const persistedUserReducer = persistReducer(persistConfig, stateReducer);

//exporta 
export const rootReducer = combineReducers({
  states: persistedUserReducer,
});
