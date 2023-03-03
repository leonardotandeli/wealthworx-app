export interface ISalario {
    bruto: number;
    outrosDescontos: number;
    totalDependentes: number;
    liquido: number;
    valorDescontoInss: number;
    valorDescontoIrpf: number;
    aliquotaRealInss: number;
    aliquotaRealIrpf: number;
    totalDesconto: number;
    profissao: string;
}

