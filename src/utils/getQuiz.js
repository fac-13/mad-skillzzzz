const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
  }
  return response.json();
};

export const getSession = () => {
  return fetch(`https://opentdb.com/api_token.php?command=request`)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetching session token failed ${err}`);
    });
};

export const getQuiz = (categoryId, sessionToken) => {
  return fetch(
    `https://opentdb.com/api.php?amount=10&category=${categoryId}&encode=base64&token=${sessionToken}`
  )
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetching the quiz failed ${err}`);
    });
};
