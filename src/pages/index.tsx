import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import useTableorForm from "@/hooks/useTableorForm";

export default function Home() {

  const {exibirTabela, exibirForm, tabVisivel, formVisivel} = useTableorForm()

  let clientesArray = [
    new Cliente('Victor', 27, '1'),
    new Cliente('Mayara', 30, '2'),
    new Cliente('Carlos', 22, '3'),
    new Cliente('Leandro', 35, '4'),
    new Cliente('Almir', 60, '5'),
    new Cliente('Bia', 15, '6'),    
  ]    

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>(clientesArray)

  const nextId = () => {
    const result = clientes.map(cliente => parseInt(cliente.id)).reduce((idAnterior, atual) => atual > idAnterior? atual : idAnterior, 0)       
    return result + 1
  }

  const alterarCliente = (cliente: Cliente) => {
    setCliente(cliente)
  }

  const excluirCliente = (cliente : Cliente) => {    
    const id = cliente.id
    let novoClientes = clientes.filter(cliente => cliente.id !== id)
    setClientes([...novoClientes])
  }

  const criarCliente= () => {
    setCliente(Cliente.vazio())
    exibirForm()
  }

  const salvarCliente = (cliente : Cliente) => {    
    setCliente(cliente)
    let novoArray = [...clientes]  

    if (!cliente.id){
      cliente.id = nextId().toString()                 
      novoArray.push(cliente)
      
    }else{            
      const clienteAlterado = cliente  
      novoArray.forEach((cliente, i) => cliente.id === clienteAlterado.id? novoArray[i] = clienteAlterado : null)      
    }

    setClientes(novoArray)
    exibirTabela()
    
  }  

  const trocarEstado = () => {
    tabVisivel? exibirForm() : exibirTabela()    
  }  

  return (
    <React.Fragment>
      <div className={`
                flex justify-center items-center h-screen
                bg-gradient-to-r from-blue-500 to-purple-500
                text-white   
      `}>
        
        <Layout titulo="Cadastro Simples">
        <div className="flex justify-end mb-2">
              <Botao onClick={criarCliente}
              cor="green">Novo Cliente
              </Botao>
        </div>
          {formVisivel? (
              <Formulario cliente={cliente} trocarEstado={trocarEstado} salvarCliente={salvarCliente}>

              </Formulario>
          ): (
            <Tabela clientes={clientes} trocarEstado={trocarEstado} excluirCliente={excluirCliente} alterarCliente={alterarCliente}>
            </Tabela>   
          )}          
                           
        </Layout>
      </div>           
    </React.Fragment>
  );
}
 