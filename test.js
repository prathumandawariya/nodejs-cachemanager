const CacheManager = require('./CacheManager');

// Create an LRU cache instance with a maximum size of 3 items
CacheManager.setCache('key1', 'value1');

// Access cached items
console.log(CacheManager.getCache('key1')); // Output: value1