'use strict';

const crypto = require('crypto');

/**
 * This file is used to generate random keys that I can then add to .env as the secrets for jwt
 */

const firstKey = crypto.randomBytes(32).toString('hex');
const secondKey = crypto.randomBytes(32).toString('hex');

console.table({firstKey, secondKey});