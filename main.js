/***
subset(a,b)用于测试 a 是否为 b 的子集（有序）
p = ["1","2"]
>>> (2) ['1', '2']
o = ["1"]
>>> ['1']
subset(p,o)
>>> false
subset(o,p)
>>> true
***/

function subset(a, b) {
  var i = 0;
  var y = a[i];
  while (i < a.length && b.includes(a[i]) === true) {
    if (i == a.length - 1) {
      var n = 0;
    } else {
      var n = 1;
    }
    i++;
  }
  if (n == 0) {
    return true;
  } else {
    return false;
  }
}

/***
prosubset(a, b)检验 a 是否为 b 的真子集
u = ["1","2"]
>>> (2) ['1', '2']
prosubset(o,p)
>>> true
prosubset(u,p)
>>> false
***/

function prosubset(a, b) {
  if (subset(a, b) === true) {
    if (subset(b, a) === true) {
      return false; //此时 a = b
    } else {
      return true; //为子集又不相等
    }
    return false; //子集关系都不存在
    }
  }

/***
给超集和真超集写代码真没意思
不就和子集和真子集相反吗
算了应付一下
***/

function superset(a, b) {
  return subset(b, a);
}

function prosuperset(a, b) {
  return prosubset(b, a);
}

/***
绝对补集
并集
差集
让我想一想
***/

function comset(a, b) {
  // 等会补集要加到 r 中
  var r = new Array(1);
  // 等会再写
}
