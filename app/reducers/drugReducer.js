export default function reducer(state = {
  top10Reactions: null,
  drugInfo: "Loading...",
  // year: 15,
}, action) {
  switch (action.type) {
    case 'GET_10_REACTIONS': {
      return {
        ...state,
        top10Reactions: action.payload.top10Reactions,
      };
    }
    case 'GET_DRUG_INFO': {
      // console.log('@@@@@@@@@@@@@@@@@@@@@@@');
      // console.log(action.payload);
      // console.log('@@@@@@@@@@@@@@@@@@@@@@@');
      return { ...state, drugInfo: action.payload };
    }
    default: return state;
  }
}
