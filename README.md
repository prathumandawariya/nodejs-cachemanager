nodejs-cachemanager

nodejs-cachemanager is a lightweight JavaScript library for implementing an LRU (Least Recently Used) cache. It provides a simple and efficient way to store key-value pairs with a fixed maximum capacity, automatically discarding the least recently used items when the cache is full.

Features:

1. nodejs-cachemanager uses caching algorithm for efficient storage and retrieval of items.
2. Configurable maximum capacity to limit the number of items stored in the cache.
3. Automatic eviction of least recently used items when the cache is full.
4. Simple and easy-to-use API for interacting with the cache.
5. Support for setting and getting key-value pairs.
6. Efficient cache operations with constant-time complexity.
7. Optional expiration of items based on a specified time-to-live (TTL).


Installation :

You can install nodejs-cachemanager using a package manager like npm or yarn. Run the following command in your project directory:


npm install nodejs-cachemanager
   
          or

yarn add nodejs-cachemanager


Usage :

To use nodejs-cachemanager in your JavaScript file, import it using the import statement or the require function:

import LRU from 'nodejs-cachemanager';
        or
const LRU = require('nodejs-cachemanager');


Example :

const CacheManager = require('nodejs-cachemanager');

CacheManager.setCache('key1', 'value1');

console.log(CacheManager.getCache('key1')); // Output: value1