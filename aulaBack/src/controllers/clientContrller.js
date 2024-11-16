import { RepositoryClient } from "../respository/UserRepository";
const {criarClient} = new RepositoryClient()

export class ClientContrller{
 static async criar(request,response){
  try {
    const body = request.body
    const message = await criarClient(body)
    response.json("Usuário criado com sucesso").status(201)
  } catch (error) {
    response.json("erro ao criar o usuário").status(500)
    return;
  }
  
}
static async pegarTodos(){
}
}