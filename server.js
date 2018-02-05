const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });
app.use(serve(__dirname));

router.get('/', (ctx, next) => {

});

app.listen(3000);