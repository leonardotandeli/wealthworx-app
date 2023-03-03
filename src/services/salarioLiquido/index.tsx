export const CALC_SALARIO_LIQUIDO = (
  salarioBruto: number,
  outrosDescontos: string,
  dependentes: string,
  profissao: string
) => {
  return {
    url: `${process.env.BASE_API_URL}/salarios`,
    options: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      salarioBruto: salarioBruto,
      outrosDescontos: outrosDescontos,
      dependentes: dependentes,
      profissao: profissao,
    }),
  };
};
