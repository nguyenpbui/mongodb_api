const commonManager = require('./commonManager');
// const userManager = require('./userManager');
// const farmManager = require('./farmManager');
// const zoneManager = require('./zoneManager');
// const moduleManager = require('./moduleManager');
// const pondManager = require('./pondManager');

function route(app) {

    app.use('/api', commonManager);
    // app.use('/api/user', userManager);
    // app.use('/api/farm', farmManager);
    // app.use('/api/zone', zoneManager);
    // app.use('/api/module', moduleManager);
    // app.use('/api/pond', pondManager);

}

module.exports = route;
