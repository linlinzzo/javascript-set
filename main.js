/***
issubset(a,b)用于测试 a 是否为 b 的子集（有序）
p = ["1","2"]
>>> (2) ['1', '2']
o = ["1"]
>>> ['1']
issubset(p,o)
>>> false
issubset(o,p)
>>> true
***/

function issubset(a, b) {
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
isprosubset(a, b)检验 a 是否为 b 的真子集（有序）
u = ["1","2"]
>>> (2) ['1', '2']
isprosubset(o,p)
>>> true
isprosubset(u,p)
>>> false
***/

function isprosubset(a, b) {
  if (issubset(a, b) === true) {
    if (issubset(b, a) === true) {
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

function issuperset(a, b) {
  return issubset(b, a);
}

function isprosuperset(a, b) {
  return isprosubset(b, a);
}

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

/***
差集也写一下吧
这样我的编程 todo 就完成了
哈哈哈嗝

好像这个输出是有序的
e = ["1","2","3"]
>>> (3) ['1', '2', '3']
t = ["3","4","5"]
>>> (3) ['3', '4', '5']
diffset(e,t)
>>> (4) ['1', '2', '4', '5']
diffset(t,e)
>>> (4) ['4', '5', '1', '2']
***/

function diffset(a, b) {
   // 等会差集还是一样加到 r 中
  var r = new Array(1);
  r.pop();
  var ai = 0;
  var bi = 0;
  while (ai < a.length) {
    if (b.includes(a[ai]) === false) {
      r.push(a[ai]);
    }
    ai++;
  }
  while (bi < b.length) {
    if (a.includes(b[bi]) === false) {
      r.push(b[bi]);
    }
    bi++;
  }
  return r;
}
