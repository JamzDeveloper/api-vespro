"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getTransferencia = void 0;
var pool = require("../mysql/database");
var getTransferencia = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, monto_trans, idpersona_trans, idpersona, dni, clave, cuenta, dinero, cuentaResive, personaEnvia, personaResive, fecha, dineroActual, operation;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query, monto_trans = _a.monto_trans, idpersona_trans = _a.idpersona_trans, idpersona = _a.idpersona, dni = _a.dni, clave = _a.clave;
                return [4 /*yield*/, pool.query("SELECT *FROM cuenta where id_persona = " + idpersona)];
            case 1:
                cuenta = _b.sent();
                return [4 /*yield*/, cuenta[0].saldo];
            case 2:
                dinero = _b.sent();
                return [4 /*yield*/, pool.query("SELECT *FROM cuenta where id_persona = " + idpersona_trans)];
            case 3:
                cuentaResive = _b.sent();
                return [4 /*yield*/, pool.query("UPDATE cuenta SET saldo = saldo - " + monto_trans + " WHERE id_persona = " + idpersona)];
            case 4:
                personaEnvia = _b.sent();
                return [4 /*yield*/, pool.query(" UPDATE cuenta SET saldo = saldo + " + monto_trans + " WHERE id_persona = " + idpersona_trans)];
            case 5:
                personaResive = _b.sent();
                fecha = new Date();
                dineroActual = dinero - Number(monto_trans);
                if (!(personaEnvia && personaResive)) return [3 /*break*/, 7];
                return [4 /*yield*/, pool.query("insert into operacion values(" + cuenta[0].id_cuenta + "," + cuentaResive[0].id_cuenta + ",CURRENT_TIMESTAMP," + dinero + "," + dineroActual + "," + idpersona + ")")];
            case 6:
                operation = _b.sent();
                _b.label = 7;
            case 7:
                // const operacion = await pool.query(`select * from  operacion`);
                // console.log(operacion);
                res.json({
                    personaEnvia: personaEnvia,
                    personaResive: personaResive
                });
                return [2 /*return*/];
        }
    });
}); };
exports.getTransferencia = getTransferencia;
//# sourceMappingURL=transferencia.js.map