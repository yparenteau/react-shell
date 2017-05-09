const dts = require('dts-bundle');
const path = require('path');
const rimraf = require('rimraf');
const fs = require('fs');

const defaultOptions ={
  name: 'package',
  mainFolder: 'dist',
  mainFile: 'index.d.ts',
  out: '../index.d.ts',
  removeSource: false,
  removeSourceFolder: false,
  outputAsModuleFolder: true
};

function DtsBundlerWebpackPlugin (options) {
  this.options = Object.assign({}, defaultOptions, options);
  this.options.main = path.join(this.options.mainFolder, this.options.mainFile);
}

DtsBundlerWebpackPlugin.prototype.apply = function (compiler) {
  const self = this;


  compiler.plugin('after-emit', function (compilation, callback) {
    dts.bundle(self.options);

    const inputFolder = path.join(compiler.context, self.options.mainFolder);
    const outputFile = path.join(self.options.mainFolder, self.options.out);

    self.addModuleDeclaration(outputFile, self.options.name, () => {
      if (self.options.removeSourceFolder) {
        return rimraf(inputFolder, callback);
      }

      callback();
    });
  });
};

DtsBundlerWebpackPlugin.prototype.addModuleDeclaration = (file, moduleName, callback) => {
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log('Error reading file', err);
    }

    const output = "declare module '" + moduleName + "'\n{\n" + data + "}";

    fs.writeFile(file, output, 'utf8', function (err) {
      if (err) return console.log('Error writing file', err);
      callback();
    });
  });
}

module.exports = DtsBundlerWebpackPlugin;
