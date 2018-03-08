
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
  return fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Aspirin')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log("fetch worked");
        // console.log(responseJson);
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