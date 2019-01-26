const fs = require('fs');
const promisify = require('util').promisify;
const fs_stat = promisify(fs.stat);
const fs_readdir = promisify(fs.readdir);

module.exports = async function (req, res, filePath) {
    try {
        const stats = await fs_stat(filePath);
        if (stats.isFile()) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            fs.createReadStream(filePath).pipe(res);
        } else if (stats.isDirectory()) {
            const files = await fs_readdir(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(files.join('\n'));
        }
    } catch (ex) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`${filePath} is not a directory or file`);
    }
};
