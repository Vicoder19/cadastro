import Cliente from "@/core/Cliente";
import ClienteRepository from "@/core/clienteRepository";
import { firebase, firestore, collection, getDocs, doc, addDoc, deleteDoc, updateDoc } from "../config";

export default class ClienteCollection implements ClienteRepository {
        
    async salvar(cliente: Cliente): Promise<Cliente> {
        return null
    }

    async excluir(cliente: Cliente): void {
        await deleteDoc(doc(cliente.id));        
    }

    async obterTodos(): Promise<Cliente[]> {
        const clienteCol = this.colecao()
        const clienteSnapshot = await getDocs(clienteCol)
        const clienteList = clienteSnapshot.docs.map(doc => doc.data())
        return clienteList
    }

    colecao() {
        
    }
}