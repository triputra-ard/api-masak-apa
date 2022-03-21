## Masakapahariini Api 🧙 🍳
---

![preview](https://github.com/tomorisakura/unofficial-masakapahariini-api/blob/main/asset/banner.png)

---

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
**Base Url** : `https://masak-apa.tomorisakura.vercel.app`

| Endpoint | Usage | Example |
|----------|-------|---------|
| new recipes | `/api/recipes` | - |
| new recipes by page | `/api/recipes/:page` | `/api/recipes/1` |
| new recipes limit | `/api/recipes-length/?limit=size` | `/api/recipes-length/?limit=5` |
| recipes by category | `/api/categorys/recipes/:key` | `/api/categorys/recipes/masakan-hari-raya` |
| recipes category | `/api/categorys/recipes` | - |
| recipe detail | `/api/recipe/:key` | - |
| search recipes | `/api/search/?q=parameter` | `/api/search/?q=coto` |
| article categorys | `/api/categorys/article` | - |
| article by category | `/api/categorys/article/:key` | `/api/categorys/article/makanan-gaya-hidup` |
| article | `/api/articles/new` | - |
| article detail | `/api/article/:tag/:key` | `/api/article/makanan-gaya-hidup/papeda-dan-masakan-indonesia-timur` |

### Show Case
---

* __Masak Apa__ [(Android Kotlin 🧙‍♂️)](https://github.com/tomorisakura/masak-apa)

#### Credits
Copyright © 2020 Reski Arianto - redefine and forked by Tri Putra Ardiyansah

Build With 💙
