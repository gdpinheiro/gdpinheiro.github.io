export default function requestQuestionToken() {
  const triviaURL = 'https://opentdb.com/api_token.php?command=request';
  return fetch(triviaURL)
    .then((response) => response.json())
    .then((response) => localStorage.setItem('token', response.token));
}
