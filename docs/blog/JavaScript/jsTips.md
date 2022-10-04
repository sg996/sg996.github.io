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

## 003_map(Number)、map(String)、map(Boolean) 

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
## 004\_filter(Boolean) 

```js
// 移除所有的 “false” 类型元素（false, null, undefined, 0, NaN, an empty string）
let arr = [1, 0, false, 'true', {}, null, undefined, NaN, '', , 'false'];
arr.filter(Boolean); // [1, 'true', {}, 'false']
```
## 005\_'true'、'false'转 Boolean 类型

```js
JSON.parse("true"); // true
JSON.parse("false"); // false
JSON.parse(true); // true
JSON.parse(false); // false
```
## 006\_模板字符串嵌套

```js
const a = 20, b = 30, c = '三', d = '日';
const res = `今天星期${Math.random() > 0.5 ? `${c}` : `${d}`}，签到人数${Math.random() > 0.5 ? `${a}` : `${b}`}人`;
console.log(res);
```
## 007\_多属性不为空过滤并字符拼接

```js
// 可以使用 Object.values()
const obj = {
  a: 'vue',
  b: '',
  c: 'router',
  d: 'react',
  e: '',
  f: 'redux',
};
Object.values(obj).filter(Boolean).join('-');
// 'vue-router-react-redux'
```
## 008\_对象数组过滤出指定属性

```js
const foo = [
  {id: 1, name: '小米'},
  {id: 2, name: '小米2'},
  {id: 5, name: '小东'},
  {id: 2, name: '小米2'},
  {id: 1, name: '小米'},
  {id: 8, name: '小红'},
  {id: 10, name: '小西'},
  {id: 12, name: '小明'},
  {id: 8, name: '小红'}
];

foo.map(i => i.id); // [1, 2, 5, 2, 1, 8, 10, 12, 8]
```

## 009\_给方法传一个空参数
```js
method(...['parameter1', , 'parameter3']); 
```