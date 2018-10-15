export const SAVE_CARD = 'SAVE_CARD';
export const EDIT_CARD = 'EDIT_CARD';

export const saveCard = currency => ({
  type: SAVE_CARD,
  payload: currency,
});

export const editCard = id => ({
  type: EDIT_CARD,
  payload: id,
});
