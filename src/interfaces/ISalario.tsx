export default interface ISalario {
    id: string
    salarioBruto: number
    dataDeCalculo: Date
    salarioLiquido: number
    dependentes: number
    aliquotaINSS: number
    aliquotaIRPF: number
    descontoINSS: number
    descontoIRPF: number
    outrosDescontos: number
    totalDescontos: number
    profissao: string


}