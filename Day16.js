var throttle = function (fn, t) {
    let blocked = null;
    let cachedArgs = null;
  
    function block() {
      blocked = setTimeout(() => {
        if (cachedArgs) {
          fn(...cachedArgs)
          cachedArgs = null
          block()
        } else {
          blocked = null
        }
      }, t)
    }
  
    return function (...args) {
      if (blocked) {
        cachedArgs = args
      } else {
        fn(...args)
        block()
      }
    }
  };
  