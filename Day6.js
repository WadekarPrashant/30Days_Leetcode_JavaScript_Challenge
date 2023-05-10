var reduce = function(nums, fn, init) {
    if (nums.length === 0) {
      return init;
    }
  
    var result = init;
    for (var i = 0; i < nums.length; i++) {
      result = fn(result, nums[i]);
    }
    return result;
  };
  