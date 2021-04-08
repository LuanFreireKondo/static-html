# Static html

generate a `/dist` folder with all static html assets `ready to deploy` on `s3` bucket 🚀 📦 

### Technologies

- [**Webpack 5**](https://webpack.js.org) - Generate your static module bundler 
- [**NodeJS**](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine

### Environments

Env | URL
------------ | -------------
DEV | http://localhost:9090
PROD | https://static.lkondo.com

### Install

``` bash

npm install

```

### Run

``` bash

npm start

```

### Testing

``` bash

http://localhost:9090/

```

### Build

``` bash

npm run build-prod

```

### Dist

```
.
├── /dist                     # Minified, optimized and compiled files
│   ├── /assets
│   │   ├── logo-192x192.png           
│   │   ├── logo-512x512.png
│   │   ├── manifest.json
│   │   └── style.css
│   ├── home.js
│   ├── index.html
│   ├── robots.txt
│   └── sw.js
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Luan Freire Kondo