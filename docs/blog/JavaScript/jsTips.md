# JS 实用小技巧整理

## 001\_字符串转数组

```js
let str = "asdfghjkl";

str.split(""); //  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
Array.from(str); //  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
[...str]; //  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
Array.of(...str); //  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
Object.values(str); // ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
```

## 002\_数组转字符串

```js
let arr = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

arr.join(''); // 'asdfghjkl'
''.concat(...arr); // 'asdfghjkl'
arr.toString(); // 'a,s,d,f,g,h,j,k,l'
arr.toLocaleString(); // 'a,s,d,f,g,h,j,k,l'
arr + []; // 'a,s,d,f,g,h,j,k,l'
arr + ''; // 'a,s,d,f,g,h,j,k,l'

# 拓展：join() 和 toString() 都可以将多维数组转成普通字符串。
let arr = [1, [2, 3], [4, 5]];
arr.join(); // '1,2,3,4,5'
arr.toString();  // '1,2,3,4,5'
```

## 003_map(Number)、map(String)、map(Boolean) 转换类型

```js
# 字符串数组转换为数值型数组
let arr = [1, 2, 3];
arr.map(String); // ['1', '2', '3']

# 数值数组转换为字符串型数组
let arr = ['1', '2', '3'];
arr.map(Number); // [1, 2, 3]

# 数值型数组转换为布尔值
let arr = [0, 1, 1, 1, 0];
arr.map(Boolean); // [false, true, true, true, false]

# 混合类型转换对比
let arr = [1, 0, '1', '-1', '0', true, false, 'true', 'false', null, undefined, NaN, ''];
arr.map(String);
// ['1', '0', '1', '-1', '0', 'true', 'false', 'true', 'false', 'null', 'undefined', 'NaN', '']
arr.map(Number);
// [1, 0, 1, -1, 0, 1, 0, NaN, NaN, 0, NaN, NaN, 0]
arr.map(Boolean);
// [true, false, true, true, true, true, false, true, true, false, false, false, false]
```

## 004\_字符串'true'、'false'转换为 Boolean 类型

```js
JSON.parse("true"); // true
JSON.parse("false"); // false
JSON.parse(true); // true
JSON.parse(false); // false
```
