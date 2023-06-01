var compose = function(functions) {
    return function(x) {
      if (functions.length === 0) {
        return x;
      }
  
      var result = x;
      for (var i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
      }
      return result;
    };
  };
  