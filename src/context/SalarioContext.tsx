import { createContext, ReactNode, useState } from "react";
import { ISalario } from "../interfaces/ISalario";

type SalarioContextProps = {
  children: ReactNode;
};

type SalarioContextType = {
  salarioBruto: number;
  setSalarioBruto: (newState: number) => void;
  outrosDescontos: number;
  setOutrosDescontos: (newState: number) => void
  dependentes: number
  setDependentes: (newState: number) => void
  profissao: string
  setProfissao: (newState: string) => void
  salario: ISalario
  setSalario: (newState: ISalario) => void
};

const initialValue = {
  salarioBruto: 0,
  setSalarioBruto: () => {},
  outrosDescontos: 0,
  setOutrosDescontos: () => {},
  dependentes: 0,
  setDependentes: () => {},
  profissao: "", 
  setProfissao: () => {},
  salario: { bruto:0, outrosDescontos: 0, totalDependentes: 0, liquido: 0, valorDescontoInss: 0, valorDescontoIrpf: 0, aliquotaRealInss: 0, aliquotaRealIrpf: 0,totalDesconto: 0, profissao: "nao_informado"},
  setSalario: () => {}
}


export const SalarioContext = createContext<SalarioContextType>(initialValue);

export const SalarioContextProvider = ({ children }: SalarioContextProps) => {
  const [salarioBruto, setSalarioBruto] = useState(initialValue.salarioBruto);
  const [outrosDescontos, setOutrosDescontos] = useState(initialValue.outrosDescontos);
  const [dependentes, setDependentes] = useState(initialValue.dependentes);
  const [profissao, setProfissao] = useState(initialValue.profissao);
  const [salario, setSalario] = useState<ISalario>(initialValue.salario)

  return (
    <SalarioContext.Provider value={{salarioBruto, setSalarioBruto, outrosDescontos, setOutrosDescontos, dependentes, setDependentes, profissao, setProfissao, salario, setSalario}}>
      {children}
    </SalarioContext.Provider>
  );
};
