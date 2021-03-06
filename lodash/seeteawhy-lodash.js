var seeteawhy = function () {
  //-----------------------数组-------------------------




  //创建一个新数组，包含原数组中所有的非假值元素：遍历老数组，push新数组真值
  function compact(ary) {
    let newArray = []
    for (let i = 0; i < ary.length; i++){
      if (ary[i]) {
        newArray.push(ary[i])
      }
    }
    return newArray;
  }

  function difference(array) { //get same items from other arguments, then kill them
    let l = arguments.length
    let comparison = []
    for (let i = 1; i < l; i++){
      arguments[i].forEach(item => {
        if (array.indexOf(item) >= 0) {
          comparison.push(item)
        }
      })    
    }
    let result = []
    array.forEach(item => {
      if (comparison.indexOf(item) < 0) {
        result.push(item)
      }
    })
    return result
  }

  //先处理边缘情况，再用slice切
  function drop(array, n = 1) { 
    if (n < 0) n = 0
    let length = array == null ? 0 : array.length
    if (length < n || length < 1) return []
    let result = array.slice(n)
    return result
  }

  //先处理边缘情况，再用slice从后往前切
  function dropRight(array, n = 1) {
    if (n < 0) n = 0
    let length = array == null ? 0 : array.length
    if (length < n || length < 1) return []
    let result = array.slice(0, length - n)
    return result
  }


  //遍历start到end，令数组元素为value
  function fill(array, value, start = 0, end = array.length) {
    const length = array == null ? 0 : array.length
    if (start < 0) {
      start = 0
    }
    if (end > length) {
      end = length
    }
    if (length < 1 || end < start) return []
    for (let i = start; i < end; i++){
      array[i] = value
    }
    return array
  }
  

  //遍历最外层数组，找出2层及以上的元素，将外层元素和展开数组后的元素push到新数组
  function flatten(array) {
    let result = []
    for (let i = 0; i < array.length; i++){
      if (typeof (array[i]) == 'number') {
        result.push(array[i])
      } else { //suppose they are objects
        for (let j = 0; j < array[i].length; j++){
          result.push(array[i][j])
        }
      }
    }
    return result
  }

  function flattenDeep(array) {
    let result = []
    function reFlatten(array) {
      if (!Array.isArray(array)) {
        return array
      } 
      array.forEach(function (elem) {
        if (Array.isArray(elem)) {
          reFlatten(elem)
        } else {
          result.push(elem)
        }
      })
      } 
      reFlatten(array)
    return result
  }
  
  function flattenDepth(array, depth = 1) {
    let result = []
    
    function reFlatten(array) {
      if (!Array.isArray(array)) {
        return array
      } 
      array.forEach(function (elem) {
        if (Array.isArray(elem) && depth) {
          depth--
          reFlatten(elem)
        } else {
          result.push(elem)
        }
      })
      } 
      reFlatten(array)
    return result
  }

  //遍历数组，把每个键值对加到新建到对象，返回对象
  function fromPairs(array) {
    let newobj = {}
    for (let i = 0; i < array.length; i++){
      newobj[array[i][0]] = array[i][1]
    }
    return newobj
  }

  //get first element in array
  function head(array) {

      return array[0]

  }

  function indexOf(array, value, fromidx = 0) {//Js
    for (let i = fromidx; i < array.length; i++){
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }

  //delete the last element of the array
  function initial(array) {
    array.length -= 1
    return array
  }

  function join(array, separator = ',') {//Js
    let resultString = ''
    for (let i = 0; i < array.length-1; i++){
      resultString += array[i]+''+separator //string
    }
    resultString += array[array.length-1]
    return resultString
  }

  function last(array) {
    return (array[array.length - 1])
  }

  function lastIndexOf(array, value, fromidx = array.length-1) {//Js
    for (let i = fromidx; i > 0; i--){
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }

  function nth(array, n = 0) {
    if (n < 0) {
      n = array.length + n
    }
    return array[n]
  }

  function pull(array) {//splice from end to start
    let l = arguments.length
    for (let i = 1; i < l; i++){
      for (let j = array.length - 1; j >= 0; j--){
        if (array[j] === arguments[i]) {
          array.splice(j,1)
        }
      }
      
    }
    return array
  }

  function reverse(array) {
    var temp = 0
    var j = array.length -1
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      temp = array[i]
      array[i] = array[j]
      array[j--] = temp  
    }
    return array
  }

  function sortedIndex(array, value) {//binary search
    let left = 0
    let right = array.length - 1
    while (left <= right ) {
      var mid = (right + left) >> 1
      if (array[mid] >= value) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return left
  }
  function union(...array) {

    return Array.from(new Set([].concat(...array)))
  }

  function uniq(array) {
    return Array.from(new Set(array))
  }

  //return the first arguments
  function identity(...value) {
    return arguments[0]
  }

  function concat(array) {//push the flatten array / num directly to the new array
    let l = arguments.length
    let result = []
    for (let i = 0; i < l; i++){
      if (Array.isArray(arguments[i])) {
        arguments[i].forEach((item) => {
        result.push(item)
        })        
      } else {
        result.push(arguments[i])
      }
    }
    return result
  }

  function isArray(value) {
    return Object.prototype.toString.call(value) ==='[object Array]'
  }

  //获取对象路径处的值, 如果解析未定义, 就返回默认值
  function get(object, path, defaultValue = 'undefined') {
    let names = path.split('.')
    for (let name of names) {
      if (name in Object(object)) {
        object = object[name]
      } else {
        return defaultValue
      }
    }
    return object
  }

  //创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。
  function dropRightWhile(ary, predicate) {
    
    var result = ary
    var f = iteratee(predicate)
    for (var i = result.length - 1; i >= 0; i--) {
        if (!f(result[i])) {
            break
        } 
    }
    return result.slice(0,i+1)
  }

  //创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。
  function dropWhile(ary, predicate) {
    let result = ary
    predicate = iteratee(predicate)
    for (var i = 0; i < ary.length; i++){
      if (!predicate(result[i])) {
        break
      }
    }
    return result.slice(i, ary.length)
  }

  //返回第一个通过 predicate 判断为真值的元素的索引值
  function findIndex(array, predicate, fromIndex = 0) {
    let fidx = iteratee(predicate)
    for (var i = fromIndex; i < array.length; i++){
      if (fidx(array[i])) {
        break
      }
    }
    return i
  }

  function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    let flidx = iteratee(predicate)
    for (var i = fromIndex; i >= 0; i--){
      if (flidx(array[i])) {
        break
      }
    }
    return i
  }

  //选出最短的数组，和其他数组比
  function intersection(...arrays) {
    let result = []
    let comparison = arrays.shift()
    var flag = 1
    comparison.filter(function (item, index) {
      for (var arr of arrays) {
        if (!arr.includes(item)) {
          flag = -1
        }
      }
      if (flag === 1) {
        result.push(item)
      }
      
      })
    return result
  }
  



  //---------------------------self use -----------------------
  //创建一个返回给定对象的 path 的值的函数。
  //path (Array|string): 要得到值的属性路径。
  function property(path) {
    return function (obj) {
      var value = Object.assign({},obj)
      if (typeof path === 'string') {
        let ary = path.split('.')
        for (let i of ary) {
          value = value[i]
        }
      } else {
        for (let i of path) {
          value = value[i]
        }
      }
      return value
    }
  }


  function isMatch(obj,src) {
    for (let key in src) {
      if (src[key] && typeof src[key] === 'object') {
        if (!isMatch(obj[key], src[key])) {
          return false
        }
      } else {
        if (src[key] !== obj[key]) {
          return false
        }
      }
      
    }
    return true
  }

  function matches(source) {
    return function (obj) {
      for (let key of Object.keys(source)) {
        if (source[key] != obj[key]) {
          return false
        }
      }
      return true
    }
  }
  /**
   * 创建一个函数，判断给定对象属性是否与传入的参数相同，相同返回true，不同返回false
   * @param {Array|string} path 待获取的属性名
   * @param {*} srcValue 待比较的属性值
   * @returns {Function}
   */

  function matchesProperty(path, srcValue) {
    if (Array.isArray(path)) {
      srcValue = path[1];
      path = path[0];
    }
    return (obj) => {
      return obj[path] == srcValue;
    };
  }

  function iteratee(predicate) {
    if (typeof predicate === 'function') {
      return predicate
    }
    if (typeof predicate === 'string') {
      return property(predicate)
    }
    if (Array.isArray(predicate)) {
      return matchesProperty(predicate)
    }
    if (predicate instanceof Object) {
      return matches(predicate)
    }
  }
  //将原数组截成length/size段，slice进新数组
  function chunk(array, size) {
    const length = array == null ? 0 : array.length
    
    if (!length || size < 1) {
      return []
    }
    let index = 0
    let resIndex = 0
    const result = new Array(Math.ceil(length / size))
    while (index < length) {
      result[resIndex++] = array.slice(index,(index += size)) 
    }
    return result
  }
  //遍历数组，把每个键值对加到新建到对象，返回对象
  function fromPairs(array) {
    let newobj = {}
    for (let i = 0; i < array.length; i++){
      newobj[array[i][0]] = array[i][1]
    }
    return newobj
  }



  //---------------------------------math-----------------------------------
  function max(array) {
    if (array.length === 0) return undefined
    let maxn = -Infinity
    for (let i = 0; i < array.length; i++){
      if (array[i] > maxn) {
        maxn = array[i]
      }
    }
    return maxn
  }

  function min(array) {
    if (array.length === 0) return undefined
    let min = Infinity
    for (let i = 0; i < array.length; i++){
      if (array[i] < min) {
        min = array[i]
      }
    }
    return min
  }   

  function sum(array) {
    let result = []
    result = array.reduce((pre, cur) => {
      return pre + cur
    })
    return result
  }
 








  

  //返回对象
  return {
    compact,
    chunk,
    difference,
    drop,
    dropRight,
    fill,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    join,
    last,
    lastIndexOf,
    nth,
    pull,
    reverse,
    sortedIndex,
    union,
    uniq,
    identity,
    concat,
    property,
    max,
    min,
    sum,
    isMatch,
    matches,
    matchesProperty,
    iteratee,
    get,
    dropRightWhile,
    dropWhile,
    findIndex,
    findLastIndex,
    intersection,
    isArray

  }
}()