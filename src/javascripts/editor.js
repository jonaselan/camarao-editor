const {remote, Menu, dialog} = require('electron');
var fs = require('fs');

var currentWindow  = remote.getCurrentWindow();
var JavaScriptMode = ace.require('ace/mode/javascript').Mode;
var editor = ace.edit('editor');

editor.setTheme('ace/theme/twilight');
editor.session.setMode(new JavaScriptMode());
