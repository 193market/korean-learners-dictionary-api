"""Korean Learner's Dictionary API — quick start (Python, requests).
Set RAPIDAPI_KEY to the key shown on korean-learners-dictionary at rapidapi.com after subscribing to the free plan."""
import os
import requests

HOST = "korean-learners-dictionary.p.rapidapi.com"
KEY = os.environ["RAPIDAPI_KEY"]

def call(path: str):
    r = requests.get(f"https://{HOST}{path}",
                     headers={"X-RapidAPI-Key": KEY, "X-RapidAPI-Host": HOST}, timeout=30)
    r.raise_for_status()
    return r.json()

if __name__ == "__main__":
    # Search a word (Korean or English) with English translations
    data = call("/v1/search?q=%EC%82%AC%EB%9E%91&lang=en&per_page=3")
    import json
    print(json.dumps(data, ensure_ascii=False, indent=2)[:2000])
