var curry = function(fn) {
    var arity = fn.length;
  
    return function curried(...args) {
      if (args.length >= arity) {
        return fn(...args);
      } else {
        return function(...nextArgs) {
          return curried(...args, ...nextArgs);
        };
      }
    };
  };
  