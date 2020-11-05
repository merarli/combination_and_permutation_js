const getPermutation = (array, count) => {
  if (!array) {
    throw 'ERROR(getPermutation) An array is required for the first argument.'
  }

  if(!count){
    count = array.length
  }

  let result = []
  const length = array.length
  if (array.length < count) {
    return
  } else if (count === 1) {
    for (let i = 0; i < length; i++) {
      result[i] = [array[i]]
    }
  } else {
    for (let i = 0; i < length; i++) {
      let parts = array.slice(0)
      parts.splice(i, 1)[0]
      let temp = getPermutation(parts, count - 1)
      for (let j = 0; j < temp.length; j++) {
        result.push([array[i]].concat(temp[j]))
      }
    }
  }
  return result
}

function getCombination (array, count) {
  if (!array) {
    throw 'ERROR(getCombination) An array is required for the first argument.'
  }

  if(!count){
    count = array.length
  }

  let result = []
  let length = array.length
  if (length < count) {
    return
  } else if (count === 1) {
    for (let i = 0; i < length; i++) {
      result[i] = [array[i]]
    }
  } else {
    for (let i = 0; i < length - count + 1; i++) {
      let temp = getCombination(array.slice(i + 1), count - 1)
      for (let j = 0; j < temp.length; j++) {
        result.push([array[i]].concat(temp[j]))
      }
    }
  }
  return result
}


exports.getPermutation = getPermutation
exports.getCombination = getCombination
