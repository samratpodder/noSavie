import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface PhoneNumberState{
  value: string;
}

// Define the initial state using that type
const initialState: PhoneNumberState = {
  value: '',
};

export const PhoneNumberSlice = createSlice({
  name: 'phoneNumber',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    readyToText: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});

export const { readyToText } = PhoneNumberSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPhoneNumber = (state: RootState) => state.phoneNumber.value;

export default PhoneNumberSlice.reducer;
