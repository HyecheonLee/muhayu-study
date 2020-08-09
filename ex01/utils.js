/*function map(data_list, func) {
  const newData = []
  for (let i = 0, len = data_list.length; i < len; i++) {
    newData.push(func(data_list[i], i, data_list))
  }
  return newData
}*/

function getLength(data) {
  return data == null ? 0 : data.length
}

function isArrayLike(data) {
  let length = getLength(data);
  return typeof length == 'number' && length >= 0 && length < Number.MAX_VALUE
}

function map(data, func) {
  const newData = []
  if (isArrayLike(data)) {
    for (let i = 0, len = data.length; i < len; i++) {
      newData.push(func(data[i], i, data))
    }
  } else {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        newData.push(func(data[key], key, data))
      }
    }
  }
  return newData
}

function identity(v) {
  return v
}

const value = function (list) {
  return map(list, identity)
}

function args1(value, key) {
  return key;
}

const keys = function (list) {
  return map(list, args1);
}