
export const formatCurrency = (
  amount,
  currencyCode = 'USD',
  minimumFractionDigits = 2
) => {
  // Always default to en-US and USD
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits,
  }).format(amount);
};

export const getCurrencySymbol = (currencyCode = 'USD') => {
  // Always return the USD symbol by default
  return formatCurrency(0, currencyCode).replace(/[\d.,\s]/g, '');
};
