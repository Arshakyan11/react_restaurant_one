import { fetchingSearchMenu } from "../store/api/api";
import { clearFoundedData } from "../store/SearchSlice/SearchSlice";

export const searchHelper = (dispatch, event) => {
  const query = event.target.value.trim();
  const allowedCharacters = /^[a-zA-Z0-9\s]+$/.test(query);
  if (query.length > 1 && allowedCharacters) {
    dispatch(fetchingSearchMenu(query));
    console.log("mtav");
  } else if (query.length <= 1) {
    dispatch(clearFoundedData());
  }
};
