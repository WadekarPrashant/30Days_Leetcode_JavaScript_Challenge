var TimeLimitedCache = function() {
    this.cache = {}; // Object to store key-value pairs
    this.expirations = {}; // Object to store expiration times
  };
  
  TimeLimitedCache.prototype.set = function(key, value, duration) {
    const currentTime = Date.now();
    const expirationTime = currentTime + duration;
  
    if (this.cache.hasOwnProperty(key) && this.expirations[key] > currentTime) {
      // Key already exists and is not expired
      this.cache[key] = value; // Update the value
      this.expirations[key] = expirationTime; // Update the expiration time
      return true;
    } else {
      // Key doesn't exist or is expired
      this.cache[key] = value; // Add or update the value
      this.expirations[key] = expirationTime; // Add or update the expiration time
      return false;
    }
  };
  
  TimeLimitedCache.prototype.get = function(key) {
    const currentTime = Date.now();
    if (this.cache.hasOwnProperty(key) && this.expirations[key] > currentTime) {
      // Key exists and is not expired
      return this.cache[key];
    } else {
      // Key doesn't exist or is expired
      return -1;
    }
  };
  
  TimeLimitedCache.prototype.count = function() {
    const currentTime = Date.now();
    let count = 0;
    for (const key in this.cache) {
      if (this.cache.hasOwnProperty(key) && this.expirations[key] > currentTime) {
        count++;
      }
    }
    return count;
  };
  
  