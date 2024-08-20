interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    onChange?: (valor: any) => void
}
export default function Entrada(props : EntradaProps) {
  return (
    <div className="flex flex-col mb-4">
        <label className="mb-2">
            {props.texto}
        </label>
        <input className={`
        border border-purple-500 rounded-lg
        bg-gray-200 focus:outline-none
        px-4 py-2 ${props.somenteLeitura? '' : 'focus:bg-white'} 
        `}
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura} 
        onChange={e => props.onChange?.(e.target.value)}/>
    </div>
  )
};

