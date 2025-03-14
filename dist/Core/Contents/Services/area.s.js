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
exports.AreaServices = void 0;
const Query_1 = require("../../../Global/Config/Query");
const areas_1 = require("../../Entities/areas");
const StoreProcedure_1 = require("../../../Global/Config/StoreProcedure");
class AreaServices {
    constructor() {
        this.area = new Query_1.QueryGlobal(areas_1.areas);
        this.sp = new StoreProcedure_1.StoreProcedure();
    }
    getAllArea(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const all = yield this.area.getAll();
                return res.status(200).json(all);
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ msj: "Error al obtener la lista de formastos" });
            }
        });
    }
    getAreasRevision(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const all = yield this.sp.executeStoredProcedureForList("GetGroupedFormatsByDate", 0);
                return res.status(200).json(all);
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ msj: "Error al obtener la lista de formastos" });
            }
        });
    }
    getAreasRevisionDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_area, id_status } = req.params;
            const { fechaInicio, fechaFin } = req.query;
            try {
                const queryMessage = "CALL GetFormatDetailsByAreaAndDate(?, ?, ?, ?);";
                const paramss = [id_area, id_status, fechaInicio, fechaFin];
                const all = yield this.sp.executeQuery(queryMessage, 1, paramss);
                res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
                res.setHeader("Pragma", "no-cache");
                res.setHeader("Expires", "0");
                res.setHeader("Surrogate-Control", "no-store");
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
exports.AreaServices = AreaServices;
