"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
function RegisterRoutes(app, controllers) {
    // Itera sobre cada controlador
    controllers.forEach((controller) => {
        const instace = new controller(); // Crea una instancia del controlador
        const routes = instace.routes || []; // Obtiene las rutas definidas
        // Registra cada ruta en la aplicación
        routes.forEach((route) => {
            // Registra la ruta con el prefijo '/api/v1' y vincula el manejador a la instancia
            app[route.method](`/api/v1${route.path}`, route.handler.bind(instace));
        });
    });
}
