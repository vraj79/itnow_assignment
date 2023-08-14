import { ADD_USER, UserActionTypes } from "./action";

export interface User {
  name: string;
  email: string;
  password: string;
  dob: string;
  city: string;
  pincode: number;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
