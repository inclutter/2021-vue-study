# 2021-vue-study

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 01 Package.json 파일

```
{
  "name": "2021-vue-study", // 패키지의 이름
  "version": "0.1.0", // 패키지의 버전 정보 0(메이저).1(마이너).0(패치버전)
  "private": true, // 이 패키지를 공개할지 비공개할지 정하는 부분
  "scripts": {
    "serve": "vue-cli-service serve", // serve 명령어는 개발 모드로 프로젝트 실행(개발용으로만 사용)
    "build": "vue-cli-service build", // buil 명령어는 빌드할 때 사용
    "lint": "vue-cli-service lint" // 문법오류나 코드 검사할 때 사용 fix 옵션으로 자동 수정됨
  },
  "dependencies": { // 이 웹앱이 실행할 때 필요한 설치된 라이브러리를 정의하는 부분
    "core-js": "^3.6.5",
    "vue": "^2.6.14",
    "vue-router": "^3.5.3",
    "vuetify": "^2.4.0"
  },
  "devDependencies": { // 개발시 필요한 정의된 라이브러리
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.2.2",
    "sass": "~1.32.0",
    "sass-loader": "^10.0.0",
    "vue-cli-plugin-vuetify": "~2.4.3",
    "vue-template-compiler": "^2.6.11",
    "vuetify-loader": "^1.7.0"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {}
  },
  "browserslist": [ // 브라우저 타깃설정
    "> 1%", // 전세계 브라우저가 1% 이상인 브라우저와
    "last 2 versions",  // 최근 2개 버전인 브라우저를 타겟하겠다
    "not dead" // 지원이 중단된 브라우저는 제외하겠다
  ]
}
```
