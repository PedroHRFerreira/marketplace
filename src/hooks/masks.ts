export function currencyMask(value: string): string {
  let onlyNumbers = value.replace(/\D/g, "");
  let numericValue = parseInt(onlyNumbers, 10) || 0;
  const floatValue = numericValue / 100;
  return floatValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
