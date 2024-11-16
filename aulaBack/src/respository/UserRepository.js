import { ConexaoPrimas } from "../app/connection";
import bcrypt from "bcrypt"
export class RepositoryClient{

    async criarClient(body){
        try {
            const connection = ConexaoPrimas.gerarConexao()
            const cliente = await connection.cliente.findUnique({where:{email:body.email}})
            if(!cliente){
                const senhaCriptografada =  bcrypt.hashSync(body.senha,10)
                const cliente = await connection.cliente.create({date:{senhaCriptografada,...body}})
                return {mensagem:"cliente cadastrado com sucesso, seja bem-vindo" + cliente.name}
            }
            throw new Error("usuário ja registrado no banco de dados")
        } catch (error) {
            throw error
        }
        // await connection.cliente.create({data:{...body}})
    }
    async pegarTodos(){
        const connection = ConexaoPrimas.gerarConexao()
        const todosOsCliente = await connection.cliente.findMany()
        return todosOsCliente
    }
}