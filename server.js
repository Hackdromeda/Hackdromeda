const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

var accountData = JSON.stringify(
    [
        {
            "data": "data"
        }
    ]
)

router.get('/', (ctx, next) => {
    
});

router.get('/api/accounts', (ctx, next) => {
    ctx.set('content-type', 'Application/json')
    ctx.body = accountData;
});

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);