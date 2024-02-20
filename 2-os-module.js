const a=require('os')
const info={
    name:a.uptime(),
    total_memory: a.totalmem(),
    free_memory:a.freemem(),
    release:a.release()
}
console.log(info)
