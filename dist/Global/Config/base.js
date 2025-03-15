"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controllers = void 0;
const users_ctrl_1 = require("../../Core/Controllers/users.ctrl.js");
const formats_ctrl_1 = require("../../Core/Controllers/formats.ctrl.js");
const area_ctrl_1 = require("../../Core/Controllers/area.ctrl.js");
const turno_ctrl_1 = require("../../Core/Controllers/turno.ctrl.js");
const reports_ctrl_1 = require("../../Core/Controllers/reports.ctrl.js");
exports.Controllers = { UsersControllers: users_ctrl_1.UsersControllers, FormatsControllers: formats_ctrl_1.FormatsControllers, AreaControllers: area_ctrl_1.AreaControllers, TurnoControllers: turno_ctrl_1.TurnoControllers, ReportsControllers: reports_ctrl_1.ReportsControllers };
