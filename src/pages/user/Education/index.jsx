import { PlusIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

import classNames from '../../../utils/classNames';

import Input from '../../../components/Input/input';
import InputGroup from '../../../components/Input/InputGroup';
import BoxBorder from '../../../components/Layout/box';

import style from '../user.module.scss';
import { useRef } from 'react';

const educationList = [
  {
    id: 1,
    name: 'TK. Bhayangkari',
    end: 'Jul 1, 2001',
  },
  {
    id: 2,
    name: 'SD Bhayangkaro',
    end: 'Jun 28, 2006',
  },
  {
    id: 3,
    name: 'SMP Bhayangkari',
    end: 'Jul 1, 2009',
  },
  {
    id: 4,
    name: 'SMA Bhayangkari',
    end: 'Mei 1, 2012',
  },
  {
    id: 4,
    name: 'Universitas Bhayangkari',
    end: 'Nov 1, 2017',
  },
];

const EducationTab = () => {
  let graduationRef = useRef(null);
  return (
    <BoxBorder>
      <div className="flex flex-row mb-8">
        <div className="flex-1">
          <h2 className="text-lg text-basic-primary font-semibold">
            Education Information
          </h2>
          <span className="font-light text-xs text-basic-secondary">
            Information about your education
          </span>
        </div>
        <button>
          <PlusIcon className="w-5 h-5 text-accent-primary" />
        </button>
      </div>
      <div className="form">
        <label class="block mb-8">
          <span class="text-basic-primary font-[13px] mb-2">School Name</span>
          <Input />
        </label>
        <label className="block mb-8">
          <span class="text-basic-primary font-[13px] mb-2">
            Graduation Time
          </span>
          <InputGroup
            className={classNames(
              style.inputDate,
              'border-0 rounded-none border-b',
              'focus:border-0 focus:border-b  focus:outline-0',
            )}
            ref={(ref) => (graduationRef = ref)}
            onClick={() => graduationRef?.showPicker()}
            type="date"
            leftIcon={
              <button onClick={() => graduationRef?.showPicker()}>
                <CalendarDaysIcon className="h-5 w-5 text-accent-primary" />
              </button>
            }
          />
        </label>

        <div className="flex mt-8">
          <button
            className="rounded-md border-basic-stroke border px-8 py-2 text-basic-primary"
            type="reset">
            Discard
          </button>
          <button
            className="rounded-md ml-3 bg-basic-primary border-basic-primary border px-8 py-2 text-bg-primary"
            type="button">
            Add Education
          </button>
        </div>
        <div className="career-list block mt-28">
          {educationList.map((e) => {
            return (
              <div key={e.id} className="mb-8">
                <h3 className="text-white font-roboto font-bold text-base">
                  {e.name}
                </h3>
                <p className="text-basic-secondary font-roboto font-bold text-base">
                  {e.end}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </BoxBorder>
  );
};
export default EducationTab;
