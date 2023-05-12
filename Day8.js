var once = function(fn) {
    var called = false;
    var result;
  
    return function(...args) {
      if (!called) {
        called = true;
        result = fn(...args);
        return result;
      } else {
        return undefined;
      }
    };
  };
  