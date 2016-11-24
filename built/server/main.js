"use strict";
const koa = require("koa");
const config = require("../config");
const staticCache = require("koa-static-cache");
const html_1 = require("../client/html");
const app = new koa();
const isProduction = process.argv[2] === '--production';
const Router = require("koa-router");
const router = new Router();
const builtStaticPath = isProduction ? 'built-production/static' : 'built/output/static';
app.use(staticCache(`${builtStaticPath}`, {
    prefix: '/static',
    maxAge: 365 * 24 * 60 * 60,
    buffer: true,
    gzip: true,
    usePrecompiledGzip: true
}));
app.on('error', (err) => {
    if (err) {
        console.log('error:', err);
    }
});
process.on('uncaughtException', (err) => {
    if (err) {
        console.log('error:', err);
    }
});
router.get('*', function* () {
    this.type = 'text/html; charset=utf-8';
    this.body = html_1.default;
});
app.use(router.routes());
module.exports = app.listen(config.localPort);
//# sourceMappingURL=main.js.map