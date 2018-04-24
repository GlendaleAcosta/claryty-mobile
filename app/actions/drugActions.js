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
    return fetch('http://localhost:3100/api/drug-info', {
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

export function fetchDrugInfo(drug) {
  let drugName;
  if (drug.genericName.length === 0) {
      drugName = drug.drugName;
  } else {
      drugName = drug.genericName;
  }

  drugName = drugName.toLowerCase();
  return fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${drugName}`)
      .then((response) => response.json())
      .then((responseJson) => {
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


export function searchDrug(drug){
  return function (dispatch) {
    dispatch(fetchingDrugs());
    return fetch('http://localhost:3100/api/drug', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        drugName: drug,
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
