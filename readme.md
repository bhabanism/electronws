
# How to configure Election JS and make a simple app!

***

## Install node and npm
> curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs 
 >> https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
 
 > sudo apt-get install -y npm
 
## Init node project

> npm init

~~~JSON
{
  "name": "helloelectron",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "author": "",
  "license": "ISC"
}
~~~


## Install Electron

> **npm install electron --save-dev --verbose**


## Sample Code
~~~Javascript
const electron = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready' , function() {
	new BrowserWindow({width:1024, height:800, backgroundColor:'#2e2c29'}).loadURL('https://google.com');
});
~~~

## Run main.js

> npm start


***

 
## Electron Packager
 
> npm install electron-packager --save-dev
or 
> sudo npm install electron-packager -g

> *Usage* :
	electron-packager < sourcedir > < appname > --platform=<platform> --arch=<arch> [optional flags...]
	
## Build Executable
> With source code : **electron-packager .**
> Without source code : **electron-packager . --asar**
