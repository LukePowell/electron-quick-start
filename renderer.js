// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {dialog} = require('electron').remote
const {BrowserWindow} = require('electron').remote

exports.error = function(){
  dialog.showErrorBox('This should be modal', 'Works on macOS but not Windows.');
}

exports.errorShowMessageBox = function(){
  dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
    type: 'error',
    message: 'This should also be modal'
  });
}
