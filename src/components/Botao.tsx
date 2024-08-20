
interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick: () => void
}

export default function Botao(props : BotaoProps) {
  const cor = props.cor ?? 'gray'
    return (
    <button
    onClick={props.onClick}
    className={`
    bg-gradient-to-r 
    ${cor === 'green'? 'from-green-400 to-green-700' : ''}
    ${cor === 'blue'? 'from-blue-400 to-blue-700' : ''}
    ${cor === 'gray'? 'from-gray-400 to-gray-700' : ''}    
    text-white px-4 py-2 rounded-md
    ${props.className}
    `}>
        {props.children}
    </button>
  )
};

