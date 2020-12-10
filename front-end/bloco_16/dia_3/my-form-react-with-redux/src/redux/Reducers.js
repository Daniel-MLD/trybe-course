const INITIAL_STATE = {
  answers: [],
};

export const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CLIENT':
      return {...state, answers: [...state.answers, action.value]}
    default:
      return state;
  }
}