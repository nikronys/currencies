export type Props = {
  saveCard: Function,
  editCard: Function,
  cardUnderEdition: {
    currentCard: {
      description: string,
      name: string,
      _id: string,
    },
    currenciesSnapshot: Array<Object>
  }
};

export type Currency = {
  name: string;
  quotes: {
    USD: {
      price: number;
    },
  },
  last_updated: number;
};

export type Data = Currency[];

export type Todo = {
  name: string;
  description: string;
};

export type State = {
  data: Todo[];
  description: string;
  currentCurrency: string;
}
