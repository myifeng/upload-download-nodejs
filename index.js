const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();

const appendix = require('./routers/appendix')

app
    .use(appendix.routes())
    .use(router.allowedMethods());

app.listen(3000);