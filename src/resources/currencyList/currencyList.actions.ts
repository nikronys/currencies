export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';

export const saveCard = (card: Object) => ({
  type: ADD_CARD,
  payload: card,
});

export const editCard = (id: string) => ({
  type: EDIT_CARD,
  payload: id,
});
