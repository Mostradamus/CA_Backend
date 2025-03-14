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
exports.ReportsServices = void 0;
const Query_1 = require("../../../Global/Config/Query");
const comparisonResult_1 = require("../../Entities/comparisonResult");
const comparisonResultDetails_1 = require("../../Entities/comparisonResultDetails");
const StoreProcedure_1 = require("../../../Global/Config/StoreProcedure");
class ReportsServices {
    constructor() {
        this.comparison = new Query_1.QueryGlobal(comparisonResult_1.ComparisonResult);
        this.sp = new StoreProcedure_1.StoreProcedure();
        this.comparisonDetail = new Query_1.QueryGlobal(comparisonResultDetails_1.ComparisonResultDetails);
    }
    getReports(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const all = yield this.comparison.getAll();
                return res.status(200).json(all);
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ msj: "Error al obtener la lista de formastos" });
            }
        });
    }
    getReportID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_comparison } = req.params;
            try {
                // const all = await this.comparisonDetail.getByField('id_comparison', id_comparison);
                const getall = yield this.comparisonDetail.selectQuery("SELECT * FROM comparison_result_details WHERE id_comparison = ? and id_status =2 ", [id_comparison]);
                return res.status(200).json(getall);
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ msj: "Error al obtener la lista de formastos" });
            }
        });
    }
    getTotalStatusAreaCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_status } = req.params;
            console.log(id_status);
            try {
                // const all = await this.comparisonDetail.getByField('id_comparison', id_comparison);
                const result = yield this.sp.executeStoredProcedureForList("GetAreaCountByStatus", 0, [id_status]);
                console.log(result);
                return res.status(200).json(result);
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ msj: "Error al obtener la lista de formastos" });
            }
        });
    }
}
exports.ReportsServices = ReportsServices;
