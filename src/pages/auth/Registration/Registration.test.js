import { fireEvent, render, screen } from '@testing-library/react';

import RegistrationView from './view';
import { COUNTRY_CODE } from '../../../mockData/countryCode';

const mockForm = {
  countryCode: 'ID',
  phone: '',
  password: '!',
  latlong: '-7.8011945,110.364917',
  device_type: 2,
  device_token: null,
};

const mockSelected = {
  name: 'Indonesia (+62)',
  dial_code: '+62',
  code: 'ID',
  id: 'ID',
};

const mockHandleChange = jest.fn();
const mockHandleReset = jest.fn();
const mockHandleSelect = jest.fn();
const mockTogglePassword = jest.fn();
const mockOnSave = jest.fn();
describe('Registration', () => {
  it('Render Correctly', () => {
    const { getByRole, getByTestId, rerender } = render(
      <RegistrationView
        data={{
          form: mockForm,
          countryList: COUNTRY_CODE,
          selected: mockSelected,
          isShowPassword: false,
        }}
        event={{
          handleSelect: mockHandleSelect,
          togglePassword: mockTogglePassword,
          handleChange: mockHandleChange,
          handleReset: mockHandleReset,
        }}
        onSave={mockOnSave}
      />,
    );

    const title = getByRole('heading', { name: 'Create New Account' });
    expect(title).toBeInTheDocument();

    const eyeBtn = getByTestId('toogle-pass');
    expect(eyeBtn).toBeInTheDocument();
    fireEvent.click(eyeBtn);
    expect(mockTogglePassword).toBeCalled();

    //reset
    const btnReset = getByRole('button', { name: 'Reset' });
    expect(btnReset).toBeInTheDocument();
    fireEvent.click(btnReset);
    expect(mockHandleReset).toBeCalled();

    //save
    const btnRegister = getByRole('button', { name: 'Register' });
    expect(btnRegister).toBeInTheDocument();
    fireEvent.click(btnRegister);
    expect(mockOnSave).toBeCalled();

    //input phone
    const input = getByRole('textbox', { name: 'Phone Number' });
    fireEvent.change(input, { target: { value: '30000' } });
    expect(mockHandleChange).toBeCalled();

    //input pass
    const inputPass = getByTestId('input-pass');
    fireEvent.change(inputPass, { target: { value: '30000' } });
    expect(mockHandleChange).toBeCalled();
  });
});
