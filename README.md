# Korean Learner's Dictionary API

Korean dictionary for learners: 56K words, 590K examples, translations in 11 languages.

**Try it (free tier, no card):** [https://rapidapi.com/193market/api/korean-learners-dictionary](https://rapidapi.com/193market/api/korean-learners-dictionary) · also on [api.market](https://api.market/store/193market/korean-learners-dictionary)

56,000+ Korean headwords (words, idioms, proverbs) with Korean definitions, 590K+ example sentences, and translations in 11 languages (en, zh, ja, fr, es, ar, mn, vi, th, id, ru). Search in Korean or in any of the 11 languages. Levels: beginner / intermediate / advanced. Hanja origin included. Data © National Institute of Korean Language (2026-08 release), CC BY-SA 2.0 KR.

## Who uses it

Korean-learning apps, flashcard and spaced-repetition tools, chatbots and tutoring products that need a real dictionary behind them.

## Quick start

Subscribe to the free BASIC plan on RapidAPI, copy your `X-RapidAPI-Key`, then:

```bash
curl "https://korean-learners-dictionary.p.rapidapi.com/v1/search?q=%EC%82%AC%EB%9E%91&lang=en&per_page=3" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: korean-learners-dictionary.p.rapidapi.com"
```

Python and Node examples are in [`examples/`](examples/). Both read the key from the `RAPIDAPI_KEY` environment variable.

Other calls worth trying:
- Word of the day (beginner/intermediate, same for everyone): `GET /v1/word-of-the-day?lang=en`
- A random intermediate word: `GET /v1/random?level=intermediate&lang=en`

## Example response

`GET /v1/search?q=%EC%82%AC%EB%9E%91&lang=en&per_page=3` — Search a word (Korean or English) with English translations:

```json
{
  "query": "사랑",
  "total": 39,
  "page": 1,
  "per_page": 3,
  "results": [
    {
      "id": 34525,
      "word": "사랑",
      "homonym_number": 1,
      "unit": "단어",
      "part_of_speech": "noun",
      "part_of_speech_ko": "명사",
      "pronunciation": "사랑",
      "origin": null,
      "level": "beginner",
      "semantic_category": "인간 > 감정",
      "senses": [
        {
          "sense_no": 1,
          "definition_ko": "상대에게 성적으로 매력을 느껴 열렬히 좋아하는 마음.",
          "note": null,
          "translations": [
            {
              "lang": "en",
              "lemma": "love",
              "definition": "The state of being sexually attracted to and having strong affection for a person."
            }
          ],
          "examples": [
            {
              "type": "phrase",
              "text": "남녀 간의 사랑."
            },
            {
              "type": "phrase",
              "text": "사랑 이야기."
            },
            "..."
          ]
        },
        {
          "sense_no": 2,
          "definition_ko": "아끼고 소중히 여겨 정성을 다해 위하는 마음.",
          "note": null,
          "translations": [
            {
              "lang": "en",
              "lemma": "love",
              "definition": "The attitude of sincerely caring about someone out of affection."
            }
          ],
          "examples": [
            {
              "type": "phrase",
              "text": "부모님의 사랑."
            },
            {
              "type": "phrase",
              "text": "스승의 사랑."
            },
            "..."
          ]
        },
        "..."
      ]
    },
    {
      "id": 34530,
      "word": "사랑",
      "homonym_number": 2,
      "unit": "단어",
      "part_of_speech": "noun",
      "part_of_speech_ko": "명사",
      "pronunciation": "사랑",
      "origin": "舍廊",
      "level": "advanced",
      "semantic_category": "주생활 > 주택 구성",
      "senses": [
        {
          "sense_no": 1,
          "definition_ko": "집의 안채와 떨어져 있는, 주로 집안의 남자 주인이 머물며 손님을 맞는 곳.",
          "note": null,
          "translations": [
            {
              "lang": "en",
              "lemma": "guest room; reception room",
  ...
}
```

## Endpoints

| Method | Path | What it does | Parameters (* required) |
|---|---|---|---|
| GET | `/v1/search` | Search words (Korean or any of 11 languages) | `q`*, `lang`, `level`, `pos`, `page`, `per_page` |
| GET | `/v1/words/{word_id}` | Get one entry by id | `word_id`*, `lang` |
| GET | `/v1/random` | Random word (optionally by level) | `level`, `lang` |
| GET | `/v1/word-of-the-day` | Same daily word for everyone (beginner/intermediate) | `lang` |
| GET | `/v1/stats` | Dataset statistics |  |

The full OpenAPI 3 specification is in [`openapi.json`](openapi.json).

## Plans

| Plan | Price | Included per month |
|---|---|---|
| BASIC | free | a small monthly quota for evaluation |
| PRO / ULTRA / MEGA | from $49 / month | 1,000+ requests, per-request overage, higher rate limits |

Current prices are always on the [RapidAPI pricing page](https://rapidapi.com/193market/api/korean-learners-dictionary/pricing). Error responses (4xx/5xx) are not charged on api.market.

## Data source and licence

National Institute of Korean Language, Korean Basic Dictionary (한국어기초사전), 2026-08 release, CC BY-SA 2.0 KR. Audio and images are not served.

Every response carries an `attribution` object naming the source and the changes made (translation, normalisation, filtering, aggregation). This API is an independent product and is not affiliated with or endorsed by any government agency or regulator.

## Support

Questions, missing fields, or a use case the current plans do not fit: open an issue in this repository or use the Discussions tab on the RapidAPI listing.
