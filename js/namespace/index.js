function namespace(str) {
    const obj = {}
    str.split('.').reduce((acc, cur) => {acc[cur] = {}; return acc[cur]}, obj)

    return obj
}

console.log(namespace('a.b.c.d.e')); // {"a":{"b":{"c":{"d":{"e":{}}}}}}