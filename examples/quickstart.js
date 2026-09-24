// Korean Learner's Dictionary API — quick start (Node 18+, built-in fetch).
// Set RAPIDAPI_KEY to the key shown on korean-learners-dictionary at rapidapi.com after subscribing to the free plan.
const HOST = "korean-learners-dictionary.p.rapidapi.com";
const KEY = process.env.RAPIDAPI_KEY;

async function call(path) {
  const res = await fetch(`https://${HOST}${path}`, {
    headers: { "X-RapidAPI-Key": KEY, "X-RapidAPI-Host": HOST },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

// Search a word (Korean or English) with English translations
call("/v1/search?q=%EC%82%AC%EB%9E%91&lang=en&per_page=3").then((d) => console.log(JSON.stringify(d, null, 2).slice(0, 2000)));
