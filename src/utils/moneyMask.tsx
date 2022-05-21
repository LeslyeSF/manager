export default function maskMoney(value) {
  const valueAsNumber = value.replace(/\D+/g, "");
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valueAsNumber / 100);
}