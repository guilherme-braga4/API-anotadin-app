"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cripto_1 = __importDefault(require("../../Models/Cripto"));
class CriptosController {
    async index({ response }) {
        try {
            console.log("Controller Cripto - Método Index");
            const users = await Cripto_1.default.all();
            response.status(200).send({ message: "Retornando todas as Criptomoedas desse Usuário", data: users });
        }
        catch (err) {
            response.status(200).send({ message: "Algo deu errado!", error: err });
        }
    }
    async show({ response, request }) {
        try {
            console.log("Controller Cripto - Método Index");
            const paramters = request.params();
            console.log('params', paramters);
            const criptos = await Cripto_1.default.query().where('user_id', paramters.id);
            response.status(200).send({ message: "Retornando todas as Criptomoedas desse Usuário", data: criptos });
        }
        catch (err) {
            response.status(200).send({ message: "Algo deu errado!" + err });
        }
    }
    async update({ request, response }) {
        try {
            console.log("Controller Cripto - Método Update");
            const data = request.body();
            const params = request.params();
            console.log("data", data);
            await Cripto_1.default.query().where('id', data.id).where('user_id', params.id).update(data);
            response.status(200).send({ message: "Registro de Criptomoeda atualizada com sucesso", data: data });
        }
        catch (err) {
            response.status(400).send({ message: "Não foi possível Atualizar esse Registro de Criptomoeda ", error: err });
        }
    }
    async store({ request, response }) {
        try {
            console.log("Controller Cripto - Método Create");
            const data = request.body();
            console.log("data", data);
            await Cripto_1.default.create(data);
            response.status(200).send({ message: "Registro de Criptomoeda criado com sucesso", data: data });
        }
        catch (err) {
            response.status(400).send({ message: "Não foi possível Criar esse Registro de Criptomoeda " + err });
            console.log(err);
        }
    }
    async delete({ request, response }) {
        try {
            console.log("Controller Cripto - Método Delete");
            const params = request.params();
            console.log("params", params);
            const user = await Cripto_1.default.findOrFail(params.id);
            console.log("user", user);
            await user.delete();
            return response.status(200).send({ message: "Registro de Criptomoeda deletado com sucesso", data: user });
        }
        catch (err) {
            response.status(400).send({ message: "Não foi possível deletar esse Registro de Criptomoeda" + err });
        }
    }
}
exports.default = CriptosController;
//# sourceMappingURL=CriptosController.js.map