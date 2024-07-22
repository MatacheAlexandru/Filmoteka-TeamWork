# Documentație pentru Funcțiile din apiPixabay.js

Acest fișier conține funcții care interacționează cu API-ul Pixabay pentru a
obține imagini și videouri pentru diverse criterii de căutare. Mai jos este o
descriere detaliată a fiecărei funcții, modul de utilizare și exemple de
integrare în alte fișiere.

## Cum să Folosești Funcțiile din apiPixabay.js

### Import și Export

Pentru a utiliza funcțiile din `apiPixabay.js` în alte fișiere, trebuie mai
întâi să le exporți și să le imporți corespunzător.

### Export

În `apiPixabay.js`, funcțiile sunt exportate astfel:

```javascript
export {
  searchImages,
  searchVideos,
  getImageDetails,
  getVideoDetails,
  getPopularImages,
  getPopularVideos,
  getRandomImages,
  getRandomVideos,
  getImagesByColor,
  getVideosByColor,
};
```

### Import

Pentru a importa și utiliza aceste funcții în alte fișiere, folosește `import`:

```javascript
import { searchImages, getImageDetails } from './apiPixabay.js';
```

## Descrierea Funcțiilor și Modul de Utilizare

### 1. fetchFromAPI(url)

#### Descriere

Funcție auxiliară pentru a face cereri HTTP și a obține date de la API.

#### Parametri

- `url` (string): URL-ul pentru cererea API.

#### Returnează

Un Promise care se rezolvă cu datele obținute de la API.

#### Exemplu de Utilizare

```javascript
const API_KEY = '24587351-f51ecbfdd1a1ed72c58205b43';
const BASE_URL = 'https://pixabay.com/api';

async function fetchFromAPI(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Network response was not ok. Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
```

#### Detalii Importante

Această funcție este folosită intern de toate celelalte funcții pentru a trimite
cereri API și a prelua date. Nu este destinată utilizării directe.

### 2. searchImages(query, page = 1, perPage = 20)

#### Descriere

Obține imagini după un cuvânt cheie.

#### Parametri

- `query` (string): Cuvântul cheie pentru căutare.
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre imagini pentru cuvântul cheie
specificat.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 195893,
      "pageURL": "https://pixabay.com/photos/blossom-bloom-flower-195893/",
      "type": "photo",
      "tags": "blossom, bloom, flower",
      "previewURL": "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/54e1d14a4e5aa414f1dc846096293e7b1d39dfe1504c704c7d267ad2914fc7_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/54e1d14a4e5aa414f6da8c7dda793677173fd7e65a516c48732f7edd964ec2_1280.jpg",
      "imageWidth": 4000,
      "imageHeight": 2250,
      "imageSize": 4731420,
      "views": 7671,
      "downloads": 6439,
      "favorites": 1,
      "likes": 5,
      "comments": 2,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte imagini
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { searchImages } from './apiPixabay.js';

searchImages('floare')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching images:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de imagini găsite.
- `hits[0].previewURL`: URL-ul imaginii de previzualizare.
- `hits[0].largeImageURL`: URL-ul imaginii la rezoluție mare.

### 3. searchVideos(query, page = 1, perPage = 20)

#### Descriere

Obține videouri după un cuvânt cheie.

#### Parametri

- `query` (string): Cuvântul cheie pentru căutare.
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre videouri pentru cuvântul cheie
specificat.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 16547,
      "pageURL": "https://pixabay.com/videos/id-16547/",
      "type": "film",
      "tags": "floare, natura, primavara",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/67822/large.mp4",
          "width": 1920,
          "height": 1080,
          "size": 5090874
        },
        "medium": {
          "url": "https://cdn.pixabay.com/vimeo/67822/medium.mp4",
          "width": 1280,
          "height": 720,
          "size": 2222320
        },
        "small": {
          "url": "https://cdn.pixabay.com/vimeo/67822/small.mp4",
          "width": 640,
          "height": 360,
          "size": 715802
        },
        "tiny": {
          "url": "https://cdn.pixabay.com/vimeo/67822/tiny.mp4",
          "width": 320,
          "height": 180,
          "size": 117018
        }
      },
      "views": 2623,
      "downloads": 1834,
      "favorites": 30,
      "likes": 22,
      "comments": 4,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte videouri
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { searchVideos } from './apiPixabay.js';

searchVideos('floare')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching videos:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de videouri găsite.
- `hits[0].videos`: Variantele de rezoluție ale videoclipului.
- `hits[0].videos.large.url`: URL-ul videoclipului la rezoluție mare.

### 4. getImageDetails(imageId)

#### Descriere

Obține detalii despre o imagine după ID.

#### Parametri

- `imageId` (number): ID-ul imaginii.

#### Returnează

Un Promise care se rezolvă cu detaliile imaginii pentru ID-ul specificat.

#### Exemplu de răspuns

