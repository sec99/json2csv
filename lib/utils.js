'use strict';

function getProp(obj, path, defaultValue) {
  return obj[path] === undefined ? defaultValue : obj[path];
}

function setProp(obj, path, value) {
  const pathArray = Array.isArray(path) ? path : path.split('.');
  const key = pathArray[0];
  const newValue = pathArray.length > 1 ? setProp(obj[key] || {}, pathArray.slice(1), value) : value;
  return Object.assign({}, obj, { [key]: newValue });
}

module.exports = {
  getProp,
  setProp
};