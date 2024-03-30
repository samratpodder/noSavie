import React from 'react';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { RootState } from '../redux/store';
import { readyToText } from '../redux/features/PhoneNumberSlice';

function NumberInput() {
  const value = useAppSelector((state: RootState) => state.phoneNumber.value);
  const dispatch = useAppDispatch();
  const [localValue, setLocalValue] = React.useState<string>(value);
  const handleChange = (e: string) => {
    setLocalValue(e);
    if (matchIsValidTel(e) === true) {
      console.log('NumberInput: handleChange: e: ', e);
      dispatch(readyToText(e));
    } else {
      dispatch(readyToText(''));
    }
  };
  return (
    <MuiTelInput
      value={localValue}
      onChange={(e: string) => handleChange(e)}
      defaultCountry="IN"
      // continents={['EU', 'OC', 'AF', 'AS', 'NA', 'SA']}
      continents={['AS', 'NA', 'EU']}
      preferredCountries={['IN', 'US', 'GB']}
      excludedCountries={['KP']}
    />
  );
}

export default NumberInput;
