import {PrismaClient} from "@prisma/client";
export class ConexaoPrimas{
    static gerarConexao(){
        return this.prisma ? this.prisma : this.prisma = new PrismaClient()
    }
}