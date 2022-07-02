/***
subset(a,b)用于测试 a 是否为 b 的子集
w = ["aaa","bbb"];
>>> (2) ['aaa', 'bbb']
q = ["bbb","ccc"];
>>> (2) ['bbb', 'ccc']
subset(w,q)
>>> false
r = ["aaa","bbb","ccc"]
>>> (3) ['aaa', 'bbb', 'ccc']
subset(w,r)
>>> true
***/

/*** 
这里好像出现了意外
s = ["1","2"];
>>> (2) ['1', '2']
d = ["1"];
>>> ['1']
subset(s,d)
>>> true
此时 s 不是 d 的子集啊
出什么问题了
***/

function subset(a, b) {
  var x;
  for (x = 0; x < a.length; x++) {
    var y = a[x];
    if (b.includes(y) === false) {
      return false;
      break; 
    }
    return true;
  }
}

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