```json
{
  "total": 1,
  "totalHits": 1,
  "hits": [
    {
      "id": 195893,
      "pageURL": "https://pixabay.com/photos/blossom-bloom-flower-195893/",
      "type": "photo",
      "tags": "blossom, bloom, flower",
      "previewURL": "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/54e1d14a4e5aa414f1dc846096293

e7b1d39dfe1504c704c7d267ad2914fc7_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/54e1d14a4e5aa414f6da8c7dda793677173fd7e65a516c48732f7edd964ec2_1280.jpg",
      "imageWidth": 4000,
      "imageHeight": 2250,
      "imageSize": 4731420,
      "views": 7671,
      "downloads": 6439,
      "favorites": 1,
      "likes": 5,
      "comments": 2,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getImageDetails } from './apiPixabay.js';

getImageDetails(195893)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching image details:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `hits`: Lista de imagini găsite.
- `hits[0].pageURL`: URL-ul paginii imaginii.
- `hits[0].largeImageURL`: URL-ul imaginii la rezoluție mare.

### 5. getVideoDetails(videoId)

#### Descriere

Obține detalii despre un video după ID.

#### Parametri

- `videoId` (number): ID-ul videoclipului.

#### Returnează

Un Promise care se rezolvă cu detaliile videoclipului pentru ID-ul specificat.

#### Exemplu de răspuns

```json
{
  "total": 1,
  "totalHits": 1,
  "hits": [
    {
      "id": 16547,
      "pageURL": "https://pixabay.com/videos/id-16547/",
      "type": "film",
      "tags": "floare, natura, primavara",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/67822/large.mp4",
          "width": 1920,
          "height": 1080,
          "size": 5090874
        },
        "medium": {
          "url": "https://cdn.pixabay.com/vimeo/67822/medium.mp4",
          "width": 1280,
          "height": 720,
          "size": 2222320
        },
        "small": {
          "url": "https://cdn.pixabay.com/vimeo/67822/small.mp4",
          "width": 640,
          "height": 360,
          "size": 715802
        },
        "tiny": {
          "url": "https://cdn.pixabay.com/vimeo/67822/tiny.mp4",
          "width": 320,
          "height": 180,
          "size": 117018
        }
      },
      "views": 2623,
      "downloads": 1834,
      "favorites": 30,
      "likes": 22,
      "comments": 4,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getVideoDetails } from './apiPixabay.js';

getVideoDetails(16547)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching video details:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `hits`: Lista de videouri găsite.
- `hits[0].pageURL`: URL-ul paginii videoclipului.
- `hits[0].videos.large.url`: URL-ul videoclipului la rezoluție mare.

### 6. getPopularImages(category = '', editorsChoice = false, page = 1, perPage = 20)

#### Descriere

Obține imagini populare.

#### Parametri

- `category` (string): Categoria imaginii (implicit '').
- `editorsChoice` (boolean): Filtru pentru alegerile editorilor (implicit
  false).
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre imagini populare.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 195893,
      "pageURL": "https://pixabay.com/photos/blossom-bloom-flower-195893/",
      "type": "photo",
      "tags": "blossom, bloom, flower",
      "previewURL": "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/54e1d14a4e5aa414f1dc846096293e7b1d39dfe1504c704c7d267ad2914fc7_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/54e1d14a4e5aa414f6da8c7dda793677173fd7e65a516c48732f7edd964ec2_1280.jpg",
      "imageWidth": 4000,
      "imageHeight": 2250,
      "imageSize": 4731420,
      "views": 7671,
      "downloads": 6439,
      "favorites": 1,
      "likes": 5,
      "comments": 2,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte imagini
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getPopularImages } from './apiPixabay.js';

getPopularImages('nature', true)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching popular images:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de imagini populare găsite.

### 7. getPopularVideos(category = '', editorsChoice = false, page = 1, perPage = 20)

#### Descriere

Obține videouri populare.

#### Parametri

- `category` (string): Categoria videoclipului (implicit '').
- `editorsChoice` (boolean): Filtru pentru alegerile editorilor (implicit
  false).
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre videouri populare.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 16547,
      "pageURL": "https://pixabay.com/videos/id-16547/",
      "type": "film",
      "tags": "floare, natura, primavara",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/67822/large.mp4",
          "width": 1920,
          "height": 1080,
          "size": 5090874
        },
        "medium": {
          "url": "https://cdn.pixabay.com/vimeo/67822/medium.mp4",
          "width": 1280,
          "height": 720,
          "size": 2222320
        },
        "small": {
          "url": "https://cdn.pixabay.com/vimeo/67822/small.mp4",
          "width": 640,
          "height": 360,
          "size": 715802
        },
        "tiny": {
          "url": "https://cdn.pixabay.com/vimeo/67822/tiny.mp4",
          "width": 320,
          "height": 180,
          "size": 117018
        }
      },
      "views": 2623,
      "downloads": 1834,
      "favorites": 30,
      "likes": 22,
      "comments": 4,
      "user_id": 48777,
      "user": "422737",
      "userImageURL

": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte videouri
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getPopularVideos } from './apiPixabay.js';

