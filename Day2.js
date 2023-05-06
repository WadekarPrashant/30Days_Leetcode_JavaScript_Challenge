var createCounter = function(n) {
    let counter = n;
  
    return function() {
      const currentCounter = counter;
      counter += 1;
      return currentCounter;
    };
  };
  