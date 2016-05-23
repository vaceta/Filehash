!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _filehash=__webpack_require__(1),_filehash2=_interopRequireDefault(_filehash);window.Filehash=_filehash2["default"]},function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Filehash=function(){function Filehash(){_classCallCheck(this,Filehash)}return _createClass(Filehash,null,[{key:"compare",value:function(file,hash,algorithm){return new Promise(function(resolve,reject){Filehash.hash(file,algorithm).then(function(genHash){resolve(genHash===hash?!0:!1)})})}},{key:"hash",value:function(file,algorithm){function convertArrayBufferToHexaDecimal(buffer){var iii,len,c,data_view=new DataView(buffer),hex="";for(iii=0,len=data_view.byteLength;len>iii;iii+=1)c=data_view.getUint8(iii).toString(16),c.length<2&&(c="0"+c),hex+=c;return hex}function crypt(file,algorithm){return new Promise(function(resolve,reject){window.crypto.subtle.digest({name:algorithm},file).then(function(hash){resolve(convertArrayBufferToHexaDecimal(hash))},function(e){reject(Error(e))})})}return algorithm=algorithm||"SHA-256",new Promise(function(resolve,reject){window.crypto||reject(Error("your Browser does not support client-side cryptography")),file instanceof ArrayBuffer&&resolve(crypt(file,algorithm));var reader=new FileReader;reader.readAsArrayBuffer(file),reader.onload=function(e){resolve(crypt(e.target.result,algorithm))},reader.onerror=function(e){reject(Error(e))}})}}]),Filehash}();exports["default"]=Filehash}]);