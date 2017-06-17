----------------------------------------------------------------------------------------------------

DEVELOPMENT ENVIRONMENT SETUP

1. Install Required Software:
1.1. Install node.js from http://nodejs.org - Make sure you allow it to be added to your path.
1.2. Install Ruby from http://rubyinstaller.org/ - Make sure you allow it to be added to your path.
1.3. Install git from https://msysgit.github.io/ - Make sure you choose "Use Git from the Windows Command Prompt" so it's in your path.

2. Setup tools globally. From a command line:
2.1. npm install -g gulp  ==> Install gulp globally
2.2. npm install -g bower ==> Install bower globally
2.3. gem install compass  ==> Install Compass (an open-source CSS authoring framework) used for compiling scss

3. Make sure your entire frontend folder and all subdirectories are NOT read-only. 
   * When you get files from perforce they are set to read-only.
   * gulp won't work if the files in frontend folder is readonly
   * Take care / don't forget this when you edit / check in.

4. Setup tools locally. MUST BE DONE FROM IN THE frontend folder!!! 
4.1. npm install gulp --save-dev ==> Install gulp locally
4.2. bower install               ==> Install bower packages to bower_components
4.3. npm install                 ==> Install all modules listed as dependencies in[to] the local node_modules folder

4. "ERR!"
   There may be some "ERR!" at the end of the npm install command. See the end of this file for sample output.
   This is not a problem. If you are able to "RUN THE PROJECT LOCALLY" (see that section below) then everything is good to go!

----------------------------------------------------------------------------------------------------

ghub-ui BROWSER SETUP

1. Make sure you are part of the ghub.uplm.role.ghubitadmin.dev.
2. Install a plugin like "ModHeader" or "Modify Headers for Google Chrome" in chrome.
3. Set the SM_USER to your username (or don't if you are testing security!)

----------------------------------------------------------------------------------------------------

RUN THE PROJECT LOCALLY

This requires running both the Java app and a dev version of frontend via gulp. 
The node server proxy, proxies all /api/* to the local ghub-ui

1. Start ghub-ui Java App. Take note of what port it runs on (usually 8200)

2. In the frontend/gulp folder, the server.js file, make sure that the line
       var proxyOptions = url.parse('http://localhost:8200/api');
   has the proper host and port to match the running Java App.

3. From the frontend folder run: gulp clean serve
3.1 gulp clean ==> this cleans all the tmp, dist folders
3.2 gulp serve ==> this starts a node web server and hosts the static files @ http://localhost:3000/index.html

----------------------------------------------------------------------------------------------------

DEPLOY

To deploy to an environment

1. gulp build ==> builds the front end artifacts, at the end of this process, all the front end artifacts which needs to be deployed on apache will be in "dist" folder.

2. Copy the contents of dist folder contents to ghub-ui/src/main/resources/public

3. Check in to perforce

4. Kick Off release-new-development and select ghub-ui component and environment

----------------------------------------------------------------------------------------------------

"ERR!" sample output

C:\ghub\frontend\node_modules\gulp-sass\node_modules\node-sass>if not defined npm_config_node_gyp (node "C:\Program Files\nodejs\node_modules\npm\bin\node-gyp-bin\\..\..\node_modules\node-gyp\bin\node-gyp.js" rebuild )  else (rebuild)
gyp ERR! configure error
gyp ERR! stack Error: Can't find Python executable "python", you can set the PYTHON env variable.
gyp ERR! stack     at failNoPython (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:103:14)
gyp ERR! stack     at C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:64:11
gyp ERR! stack     at FSReqWrap.oncomplete (evalmachine.<anonymous>:95:15)
gyp ERR! System Windows_NT 6.2.9200
gyp ERR! command "node" "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild"
gyp ERR! cwd C:\ghub\frontend\node_modules\gulp-sass\node_modules\node-sass
gyp ERR! node -v v0.12.4
gyp ERR! node-gyp -v v1.0.3
gyp ERR! not ok
Build failed
npm ERR! Windows_NT 6.2.9200
npm ERR! argv "C:\\Program Files\\nodejs\\\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" "install"
npm ERR! node v0.12.4
npm ERR! npm  v2.10.1
npm ERR! code ELIFECYCLE

npm ERR! node-sass@0.9.6 install: `node build.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-sass@0.9.6 install script 'node build.js'.
npm ERR! This is most likely a problem with the node-sass package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     node build.js
npm ERR! You can get their info via:
npm ERR!     npm owner ls node-sass
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     C:\ghub\frontend\npm-debug.log

----------------------------------------------------------------------------------------------------
