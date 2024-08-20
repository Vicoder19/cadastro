import { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "@/core/Cliente"
import Botao from "./Botao"
interface FormularioProps {
    cliente : Cliente
    trocarEstado: () => void    
    salvarCliente: (cliente : Cliente) => void
}
export default function Formulario(props : FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente.nome ?? '')
    const [idade, setIdade] = useState(props.cliente.idade ?? 0)    

    const salvarCliente = () => {
        const cliente = new Cliente(nome, idade, id)        
        props.salvarCliente(cliente)
    }

  return (
    <div>
        {id ? (
            <Entrada 
            somenteLeitura
            texto="Código"
            valor={id}
            />
        ) : false}
        <Entrada 
        texto="Nome"
        valor={nome}
        onChange={setNome}
        />                

        <Entrada 
        texto="Idade"
        tipo="number" 
        valor={idade}
        onChange={setIdade}
        />      
        <div className="flex justify-end">
            <Botao cor="blue" className="mr-2" onClick={salvarCliente}>
                Salvar
            </Botao>
            <Botao cor="gray" onClick={props.trocarEstado}>
                Cancelar
            </Botao>
        </div>  
    </div>
  )
};

