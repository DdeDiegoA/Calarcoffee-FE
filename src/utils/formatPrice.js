export function formatPriceCop(price) {
  const formatedPriceCop = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  return formatedPriceCop;
}
