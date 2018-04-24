function fetchingDrugs () {
  return {
    type: 'FETCHING_DRUGS',
    payload: null,
  };
}

function drugsFetched (drugs) {
  return {
    type: 'DRUGS_FETCHED',
    payload: drugs,
  }
}

function fetchingAdverseEffects () {
  return {
    type: 'FETCHING_ADVERSE_EFFECTS',
    payload: null
  }
}

function adverseEffectsFetched (adverseEffects) {
  return {
    type: 'ADVERSE_EFFECTS_FETCHED',
    payload: adverseEffects
  }
}

export function setCurrentDrug(drug) {
  drug.drugName = drug.drugName[0] + drug.drugName.substring(1, drug.drugName.length).toLowerCase();
  drug.genericName = drug.genericName[0] + drug.genericName.substring(1, drug.genericName.length).toLowerCase();
  return {
    type: 'SET_CURRENT_DRUG',
    payload: drug
  }
}

export function getTop10Reactions(year, drugName) {
  return fetch('http://localhost:3100/api/reactions', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      year: 2015,
      drugName: 'Aspirin',
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return {
        type: 'GET_10_REACTIONS',
        payload: response.data,
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        type: 'ERROR',
        payload: null,
      };
    })
}

export function getDrugInfo(drugName) {
  return function (dispatch) {
    return fetch('http://localhost:3100/api/drug', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        drugName: drugName,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        const drug = response;
        return dispatch(fetchDrugInfo(response));
      });
    }
}

export function fetchDrugInfo(genericName) {
  return fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${genericName}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const pages = responseJson.query.pages;
        const drugInfo = pages[Object.keys(pages)[0]].extract;
        return {
          type: 'GET_DRUG_INFO',
          payload: drugInfo,
        };
      })
      .catch((error) => {
        console.log("fetch failed");
        console.error(error);
      });
}


export function searchDrug(drugName){
  return function (dispatch) {
    dispatch(fetchingDrugs());
    return fetch('http://localhost:3100/api/drug', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        drugName: drugName,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      const drug = [responseJson];
      dispatch(drugsFetched(drug));
    })
    .catch((error) => {
      console.log("fetch failed");
      console.error(error);
    });
  }
}

export function getAdverseEffects(drugName, year) {
  return function (dispatch) {
    dispatch(fetchingAdverseEffects());
    return fetch('http://localhost:3100/api/adverse-effects', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        year: 2017,
        drugName: drugName,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      const { data } = responseJson
      dispatch(adverseEffectsFetched(data));
    })
    .catch((error) => {
      console.log("fetch failed");
      console.error(error);
    });
  }
}
