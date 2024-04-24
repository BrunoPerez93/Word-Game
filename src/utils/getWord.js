export const getWord = async () => {
  const url = `https://random-word-api.herokuapp.com/word`
  const resp = await fetch(url);
  const wordData = await resp.json();

  return wordData;
}