"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../Models/User"));
class AuthController {
    async login({ request, response, auth }) {
        const email = request.input('email');
        const password = request.input('password');
        console.log(email, password);
        try {
            const user = await User_1.default.findBy('email', email);
            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '30mins',
                name: user?.serialize().email,
            });
            return { token, user };
        }
        catch (err) {
            return response.badRequest({ message: 'Invalid credentials', err: err });
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map