import Head from "next/head";

import React from "react";

export default function SEO() {
  return (
    <Head>
      <title>Calculadora de Salário Líquido CLT - WealthWorx</title>
      <meta
        name="description"
        content="Calcule o salário líquido, apenas inserindo o valor do salário bruto. 
        Esse valor será utilizado como base para o cálculo dos percentuais de descontos que serão aplicados."
      />
    </Head>
  );
}
