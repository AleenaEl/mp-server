const JSONServer = require('json-server')
const MPServer = JSONServer.create()
const route = JSONServer.router("db.json")
const MiddleWare = JSONServer.defaults()


const PORT = 3000 || process.env.PORT 

MPServer.use(MiddleWare)
MPServer.use(route)

MPServer.listen(PORT, () => {
    console.log(`Media-player server started at PORT:${PORT},and  waiting for the client request....`);
})