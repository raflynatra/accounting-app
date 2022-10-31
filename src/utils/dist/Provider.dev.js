"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArusKasPDFByDate = exports.getArusKasPDF = exports.getArusKasByDate = exports.getAllArusKas = exports.getNeracaSaldoPDFByDate = exports.getNeracaSaldoPDF = exports.getNeracaSaldoByDate = exports.getAllNeracaSaldo = exports.deleteJurnal = exports.updateJurnal = exports.createJurnal = exports.getJurnalPDFByDate = exports.getJurnalPDFByKodePerkiraan = exports.getJurnalPDF = exports.getJurnalByDate = exports.getJurnalByKodePerkiraan = exports.getAllJurnal = exports.deletePerkiraan = exports.updatePerkiraan = exports.createPerkiraan = exports.getPerkiraanById = exports.getAllPerkiraan = void 0;

var _Helper = require("./Helper");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  headers: {
    "Access-Control-Allow-Origin": true,
    "Content-Type": "application/json",
    authorization: localStorage.getItem("token")
  }
};

var getAllPerkiraan = function getAllPerkiraan() {
  var response;
  return regeneratorRuntime.async(function getAllPerkiraan$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_Helper.BASE_URL, "/perkiraan"), config));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllPerkiraan = getAllPerkiraan;

var getPerkiraanById = function getPerkiraanById(id) {
  var response;
  return regeneratorRuntime.async(function getPerkiraanById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_Helper.BASE_URL, "/perkiraan/").concat(id)));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getPerkiraanById = getPerkiraanById;

var createPerkiraan = function createPerkiraan(data) {
  var response;
  return regeneratorRuntime.async(function createPerkiraan$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(_Helper.BASE_URL, "/perkiraan"), data));

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.createPerkiraan = createPerkiraan;

var updatePerkiraan = function updatePerkiraan(id) {
  var response;
  return regeneratorRuntime.async(function updatePerkiraan$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].put("".concat(_Helper.BASE_URL, "/perkiraan/").concat(id)));

        case 3:
          response = _context4.sent;
          return _context4.abrupt("return", response.data);

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.updatePerkiraan = updatePerkiraan;

var deletePerkiraan = function deletePerkiraan(id) {
  var response;
  return regeneratorRuntime.async(function deletePerkiraan$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(_Helper.BASE_URL, "/perkiraan/").concat(id)));

        case 3:
          response = _context5.sent;
          return _context5.abrupt("return", response.data);

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.deletePerkiraan = deletePerkiraan;

var getAllJurnal = function getAllJurnal() {
  var response;
  return regeneratorRuntime.async(function getAllJurnal$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_Helper.BASE_URL, "/jurnal"), config));

        case 3:
          response = _context6.sent;
          return _context6.abrupt("return", response.data);

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", _context6.t0.response.data);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllJurnal = getAllJurnal;

var getJurnalByKodePerkiraan = function getJurnalByKodePerkiraan(kodePerkiraan) {
  var response;
  return regeneratorRuntime.async(function getJurnalByKodePerkiraan$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_Helper.BASE_URL, "/jurnal/").concat(kodePerkiraan), config));

        case 3:
          response = _context7.sent;
          return _context7.abrupt("return", response.data);

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", _context7.t0.response.data);

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getJurnalByKodePerkiraan = getJurnalByKodePerkiraan;

var getJurnalByDate = function getJurnalByDate(date) {
  var response;
  return regeneratorRuntime.async(function getJurnalByDate$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_Helper.BASE_URL, "/jurnal/search/").concat(date), config));

        case 3:
          response = _context8.sent;
          return _context8.abrupt("return", response.data);

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", _context8.t0.response.data);

        case 10:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getJurnalByDate = getJurnalByDate;

