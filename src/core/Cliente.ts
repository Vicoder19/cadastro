export default class Cliente {
    private _id: string
    private _nome: string
    private _idade: number

    static vazio() {
        return new Cliente('', 0)
    }

    public get id(): string
 {
        return this._id;
    }

    public set id(id: string
) {
        this._id = id;
    }

    public get nome(): string
 {
        return this._nome;
    }

    public set nome(nome: string
) {
        this._nome = nome;
    }

    public get idade(): number {
        return this._idade;
    }

    public set idade(idade: number) {
        this._idade = idade;
    }
    
    constructor(nome: string, idade: number, id: string = null){
        this._nome = nome
        this._idade = idade
        this._id = id            
    }
}