import {
  EyeSlashIcon,
  EyeIcon,
  CloudArrowDownIcon,
} from '@heroicons/react/20/solid';

import AutoComplete from '../../../components/Select/AutoComplete';
import Input from '../../../components/Input/input';
import InputGroup from '../../../components/Input/InputGroup';
import BoxBorder from '../../../components/Layout/box';

const RegistrationView = ({ data, event, onSave }) => {
  return (
    <>
      <BoxBorder>
        <h2 className="text-basic-primary text-lg font-poppins font-semibold">
          Create New Account
        </h2>
        <p className="text-basic-secondary text-xs">
          Before you can invest here, please create new account
        </p>
        <div className="grid grid-cols-1 gap-6 mt-8">
          <h2 className="text-basic-primary text-lg font-poppins font-semibold">
            Account Detail
          </h2>
          <label className="block">
            <span className="text-basic-primary font-[13px] mb-2">
              Select Country
            </span>
            <AutoComplete
              data={data?.countryList}
              value={data?.selected}
              onChange={event?.handleSelect}
            />
          </label>
          <label className="block">
            <span className="text-basic-primary font-[13px] mb-2">
              Phone Number
            </span>
            <Input
              name="userPhone"
              type="tel"
              onChange={(e) => event?.handleChange('phone', e.target.value)}
              value={data?.form?.phone}
            />
          </label>
          <label className="block">
            <span className="text-basic-primary font-[13px] mb-2">
              Password
            </span>
            <InputGroup
              name="password"
              data-testid="input-pass"
              onChange={(e) => event?.handleChange('password', e.target.value)}
              value={data?.form?.password}
              rightIcon={
                <button
                  className="btn-eye"
                  data-testid="toogle-pass"
                  onClick={() => event?.togglePassword(!data?.isShowPassword)}>
                  {data?.isShowPassword ? (
                    <EyeIcon className="h-5 w-5 text-accent-primary" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-accent-primary" />
                  )}
                </button>
              }
              type={data?.isShowPassword ? 'text' : 'password'}
            />
          </label>
        </div>
      </BoxBorder>
      <div className="link mt-8">
        <a href="" className="flex flex-row text-accent-secondary text-lg">
          <CloudArrowDownIcon className="h-6 w-6 text-accent-secondary mr-2" />{' '}
          Terms and conditions
        </a>
      </div>
      <div className="flex mt-8 flex-col lg:flex-row">
        <button
          onClick={event?.handleReset}
          className="rounded-md border-basic-stroke border px-8 py-2 text-basic-primary"
          type="reset">
          Reset
        </button>
        <button
          onClick={() => onSave(data?.form)}
          className="rounded-md lg:ml-3 mt-3 lg:mt-0 bg-basic-primary border-basic-primary border px-8 py-2 text-bg-primary"
          type="button">
          Register
        </button>
      </div>
    </>
  );
};

export default RegistrationView;
