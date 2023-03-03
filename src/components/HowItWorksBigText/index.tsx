import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import f1 from "../../../public/images/f1.png"
import f2 from "../../../public/images/f2.png"
export default function HowItWorksBigText() {
  return (
    <>
      <Typography>
        Qual a diferença entre salário bruto e salário líquido?
      </Typography>
      <Typography>
        O salário bruto é o valor base estipulado em contrato ou anotado na
        carteira de trabalho do trabalhador, sem nenhum tipo de desconto ou
        acréscimo. Esse valor pode ser ajustado anualmente, de acordo com a
        categoria profissional, ou mediante negociações com o empregador.
      </Typography>
      <Typography>
        Já o salário líquido é o valor efetivamente recebido pelo trabalhador,
        depois de descontados os impostos e demais contribuições previstas por
        lei. Dentre esses descontos, destacam-se o IRRF (Imposto de Renda Retido
        na Fonte) e o INSS (Instituto Nacional do Seguro Social), que são
        descontados diretamente da folha de pagamento.
      </Typography>

          <Image src={f1} width={359} height={324} alt="WealthWorx" />

          <Typography>
          Qual a diferença entre adicionais trabalhistas e variáveis salariais?
      </Typography>
      <Typography>
      Os adicionais trabalhistas são valores adicionais pagos ao trabalhador em razão de condições especiais de trabalho, tais como insalubridade e trabalho noturno.
 Esses adicionais são estabelecidos por lei e podem variar de acordo com a atividade.
      </Typography>
      <Typography>
      Por outro lado, as variáveis salariais são valores adicionais que podem ser pagos ao trabalhador em razão de metas atingidas, desempenho individual entre outros fatores que variam de acordo com a política da empresa. Esses valores não são obrigatórios por lei e podem ser negociados entre o empregador e o empregado.
      </Typography>

          <Image src={f2} width={366} height={297} alt="WealthWorx" />
    </>
  );
}
