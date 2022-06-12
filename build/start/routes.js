"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.post('api/login', 'AuthController.login');
Route_1.default.post('api/user/', 'UsersController.store');
Route_1.default.group(() => {
    Route_1.default.get('user', 'UsersController.index');
    Route_1.default.get('user/:id', 'UsersController.show');
    Route_1.default.put('user/:id', 'UsersController.update');
    Route_1.default.delete('user/:id', 'UsersController.delete');
    Route_1.default.get('cripto', 'CriptosController.index');
    Route_1.default.get('cripto/:id', 'CriptosController.show');
    Route_1.default.put('cripto/:id', 'CriptosController.update');
    Route_1.default.post('cripto/', 'CriptosController.store');
    Route_1.default.delete('cripto/:id', 'CriptosController.delete');
}).prefix('api').middleware('auth');
Route_1.default.group(() => {
    Route_1.default.get('user', 'UsersController.index');
    Route_1.default.get('user/:id', 'UsersController.show');
    Route_1.default.put('user/:id', 'UsersController.update');
    Route_1.default.post('user/', 'UsersController.store');
    Route_1.default.delete('user/:id', 'UsersController.delete');
    Route_1.default.get('cripto', 'CriptosController.index');
    Route_1.default.get('cripto/:id', 'CriptosController.show');
    Route_1.default.put('cripto/:id', 'CriptosController.update');
    Route_1.default.post('cripto/', 'CriptosController.store');
    Route_1.default.delete('cripto/:id', 'CriptosController.delete');
}).prefix('test');
//# sourceMappingURL=routes.js.map