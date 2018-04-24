export default function reducer(state = {
  top10Reactions: null,
  drugInfo: "Loading...",
  drugs: [],
  fetchingsDrugs: false,
  fetchingDrugInfo: false,
  fetchingAdverseEffects: false,
  adverseEffects: [],
  currentDrug: null,
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
    case 'FETCHING_ADVERSE_EFFECTS': {
      return {
        ...state,
        fetchingAdverseEffects: true
      }
    }
    case 'ADVERSE_EFFECTS_FETCHED': {
      return {
        ...state,
        fetchingAdverseEffects: false,
        adverseEffects: action.payload
      }
    }
    case 'DRUGS_FETCHED': {
      return {
        ...state,
        fetchingDrugs: false,
        drugs: action.payload
      }
    }
    case 'FETCHING_DRUGS': {
      return {
        ...state,
        fetchingDrugs: true
      }
    }
    case 'SET_CURRENT_DRUG': {
      return {
        ...state,
        currentDrug: action.payload
      }
    }
    default: return state;
  }
}
