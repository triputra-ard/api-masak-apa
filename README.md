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
**Base Url** : `https://masak-apa-new.vercel.app`

| Endpoint | Usage | Example |
|----------|-------|---------|
| new recipes | `/recipes` | - |
| new recipes by page | `/recipes/:page` | `/recipes/1` |
| new recipes limit | `/recipes/length/?limit=size` | `/recipes/length/?limit=5` |
| recipes by category | `/categories/:key` | `/categories/masakan-hari-raya` |
| recipes category | `/categories/` | - |
| recipe detail | `/recipe/:key` | - |
| search recipes | `/search/?q=parameter` | `/search/?q=coto` |
| article categories | `/article` | - |
| article by category | `/article/:key` | `/article/makanan-gaya-hidup` |
| article new| `/article/new` | - |
| article detail | `/article/:tag/:key` | `/article/makanan-gaya-hidup/papeda-dan-masakan-indonesia-timur` |

#### What's the difference with the original?
---
Simplify the url and CORS site allowed

#### Credits
Build by Reski Arianto - Rebuild by Tri Putra Ardiyansah

Made With 💙
