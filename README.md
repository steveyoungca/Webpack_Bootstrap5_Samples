# Repo Webpack_Bootstrap5_Samples
This is a Bootstrap and WebPack sample that will be used as a template for data visualizations


Repo: https://github.com/steveyoungca/Webpack_Bootstrap5_Samples.git
Tutorial Source: https://webpack.js.org/guides/getting-started/



# Introduciton and Sources
This is based on the tutorial WebPack 5.0 and BootStrap 5.0 Alpha https://webpack.js.org/guides/getting-started/ 


# Project Log

First, lets set up the basic setup of the CLI

npm init -y
npm install webpack webpack-cli --save-dev


When installing a package that will be bundled into your production bundle, you should use npm install --save. If you're installing a package for development purposes (e.g. a linter, testing libraries, etc.) then you should use npm install --save-dev. More information can be found in the npm documentation.


https://webpack.js.org/guides/getting-started/

npm run build

https://webpack.js.org/guides/asset-management/

https://icons8.com/icons/
https://icons8.com/icons/set/computer

icons8-computer-64.png

Fonts used as part of the assests utorial


Adding in the https://github.com/shellscape/webpack-log
logger 

npm install webpack-log --save-dev

const getLogger = require('webpack-log');
const log = getLogger({ name: 'webpack-batman' });

log.info('Jingle Bells, Batman Smells');
log.warn('Robin laid an egg');
log.error('The Batmobile lost a wheel');
log.debug('And the Joker got away');