var getJurnalPDF = function getJurnalPDF() {
  var response;
  return regeneratorRuntime.async(function getJurnalPDF$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return regeneratorRuntime.awrap((0, _axios["default"])({
            url: "".concat(_Helper.BASE_URL, "/laporan/jurnal"),
            method: "GET",
            responseType: "blob",
            // important
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }));

        case 3:
          response = _context9.sent;
          return _context9.abrupt("return", response);

        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", _context9.t0.response);

        case 10:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getJurnalPDF = getJurnalPDF;

var getJurnalPDFByKodePerkiraan = function getJurnalPDFByKodePerkiraan(kodePerkiraan) {
  var response;
  return regeneratorRuntime.async(function getJurnalPDFByKodePerkiraan$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return regeneratorRuntime.awrap((0, _axios["default"])({
            url: "".concat(_Helper.BASE_URL, "/laporan/jurnal/perkiraan/").concat(kodePerkiraan),
            method: "GET",
            responseType: "blob",
            // important
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }));

        case 3:
          response = _context10.sent;
          return _context10.abrupt("return", response);

        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", _context10.t0.response);

        case 10:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getJurnalPDFByKodePerkiraan = getJurnalPDFByKodePerkiraan;

var getJurnalPDFByDate = function getJurnalPDFByDate(date) {
  var response;
  return regeneratorRuntime.async(function getJurnalPDFByDate$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return regeneratorRuntime.awrap((0, _axios["default"])({
            url: "".concat(_Helper.BASE_URL, "/laporan/jurnal/").concat(date),
            method: "GET",
            responseType: "blob",
            // important
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }));

        case 3:
          response = _context11.sent;
          return _context11.abrupt("return", response);

        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          return _context11.abrupt("return", _context11.t0.response);

        case 10:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getJurnalPDFByDate = getJurnalPDFByDate;

var createJurnal = function createJurnal(data) {
  var response;
  return regeneratorRuntime.async(function createJurnal$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(_Helper.BASE_URL, "/jurnal"), data, config));

        case 3:
          response = _context12.sent;
          return _context12.abrupt("return", response.data);

        case 7:
          _context12.prev = 7;
          _context12.t0 = _context12["catch"](0);
          console.log(_context12.t0);

        case 10:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.createJurnal = createJurnal;

var updateJurnal = function updateJurnal(payload) {
  var _id, response;

  return regeneratorRuntime.async(function updateJurnal$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _id = payload._id;
          _context13.prev = 1;
          _context13.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].put("".concat(_Helper.BASE_URL, "/jurnal/").concat(_id), payload, config));

        case 4:
          response = _context13.sent;
          return _context13.abrupt("return", response.data);

        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](1);
          console.log(_context13.t0);

        case 11:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.updateJurnal = updateJurnal;

var deleteJurnal = function deleteJurnal(id) {
  var response;
  return regeneratorRuntime.async(function deleteJurnal$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(_Helper.BASE_URL, "/jurnal/delete/").concat(id), config));

        case 3:
          response = _context14.sent;
          return _context14.abrupt("return", response.data);

        case 7:
          _context14.prev = 7;
          _context14.t0 = _context14["catch"](0);
          console.log(_context14.t0);

        case 10:
        case "end":
          return _context14.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.deleteJurnal = deleteJurnal;

var getAllNeracaSaldo = function getAllNeracaSaldo() {
  var response;
  return regeneratorRuntime.async(function getAllNeracaSaldo$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_Helper.BASE_URL, "/neracasaldo"), config));

        case 3:
          response = _context15.sent;
          return _context15.abrupt("return", response.data);

        case 7:
          _context15.prev = 7;
          _context15.t0 = _context15["catch"](0);
          return _context15.abrupt("return", _context15.t0.response.data);

        case 10:
        case "end":
          return _context15.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllNeracaSaldo = getAllNeracaSaldo;

var getNeracaSaldoByDate = function getNeracaSaldoByDate(date) {
  var response;
  return regeneratorRuntime.async(function getNeracaSaldoByDate$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_Helper.BASE_URL, "/neracasaldo/search/").concat(date), config));

        case 3:
          response = _context16.sent;
          return _context16.abrupt("return", response.data);

        case 7:
          _context16.prev = 7;
          _context16.t0 = _context16["catch"](0);
          return _context16.abrupt("return", _context16.t0.response.data);

        case 10:
        case "end":
          return _context16.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getNeracaSaldoByDate = getNeracaSaldoByDate;

var getNeracaSaldoPDF = function getNeracaSaldoPDF() {
  var response;
  return regeneratorRuntime.async(function getNeracaSaldoPDF$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return regeneratorRuntime.awrap((0, _axios["default"])({
            url: "".concat(_Helper.BASE_URL, "/laporan/neracasaldo"),
            method: "GET",
            responseType: "blob",
            // important
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }));

        case 3:
          response = _context17.sent;
          return _context17.abrupt("return", response);

        case 7:
          _context17.prev = 7;
          _context17.t0 = _context17["catch"](0);
          return _context17.abrupt("return", _context17.t0.response);

        case 10:
        case "end":
          return _context17.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getNeracaSaldoPDF = getNeracaSaldoPDF;

var getNeracaSaldoPDFByDate = function getNeracaSaldoPDFByDate(date) {
  var response;
  return regeneratorRuntime.async(function getNeracaSaldoPDFByDate$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return regeneratorRuntime.awrap((0, _axios["default"])({
            url: "".concat(_Helper.BASE_URL, "/laporan/neracasaldo/").concat(date),
            method: "GET",
            responseType: "blob",
            // important
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }));

        case 3:
          response = _context18.sent;
          return _context18.abrupt("return", response);

        case 7:
          _context18.prev = 7;
          _context18.t0 = _context18["catch"](0);
          return _context18.abrupt("return", _context18.t0.response);

        case 10:
        case "end":
          return _context18.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getNeracaSaldoPDFByDate = getNeracaSaldoPDFByDate;

var getAllArusKas = function getAllArusKas() {
  var response;
  return regeneratorRuntime.async(function getAllArusKas$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_Helper.BASE_URL, "/aruskas"), config));

        case 3:
          response = _context19.sent;
          return _context19.abrupt("return", response.data);

        case 7:
          _context19.prev = 7;
          _context19.t0 = _context19["catch"](0);
          return _context19.abrupt("return", _context19.t0.response.data);

        case 10:
        case "end":
          return _context19.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllArusKas = getAllArusKas;

var getArusKasByDate = function getArusKasByDate(date) {
  var response;
  return regeneratorRuntime.async(function getArusKasByDate$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          _context20.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_Helper.BASE_URL, "/aruskas/search/").concat(date), config));

        case 3:
          response = _context20.sent;
          return _context20.abrupt("return", response.data);

        case 7:
          _context20.prev = 7;
          _context20.t0 = _context20["catch"](0);
          return _context20.abrupt("return", _context20.t0.response.data);

        case 10:
        case "end":
          return _context20.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getArusKasByDate = getArusKasByDate;

var getArusKasPDF = function getArusKasPDF() {
  var response;
  return regeneratorRuntime.async(function getArusKasPDF$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return regeneratorRuntime.awrap((0, _axios["default"])({
            url: "".concat(_Helper.BASE_URL, "/laporan/aruskas"),
            method: "GET",
            responseType: "blob",
            // important
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }));

        case 3:
          response = _context21.sent;
          return _context21.abrupt("return", response);

        case 7:
          _context21.prev = 7;
          _context21.t0 = _context21["catch"](0);
          return _context21.abrupt("return", _context21.t0.response);

        case 10:
        case "end":
          return _context21.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getArusKasPDF = getArusKasPDF;

var getArusKasPDFByDate = function getArusKasPDFByDate(date) {
  var response;
  return regeneratorRuntime.async(function getArusKasPDFByDate$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _context22.next = 3;
          return regeneratorRuntime.awrap((0, _axios["default"])({
            url: "".concat(_Helper.BASE_URL, "/laporan/aruskas/").concat(date),
            method: "GET",
            responseType: "blob",
            // important
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }));

        case 3:
          response = _context22.sent;
          return _context22.abrupt("return", response);

        case 7:
          _context22.prev = 7;
          _context22.t0 = _context22["catch"](0);
          return _context22.abrupt("return", _context22.t0.response);

        case 10:
        case "end":
          return _context22.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getArusKasPDFByDate = getArusKasPDFByDate;