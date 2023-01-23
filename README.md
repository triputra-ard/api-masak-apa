## Masakapahariini Api

Unofficial masakapaharini.com API

**Status** : Maintained

### Documentation New✨

---

| Field | Description                                                                                |
| ----- | ------------------------------------------------------------------------------------------ |
| key   | is a unique key used to access the next endpoint example `key : 'resep-sambal-teri-petai'` |
| page  | load a next of data if want to make pagination in your app                                 |
| tag   | is unique key of a article category to hit a detail of article                             |
| limit | set limit of result **note** make sure you set limit below of 10                           |

### Endpoint Usage New ✨

---

**Base Url** : `https://masak-apa-new.vercel.app`

| Endpoint                  | Usage                            | Example                                                          |
| ------------------------- | -------------------------------- | ---------------------------------------------------------------- |
| new recipes               | `/recipes`                       | -                                                                |
| new recipes by page       | `/recipes/:page`                 | `/recipes/1`                                                     |
| new recipes limit         | `/recipes/length/?limit=size`    | `/recipes/length/?limit=5`                                       |
| category by pages         | `/recipes/:tag/:key`             | `/recipes/masakan-hari-raya/soto-ayam`                           |
| recipes by category       | `/categories/:key`               | `/categories/masakan-hari-raya`                                  |
| recipes category by pages | `/recipes/bycategory/:tag/:page` | `/recipes/bycategory/masakan-hari-raya/1`                        |
| recipes category          | `/categories/`                   | -                                                                |
| recipe detail             | `/recipes/full/details/:key`     | -                                                                |
| search recipes            | `/search/?q=parameter`           | `/search/?q=coto`                                                |
| article categories        | `/article`                       | -                                                                |
| article by category       | `/article/:key`                  | `/article/makanan-gaya-hidup`                                    |
| article new               | `/article/new`                   | -                                                                |
| article detail            | `/article/:tag/:key`             | `/article/makanan-gaya-hidup/papeda-dan-masakan-indonesia-timur` |

### What's the difference with the original?

---

Simplify **the url**, **the response** and **CORS** site **allowed**

#### Credits

Build by Reski Arianto - Rebuild by Tri Putra Ardiyansah

Made With 💙

## Tech Stack

**Server:** Node, Cheerio

## Installation

Simple install this project :

```bash
  cd api-masak-apa
  npm install
```

or

```bash
  cd api-masak-apa
  yarn
```

To run the development server :

```bash
  npm run watch
```

or

```bash
  yarn watch
```

## Used By

This project is used by the following apps:

- [Masak-Yuk](https://masak-yuk.vercel.app/)
