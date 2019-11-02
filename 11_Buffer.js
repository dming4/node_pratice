var buff=Buffer.from('hello world');

console.log(buff)

console.log(buff.toString())

var a=Buffer.from('a')
var b=Buffer.from('bc')


var c=Buffer.alloc(1)
var d=Buffer.alloc(12)

var e=Buffer.concat([a,b],a.length+b.length);
console.log(e.length)