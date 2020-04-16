'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let index = fromIndex;
    const elementExist = -1;

    if (fromIndex === null | fromIndex === undefined) {
      index = 0;
    }

    if (this.length + fromIndex < 0) {
      index = 0;
    } else if (fromIndex < 0) {
      index = this.length + fromIndex;
    }

    for (index; index < this.length - 1; index++) {
      if (this[index] !== undefined
        & isNaN(this[index])
        & isNaN(searchElement)) {
        return index;
      }

      if (this[index] === searchElement) {
        return index;
      }
    }

    return elementExist;
  };
}

module.exports = applyCustomIndexOf;
