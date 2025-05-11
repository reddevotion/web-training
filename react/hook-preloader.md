### Задание

Реализуйте HOC `preloader`. Он будет выполнять некие «предзагрузочные» вычисления, которые вы сами передаёте в функции `onLoad`.

HOC должен принимать объект с настройками. В данном случае объект содержит только одно поле — `onLoad`. Это функция, которую надо запустить и дождаться выполнения.

Внутри компонента высшего порядка должен быть внутренний `state`, который хранит состояние предзагрузки — завершилась или нет (в своих проектах можете завязать это на Redux). Этот параметр называется `loadStatus`. Его значениями могут быть литералы: `success`, `pending`, `failed`. Статусы должны меняться в соответствии с запуском и результатом `onLoad`.

Если параметр `onLoad` не передали, нужно отобразить `console.warn` ошибку: «`onLoad` —   это обязательный параметр» и вернуть промис, который успешно завершается без возврата значений.

В компонент из HOC'а передаётся свойство `preloadStatus`,  которое может быть `"success" | "pending" | "failed"`. 

```tsx
/**
     * Пример работы
     * some index.tsx:

import preloader from 'path/to/preloader';

import SomeComponent from './SomeComponent';

async function onLoad(props: SomeComponentOwnProps) {
    console.log(props); // Здесь !собственные! пропсы компоненты

    // Промисы, загрузки и тд
}

export default preloader({onLoad})(SomeComponent);
*/

// preload.tsx

type LoadStatus = "success" | "pending" | "failed" | null;

export type PreloadProps<T = {}> = {
    preloadStatus: LoadStatus;
} & T;

interface PreloadOptions<E> {
    onLoad: (props: E) => Promise<void>;
}

export default function preload<E>(params: PreloadOptions<E>) {
    // ...
}

```
