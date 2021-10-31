const fs = require('fs')
const path = require("path");
module.exports = {
    // options...

    devServer: {
        disableHostCheck: true,
        // https: {
        //     key: fs.readFileSync(path.join(__dirname, 'data/cert/prv_www.inclutter.com.key')),
        //     cert: fs.readFileSync(path.join(__dirname, 'data/cert/cert_www.inclutter.com.crt')),
        //     ca: fs.readFileSync(path.join(__dirname, 'data/cert/rootca_www.inclutter.com.crt')),
        //     csr: fs.readFileSync(path.join(__dirname, 'data/cert/csr_www.inclutter.com.txt')),
        //     subcal: fs.readFileSync(path.join(__dirname, 'data/cert/subca1_www.inclutter.com.crt')),
        // },
        https: true,
        host: 'inclutter.com',
    }
};