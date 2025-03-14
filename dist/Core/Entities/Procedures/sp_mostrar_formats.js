"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sp_message_comparison = exports.GetAreaCountByStatus = exports.sp_ObtenerTotalFormatos = exports.getTotalByArea = exports.verificar_formats_model = exports.GetFormatDetailsByAreaAndDate = exports.GetGroupedFormatsByDate = exports.sp_verificar_registro = exports.sp_mostrar_formats = void 0;
class sp_mostrar_formats {
    constructor() {
        this.id = 0;
        this.estado = 0;
        this.total = 0;
        this.area = '';
        this.nrformatos = '';
        this.nroInicio = '';
        this.nrFinal = '';
        this.turno = '';
        this.description = '';
        this.fecha_registro = '';
    }
}
exports.sp_mostrar_formats = sp_mostrar_formats;
class sp_verificar_registro {
    constructor() {
        this.estado = 0;
    }
}
exports.sp_verificar_registro = sp_verificar_registro;
class GetGroupedFormatsByDate {
    constructor() {
        this.name = '';
        this.id_areas = 0;
    }
}
exports.GetGroupedFormatsByDate = GetGroupedFormatsByDate;
class GetFormatDetailsByAreaAndDate {
    constructor() {
        this.formats_models = '';
        this.formatos = '';
        this.estado = '';
        this.id_area = 0;
        this.id_formats_details = 0;
        this.status = 0;
    }
}
exports.GetFormatDetailsByAreaAndDate = GetFormatDetailsByAreaAndDate;
class verificar_formats_model {
    constructor() {
        this.formats_model = '';
    }
}
exports.verificar_formats_model = verificar_formats_model;
class getTotalByArea {
    constructor() {
        this.name = '';
        this.totales = 0;
    }
}
exports.getTotalByArea = getTotalByArea;
class sp_ObtenerTotalFormatos {
    constructor() {
        this.total = 0;
    }
}
exports.sp_ObtenerTotalFormatos = sp_ObtenerTotalFormatos;
class GetAreaCountByStatus {
    constructor() {
        this.nombre = '';
        this.contador = 0;
    }
}
exports.GetAreaCountByStatus = GetAreaCountByStatus;
class sp_message_comparison {
    constructor() {
        this.mensaje = '';
        this.total = 0;
        this.tipo = '';
    }
}
exports.sp_message_comparison = sp_message_comparison;
