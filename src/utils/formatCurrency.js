export const formatCurrency = amount => {
  const value = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
  return value;
};
