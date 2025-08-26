const os = require('os');

const user = os.userInfo();
console.log(user);

console.log(`The computer has been running for ${os.uptime()} secondns`);

const os_details = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
};

console.log(os_details);