const spawn = require('cross-spawn');

spawn.sync('node', ['src'], {stdio: 'inherit'});