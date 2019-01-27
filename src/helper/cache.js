/**
 * 缓存 header
 * Expires, Cache-Control
 * If-Modified-Since / Last-Modified
 * If-None-Match / ETag
 */

const { cache } = require('../config/default-config');

module.exports = function isFresh(stats, req, res) {
    refreshRes(stats, res);

    const reqLastModified = req.headers['if-modified-since'];
    const resLastModified = res.getHeader('Last-Modified');

    if (!reqLastModified) {
        return false;
    } else if (reqLastModified && reqLastModified !== resLastModified) {
        return false;
    }

    return true;
};

function refreshRes(stats, res) {
    const { maxAge, expires, cacheControl, lastModified } = cache;
    if (expires) {
        let age = Date.now() + maxAge * 1000;
        let date = (new Date(age)).toUTCString();
        res.setHeader('Expires', date);
    }

    if (cacheControl) {
        res.setHeader('Cache-Control', `public, max-age=${maxAge}`);
    }

    if (lastModified) {
        res.setHeader('Last-Modified', stats.mtime.toUTCString());
    }
}
