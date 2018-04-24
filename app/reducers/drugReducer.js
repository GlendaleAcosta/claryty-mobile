export default function reducer(state = {
  top10Reactions: null,
  drugInfo: "Loading...",
  drugs: [],
  fetchingsDrugs: false,
  fetchingDrugInfo: false
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
      return { ...state, drugInfo: action.payload };
    }
    case 'DRUGS_FETCHED': {
      return {
        ...state,
        fetchingDrugs: false,
        drugs: action.payload
      }
    }
    case 'FETCHING_DRUGS': {
      console.log('@@@@@@@');
      return {
        ...state,
        fetchingDrugs: true
      }
    }
    default: return state;
  }
}
