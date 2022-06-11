"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../Models/User"));
class UsersController {
    async index({ response }) {
        try {
            console.log("Controller User - Método Index");
            const users = await User_1.default.all();
            response.status(200).send({ message: "Retornando acesso ao user", data: users });
        }
        catch (err) {
            response.status(200).send({ message: "Algo deu errado!", error: err });
        }
    }
    async show({ response, request }) {
        try {
            console.log("Controller User - Método Show");
            const paramters = request.params();
            console.log('params', paramters);
            const criptos = await User_1.default.query().where('id', paramters.id);
            response.status(200).send({ message: "Retornando todas as informações desse Usuário", data: criptos });
        }
        catch (err) {
            response.status(200).send({ message: "Algo deu errado!" + err });
        }
    }
    async update({ request, response }) {
        try {
            console.log("Controller User - Método Update");
            const data = request.body();
            const params = request.params();
            console.log("data", data);
            await User_1.default.query().where('id', params.id).update(data);
            response.status(200).send({ message: "Uusário atualizado com sucesso", data: data });
        }
        catch (err) {
            response.status(400).send({ message: "Não foi possível atualizar o usuário ", error: err });
        }
    }
    async store({ request, response }) {
        try {
            console.log("Controller User - Método Create");
            const data = request.body();
            console.log("data", data);
            await User_1.default.create(data);
            response.status(200).send({ message: "Usuário criado com sucesso", data: data });
        }
        catch (err) {
            response.status(400).send({ message: "Não foi possível Criar o usuário ", data: err });
        }
    }
    async delete({ request, response }) {
        try {
            console.log("Controller User - Método Delete");
            const params = request.params();
            const user = await User_1.default.findOrFail(params.id);
            await user.delete();
            return response.status(200).send({ message: "Usuário deletado com sucesso", data: user });
        }
        catch (err) {
            response.status(400).send({ message: "Não foi possível Deletar o usuário ", data: err });
        }
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map