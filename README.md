## Masakapahariini Api 🧙 🍳

Food recipes api bahasa Indonesia 🇮🇩 build with __Cheerio__ and __Node js__ 🌸

**Status** : Maintained 🚀

### Documentation
---

| Field | Description |
| ------ | ----------- |
| key   | is a unique key used to access the next endpoint example  ```key : 'resep-sambal-teri-petai'``` |
| page | load a next of data if want to make pagination in your app |
| tag    | is unique key of a article category to hit a detail of article|
| limit    | set limit of result **note** make sure you set limit below of 10 |



### Endpoint Usage
---
**Base Url** : `https://api.masak-apa.vercel.app`

| Endpoint | Usage | Example |
|----------|-------|---------|
| new recipes | `/recipes` | - |
| new recipes by page | `/recipes/:page` | `/recipes/1` |
| new recipes limit | `/recipes-length/?limit=size` | `/recipes-length/?limit=5` |
| recipes by category | `/categorys/recipes/:key` | `/categorys/recipes/masakan-hari-raya` |
| recipes category | `/categorys/recipes` | - |
| recipe detail | `/recipe/:key` | - |
| search recipes | `/search/?q=parameter` | `/search/?q=coto` |
| article categorys | `/categorys/article` | - |
| article by category | `/categorys/article/:key` | `/categorys/article/makanan-gaya-hidup` |
| article | `/articles/new` | - |
| article detail | `/article/:tag/:key` | `/article/makanan-gaya-hidup/papeda-dan-masakan-indonesia-timur` |

#### Credits
Copyright © 2020 Reski Arianto - redefine and forked by Tri Putra Ardiyansah

Build With 💙
