### Задание

Реализуйте хук для работы с событиями. Необходимо уметь навязывать события в любом месте в любом DOM-элементе. Не забудьте очищать данные. 

```tsx
import {useEffect, useRef} from "react";

/**
type Handler = (e: Event) => void;
*/

export function useEventListener(
    eventName, // string
    handler, // Handler
    useCapture = false, // boolean
    container // Nullable<EventTarget>
) {
    ...
}
```
