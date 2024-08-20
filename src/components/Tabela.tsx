import Cliente from "@/core/Cliente"
import { IconeEdicao, IconeLixeira } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    alterarCliente?: (cliente:Cliente) => void
    excluirCliente?: (cliente:Cliente) => void
    trocarEstado: () => void
}

export default function Tabela(props : TabelaProps) {
  
    function renderizarCabecalho(){
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>                
                <th className="text-center p-4">Ação</th>                
            </tr>
        )
    }

    function editarCliente(cliente : Cliente) {
        props.alterarCliente(cliente)
        props.trocarEstado()
        
    }

    function excluirCliente(cliente : Cliente) {
        props.excluirCliente(cliente)
    }

    function renderizarAcoes(cliente : Cliente){
        return (
            <td className="flex justify-center items-center">
                <button onClick={() => editarCliente(cliente)} className={`
                    mt-1
                    text-green-600
                    hover:bg-purple-50
                    rounded-full p-2`}>
                    {IconeEdicao()}
                </button>
                <button onClick={() => excluirCliente(cliente)} className={`
                mt-1
                    text-red-500
                    hover:bg-purple-50
                    rounded-full p-2`}>
                    {IconeLixeira()}
                </button>
            </td>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {renderizarAcoes(cliente)}
                </tr>
            )
        })
    }
  
    return (
    <table className="w-full rounded-xl overflow-hidden">
        <thead className={`
            text-gray-100
            bg-gradient-to-r from-purple-500 to-purple-800
            `}>
            {renderizarCabecalho()}        
        </thead>
        <tbody>
            {renderizarDados()}
        </tbody>
        
    </table>
  )
};

