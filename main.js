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
prosubset(a, b)检验 a 是否为 b 的真子集（有序）
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

/***
comset(a, b)输出 a 和 b 的补集（无序）
k = ["111","222"]
>>> (2) ['111', '222']
g = ["111","222","333","444"]
>>> (4) ['111', '222', '333', '444']
comset(k,g)
>>> (2) ['333', '444']
comset(g,k)
>>> (2) ['333', '444']
s= ["111","222"]
>>> (2) ['111', '222']
comset(k,s)
>>> null
***/

function comset(a, b) {
  // 等会补集要加到 r 中
  var r = new Array(1);
  r.pop();
  var i = 0;
  if (a.length > b.length) {
    var c = a;
    var d = b;
  } else if (a.length < b.length) {
    var d = a;
    var c = b;
  } else {
    return null;
  }
  while (Boolean(c) === true && i < c.length) {
    if (d.includes(c[i]) === false) {
      r.push(c[i]);
    }
    i++;
  }
  if (Boolean(c) === true) {
    return r;
  }
}

/***
无聊写一写并集
感觉 includes 方法要用好多遍啊

union(k,g)
>>> (2) ['111', '222']
union(k,s)
>>> (2) ['111', '222']
f =[""]
>>> ['']
union(f,k)
>>> []
***/

function union(a, b) {
  // 等会并集还是一样加到 r 中
  var r = new Array(1);
  r.pop();
  var i = 0;
  while (i < a.length) {
    if (b.includes(a[i]) === true) {
      r.push(a[i]);
    }
    i++;
  }
  /*** 
  这个东西好像跟位置没关系吧
  最后在输出结果 r
  ***/
  return r;
}
