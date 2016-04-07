"use strict"

module.exports = exports =  function(obj){

  //if obj is equal to `undefined` or `null`
  if(!obj) return false

  if(typeof obj !== 'object') return false

  var length, hasOwn = Object.prototype.hasOwnProperty
  
  if(Object.keys){
    length = Object.keys(obj).length
     
  } else {

    length = 0
    for(var i in obj) {
      if(hasOwn.call(obj, i)) {
        length ++
      }
    } 
  }

  return length
} 
