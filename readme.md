# Camarao-editor

This is a desktop app made for programming with [Potigol](https://github.com/potigol/Potigol), the modern programming language for beginners. It's built with [Electron](http://electron.atom.io) API with [ACE](https://github.com/ajaxorg/ace). This app works on Windows, macOS and Linux operating systems.

---

## Using

You'll need [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com/) installed on your computer in order to build this app.

```bash
$ git clone https://github.com/jonaselan/camarao-editor
$ cd camarao-editor
$ npm install
$ npm start
```

For easier developing you can launch the app with DevTools open:

```
$ npm test
```

## TODO

- [x] Highlight for Potigol
- [x] Make the menu for open/save files
- [x] Create tab option*
- [ ] Add icon

 '*' The tabs implementation was done in the branch [tab](https://github.com/jonaselan/camarao-editor/tree/tabs) with [CodeMirror](https://github.com/codemirror/CodeMirror), but in this case it occurred a issue with save/open option. Btw, feel free to fix that :)
