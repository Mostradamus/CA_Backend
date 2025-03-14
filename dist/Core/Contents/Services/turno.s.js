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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnoServices = void 0;
const Query_1 = require("../../../Global/Config/Query");
const turn_1 = require("../../Entities/turn");
class TurnoServices {
    constructor() {
        this.turno = new Query_1.QueryGlobal(turn_1.turn);
    }
    getAllTurno(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const all = yield this.turno.getAll();
                return res.status(200).json(all);
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ msj: "Error al obtener la lista de formastos" });
            }
        });
    }
}
exports.TurnoServices = TurnoServices;
