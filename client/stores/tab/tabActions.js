export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';

//thunk
export const setSelectedTab = (selectedTab) => (dispatch) => {
  dispatch(setSelectedTabSuccess(selectedTab));
};

//action
export const setSelectedTabSuccess = (selectedTab) => ({
  type: SET_SELECTED_TAB,
  payload: { selectedTab },
});