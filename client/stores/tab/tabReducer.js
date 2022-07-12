import * as tabActionTypes from './tabActions';

const initialState = {
  selectedTab: '',
};

const tabReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case tabActionTypes.SET_SELECTED_TAB: {
      const { selectedTab } = payload;

      return {
        ...state,
        selectedTab,
      };
    }

    default:
      return state;
  }
};

export default tabReducer;