import React, { useState } from "react"

export default function useTableorForm() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const exibirTabela = () => setVisivel('tabela')
    const exibirForm = () => setVisivel('form')
    return {
        formVisivel: visivel === 'form',
        tabVisivel: visivel === 'tabela',
        exibirTabela, 
        exibirForm
    }
};

