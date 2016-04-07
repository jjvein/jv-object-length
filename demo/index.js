
var jvObjectLength = require('../')

var log = console.log
var arr, ret

arr = null
ret = jvObjectLength(arr)
log(ret)

arr = [1, 2,3,]
ret = jvObjectLength(arr)
log(ret)

arr = {foo: 'foo', bar: 'bar', name: 'jjvein', age: 23, pig: null}
ret = jvObjectLength(arr)
log(ret)


