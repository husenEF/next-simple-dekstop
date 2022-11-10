import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

import Input from '../../components/Input/input';
import InputGroup from '../../components/Input/InputGroup';
import BoxBorder from '../../components/Layout/box';

const Login = () => {
  const [isShowPassword, togglePassword] = useState(false);
  return (
    <>
      <BoxBorder>
        <h2 className="text-basic-primary text-lg font-poppins font-semibold">
          Login Account
        </h2>
        <div class="grid grid-cols-1 gap-6 mt-8">
          <label class="block">
            <span class="text-basic-primary font-[13px] mb-2">
              Phone Number
            </span>
            <Input />
          </label>
          <label className="block">
            <span class="text-basic-primary font-[13px] mb-2">Password</span>
            <InputGroup
              rightIcon={
                <button onClick={() => togglePassword(!isShowPassword)}>
                  {isShowPassword ? (
                    <EyeIcon className="h-5 w-5 text-accent-primary" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-accent-primary" />
                  )}
                </button>
              }
              type={isShowPassword ? 'text' : 'password'}
            />
          </label>
        </div>
      </BoxBorder>
      <div className="flex mt-8 flex-col lg:flex-row">
        <button
          className="rounded-md border-basic-stroke border px-8 py-2 text-basic-primary"
          type="reset">
          Reset
        </button>
        <button
          className="rounded-md lg:ml-3 lg:mt-0 mt-3 bg-basic-primary border-basic-primary border px-8 py-2 text-bg-primary"
          type="button">
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
