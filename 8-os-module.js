const os = require('os'); // does not need path since the module is built in

// info about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMem: os.freemem(),        
}

console.log(currentOS)