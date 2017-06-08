
const electron = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready' , function(){
	new BrowserWindow({width:1024, height:800, backgroundColor:'#2e2c29'}).loadURL('https://google.com');
});
