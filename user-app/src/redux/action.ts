import { User } from "./reducers";

export const ADD_USER = 'ADD_USER';

interface AddUserAction {
  type: typeof ADD_USER;
  payload: User;
}

export const addUser = (user: User): AddUserAction => ({
  type: ADD_USER,
  payload: user,
});

export type UserActionTypes = AddUserAction;
