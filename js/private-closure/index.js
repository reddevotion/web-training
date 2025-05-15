function createObject() {
  let _value = null;

  return {
    getValue() {
      return _value;
    },
    setValue(value) {
      _value = value;
    }
  };
} // closure

class MyClass {
  #value;

  constructor() {
    this.#value = null;
  }

  getValue() {
    return this.#value;
  }

  setValue(value) {
    this.#value = value;
  }
} // class private properies

const object2 = new MyClass();
// console.log(object2.#value) Property '#value' is not accessible outside class 'MyClass' because it has a private identifier.
object2.setValue(42);
console.log(object2.getValue()); // 42

const object = createObject();


console.log(object._value) // undefined

object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство
object.getValue(); // 73

// Должно быть. Можно трогать и переписывать полностью весь код выше 16й строчки. 

object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство
console.log(object.getValue()); // 42

