# Задачи для прокачки себя
## Описание как проходить задачи

Все задачи из указанных ниже блоков необходимо делать в соответствующих подпапках и создать на каждое задание дополнительную папку с именем задания.
* JavaScript;
* TypeScript;
* ReactJS;
* NodeJS;
* Webpack.

Было до реализации задачи:
```bash
.
├── README.md
.
.
.
├── js
│   ├── can-get-count.md
└
```

Стало после реализации задачи:
```bash
.
├── README.md
.
.
.
├── js
│   ├── can-get-count
│   │   ├── index.js
│   │   └── index.md
```

1. Создать папку с именем задачи;
2. Перенести контент из файла <name>.md в файл <name>/index.md;
3. Добавить все остальные необходимые файлы в папку с задачей.

### Ссылки

* https://git-scm.com/book/ru/v2;
* https://learn.javascript.ru/;
* https://reactjs.org/;
* https://www.typescriptlang.org/docs/;
* https://expressjs.com/ru/.

## Задачи

### GitHub

* [forks.md](/github/forks.md)
* [pull-requests.md](/github/pull-requests.md)
* [branches.md](/github/branches.md)

После задачи branches необходимо каждое последующее задание делать так:
1. Обязательно в своём форке;
2. Каждая задача в новой ветке с названием `feat/<block>_<name>`, 
где <block> — это имя папки; <name> — имя задачи. Например, задача js/tree -> ветка `git checkout -b feat/js_tree`.
3. Открывать пул реквест из ветки в ветку master своего же проекта.
4. Открывать пул реквест из своего проекта из ветки master в репозиторий [olyzakharova/web-training](https://github.com/olyzakharova/web-training)

**КАЖДАЯ ЗАДАЧА ДАЛЬШЕ ДОЛЖНА ДЕЛАТЬСЯ ЧЕРЕЗ НОВУЮ ВЕТКУ С ИМЕНАМИ ВЫШЕ И ПУЛ РЕКВЕСТАМИ**

### JavaScript

* [can-get-count.md](/js/can-get-count.md)
* [namespace.md](/js/namespace.md)
* [tree.md](/js/tree.md)
* [private-closure.md](/js/private-closure.md)
* [range.md](/js/range.md)
* [convolution-range.md](/js/convolution-range.md)
* [transport.md](/js/transport.md)
* [flatten.md](/js/flatten.md)
* [intersection.md](/js/intersection.md) // Дополнительно

### TypeScript

* [invert.md](/ts/ivert.md)
* [get.md](/ts/get.md)
* [all-settled.md](/ts/all-settled.md)
* [set.md](/ts/set.md)
* [query-string.md](/ts/query-string.md)
* [transport.md](/ts/transport.md)
* [fetchWithRetries.md](/ts/fetchWithRetries.md)
* [memo.md](/ts/memo.md)
* [single-list.md](/ts/single-list.md)
* [merge.md](/ts/merge.md)
* [isEqual.md](/ts/is-equal.md)
* [omit.md](/ts/omit.md)

### ReactJS

* [cra.md](/react/cra.md)
* [todo-list.md](/react/todo-list.md)
* [gh-search.md](/react/gh-search.md)
* [class-to-fc.md](/react/class-to-fc.md)
* [hook-preloader.md](/react/hook-preloader.md)
* [hook-event-listener.md](/react/hook-event-listener.md)
* [landing.md](/react/landing.md)
* [ssr-react*](/react/ssr-react*.md) // дополнительно

### NodeJS // скоро

* [express.md](/nodejs/express.md)
* [proxy.md](/nodejs/proxy.md)
* [json-csv.md](/nodejs/json-csv.md)
* [dadata.md](/nodejs/dadata.md)
* [books.md](/nodejs/books.md)
* [auth-cookie.md](/nodejs/auth-cookie.md)

### Webpack // скоро

* [typescript.md](/webpack/typescript.md)
* [static.md](/webpack/static.md)

### Deploy // скоро

* [heroku.md](/deploy/heroku.md)
* [ci-cd.md](/deploy/ci-cd.md)
* [yandex-cloud.md](/deploy/yandex-cloud.md)
* [s3.md](/deploy/s3.md)
