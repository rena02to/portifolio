import { combineReducers } from 'redux';

//tipagem dos estados
interface typeStates {
}

//valores iniciais dos estados
const initialState: typeStates = {
};

//ações
export const stateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

//combina os reducers em uma variável chamada rootReducer 
//e nomeia o estado gerenciado por stateReducer como states
export const rootReducer = combineReducers({
  states: stateReducer,
});

//exporta o tipo dos estados
export type RootState = ReturnType<typeof rootReducer>;