getPopularVideos('nature', true)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching popular videos:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de videouri populare găsite.

### 8. getRandomImages(query, page = 1, perPage = 3)

#### Descriere

Obține imagini aleatorii.

#### Parametri

- `query` (string): Cuvântul cheie pentru căutare.
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 3).

#### Returnează

Un Promise care se rezolvă cu datele despre imagini aleatorii.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 3,
  "hits": [
    {
      "id": 195893,
      "pageURL": "https://pixabay.com/photos/blossom-bloom-flower-195893/",
      "type": "photo",
      "tags": "blossom, bloom, flower",
      "previewURL": "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/54e1d14a4e5aa414f1dc846096293e7b1d39dfe1504c704c7d267ad2914fc7_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/54e1d14a4e5aa414f6da8c7dda793677173fd7e65a516c48732f7edd964ec2_1280.jpg",
      "imageWidth": 4000,
      "imageHeight": 2250,
      "imageSize": 4731420,
      "views": 7671,
      "downloads": 6439,
      "favorites": 1,
      "likes": 5,
      "comments": 2,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte imagini
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getRandomImages } from './apiPixabay.js';

getRandomImages('floare')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching random images:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de imagini aleatorii găsite.

### 9. getRandomVideos(category = '', page = 1, perPage = 20)

#### Descriere

Obține videouri aleatorii.

#### Parametri

- `category` (string): Categoria videoclipului (implicit '').
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre videouri aleatorii.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 16547,
      "pageURL": "https://pixabay.com/videos/id-16547/",
      "type": "film",
      "tags": "floare, natura, primavara",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/67822/large.mp4",
          "width": 1920,
          "height": 1080,
          "size": 5090874
        },
        "medium": {
          "url": "https://cdn.pixabay.com/vimeo/67822/medium.mp4",
          "width": 1280,
          "height": 720,
          "size": 2222320
        },
        "small": {
          "url": "https://cdn.pixabay.com/vimeo/67822/small.mp4",
          "width": 640,
          "height": 360,
          "size": 715802
        },
        "tiny": {
          "url": "https://cdn.pixabay.com/vimeo/67822/tiny.mp4",
          "width": 320,
          "height": 180,
          "size": 117018
        }
      },
      "views": 2623,
      "downloads": 1834,
      "favorites": 30,
      "likes": 22,
      "comments": 4,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte videouri
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getRandomVideos } from './apiPixabay.js';

getRandomVideos('nature')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching random videos:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de videouri aleatorii găsite.

### 10. getImagesByColor(color, page = 1, perPage = 20)

#### Descriere

Obține imagini după culoare.

#### Parametri

- `color` (string): Culoarea pentru căutare.
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre imagini pentru culoarea specificată.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 195893,
      "pageURL": "https://pixabay.com/photos/blossom-bloom-flower-195893/",
      "type": "photo",
      "tags": "blossom, bloom, flower",
      "previewURL": "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/54e1d14a4e5aa414f1dc846096293e7b1d39dfe1504c704c7d267ad2914fc7_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/54e1d14a4e5aa414f6da8c7dda793677173fd7e65a516c48732f7edd964ec2_1280.jpg",
      "imageWidth": 4000,
      "imageHeight": 2250,
      "imageSize": 4731420,
      "views": 7671,
      "downloads": 6439,
      "favorites": 1,
      "likes": 5,
      "comments": 2,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte imagini
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getImagesByColor } from './apiPixabay.js';

getImagesByColor('red')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching images by color:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de imagini găsite pentru culoarea specificată.

### 11. getVideosByColor(color, page = 1, perPage = 20)

#### Descriere

Obține videouri după culo

are (dacă este suportat).

#### Parametri

- `color` (string): Culoarea pentru căutare.
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre videouri pentru culoarea
specificată.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 16547,
      "pageURL": "https://pixabay.com/videos/id-16547/",
      "type": "film",
      "tags": "floare, natura, primavara",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/67822/large.mp4",
          "width": 1920,
          "height": 1080,
          "size": 5090874
        },
        "medium": {
          "url": "https://cdn.pixabay.com/vimeo/67822/medium.mp4",
          "width": 1280,
          "height": 720,
          "size": 2222320
        },
        "small": {
          "url": "https://cdn.pixabay.com/vimeo/67822/small.mp4",
          "width": 640,
          "height": 360,
          "size": 715802
        },
        "tiny": {
          "url": "https://cdn.pixabay.com/vimeo/67822/tiny.mp4",
          "width": 320,
          "height": 180,
          "size": 117018
        }
      },
      "views": 2623,
      "downloads": 1834,
      "favorites": 30,
      "likes": 22,
      "comments": 4,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte videouri
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getVideosByColor } from './apiPixabay.js';

getVideosByColor('red')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching videos by color:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de videouri găsite pentru culoarea specificată.

---

Aceasta este documentația detaliată pentru funcțiile din `apiPixabay.js`.
Asigură-te că ai cheia API corectă și că urmezi structura corectă pentru
apelurile API.
