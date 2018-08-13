'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on rogercore-p2p Module {0}'
};

module.exports = require('rogercore-lib').errors.extend(spec);
