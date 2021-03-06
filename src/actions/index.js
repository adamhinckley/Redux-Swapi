import axios from "axios";
export const FETCHING_CHARACTERS = "FETCHING_CHARACTERS";
export const FETCHING_CHARACTERS_SUCCESS = "FETCHING_CHARACTERS_SUCCESS";
export const FETCHING_CHARACTERS_FAILURE = "FETCHING_CHARACTERS_FAILURE";

export const fetchCharacters = () => dispatch => {
  dispatch({ type: FETCHING_CHARACTERS });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      dispatch({ type: FETCHING_CHARACTERS_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      dispatch({ type: FETCHING_CHARACTERS_FAILURE, payload: err });
    });
};
