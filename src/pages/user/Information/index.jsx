import { useRef, useState } from 'react';
import Image from 'next/image';
import { CalendarDaysIcon, PencilIcon } from '@heroicons/react/24/solid';

import Input from '../../../components/Input/input';
import InputGroup from '../../../components/Input/InputGroup';
import AutoComplete from '../../../components/Select/AutoComplete';

import style from '../user.module.scss';
import classNames from '../../../utils/classNames';
import TextArea from '../../../components/Input/TextArea';
import BoxBorder from '../../../components/Layout/box';

const genders = [
  {
    name: 'Male',
    code: 'male',
  },
  {
    name: 'Female',
    code: 'female',
  },
];

const wethons = [];

const InformationTab = () => {
  let uploadRef = useRef(null);
  const [gender, setGender] = useState(null);

  return (
    <BoxBorder>
      {/* <div className="login-form border border-basic-stroke rounded-lg lg:p-8 p-4"> */}
      <div className="flex lg:flex-row flex-col mb-8">
        <div className="flex-1">
          <h2 className="text-lg text-basic-primary font-semibold">
            Profile Information
          </h2>
          <span className="font-light text-xs text-basic-secondary">
            Your personal data
          </span>
        </div>
        <button>
          <PencilIcon className="w-5 h-5 text-accent-primary" />
        </button>
      </div>
      <div className="grid lg:grid-cols-2 lg:grid-flow-col lg:gap-16 gap-1">
        <div className="col-1">
          <h2 className="text-lg text-basic-primary font-semibold mb-3">
            Product Detail
          </h2>
          <label class="block mb-8">
            <span class="text-basic-primary font-poppins font-[13px]">
              Name *
            </span>
            <Input className="font-poppins" value="Wong Fei Hung" />
          </label>
          <label className="block mb-8">
            <span class="text-basic-primary font-[13px] mb-2">Gender</span>
            <AutoComplete
              data={genders}
              value={gender}
              onChange={(v) => setGender(v)}
            />
          </label>
          <label className="block mb-8">
            <span class="text-basic-primary font-[13px] mb-2">
              Date of Birth
            </span>
            <InputGroup
              className={classNames(
                style.inputDate,
                'border-0 rounded-none border-b',
              )}
              type="date"
              leftIcon={
                <button onClick={() => dateRef?.current?.focus()}>
                  <CalendarDaysIcon className="h-5 w-5 text-accent-primary" />
                </button>
              }
            />
          </label>
          <label class="block mb-8">
            <span class="text-basic-primary font-poppins font-[13px]">Bio</span>
            <TextArea className="font-poppins h-28" value="Wong Fei Hung" />
          </label>
          <div className="flex mt-8 flex-col lg:flex-row">
            <button
              className="rounded-md lg:w-auto w-full border-basic-stroke border px-8 py-2  mb-4 lg:mb-0 text-basic-primary"
              type="reset">
              Discard
            </button>
            <button
              className="rounded-md lg:ml-3 bg-basic-primary border-basic-primary border px-8 py-2 text-bg-primary"
              type="button">
              Update
            </button>
          </div>
        </div>
        <div className="">
          <h2 className="text-lg text-basic-primary font-semibold mb-3">
            Profile Picture
          </h2>
          <div className="block rounded-md aspect-square overflow-hidden relative">
            <Image
              fill
              src="https://picsum.photos/200/300/"
              alt="my profile"
              className="w-full max-w-full"
            />
          </div>
          <div className="block w-full mb-8">
            <input type="file" className="hidden" ref={uploadRef} />
            <button
              onClick={() => uploadRef.current.click()}
              className="mt-7 block text-center bg-accent-primary w-full py-3 text-white font-roboto text-base rounded font-medium">
              Upload Media
            </button>
          </div>
          <label class="block mb-8">
            <span class="text-basic-primary font-poppins font-[13px]">
              Address
            </span>
            <TextArea className="font-poppins h-28" placeholder="Address" />
          </label>
        </div>
      </div>
      {/* </div> */}
    </BoxBorder>
  );
};
export default InformationTab;
