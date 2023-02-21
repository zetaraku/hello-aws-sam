import fortuneQuotes from './fortuneQuotes.json';

export function pickItem<T>(items: T[]) {
  return items[Math.trunc(items.length * Math.random())];
}

export async function getRandomFortuneQuote() {
  return pickItem(fortuneQuotes);
}

export async function getRandomNumberFact() {
  const url = 'https://numbersapi.p.rapidapi.com/random/trivia?min=0&max=100';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.RAPID_API_KEY!,
    },
  };

  return await fetch(url, options)
    .then(res => res.text());
}
