export const SAVE_CURRENCY = 'SAVE_CURRENCY';

export const saveCurrency = currency => ({
  type: SAVE_CURRENCY,
  payload: currency,
});
