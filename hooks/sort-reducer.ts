import { ESortType } from '@/enums/sort';
import { SortActions, SortReducerState } from '@/interfaces/sort.interface';

export const sortReducer = (
  state: SortReducerState,
  action: SortActions
): SortReducerState => {
  switch (action.type) {
    case ESortType.Rating: {
      const sort = state.sortType === ESortType.Rating ? !state.sortAsc : true;
      const first = sort ? 1 : -1;
      const second = sort ? -1 : 1;
      return {
        sortType: ESortType.Rating,
        sortAsc: sort,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? first : second
        ),
      };
    }
    case ESortType.Price: {
      const sort = state.sortType === ESortType.Price ? !state.sortAsc : true;
      const first = sort ? 1 : -1;
      const second = sort ? -1 : 1;
      return {
        sortType: ESortType.Price,
        sortAsc: sort,
        products: state.products.sort((a, b) =>
          a.price > b.price ? first : second
        ),
      };
    }
    default:
      throw new Error('Invalid sort type');
  }
};
