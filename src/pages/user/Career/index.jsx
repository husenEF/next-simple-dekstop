import { PlusIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

import classNames from '../../../utils/classNames';

import Input from '../../../components/Input/input';
import InputGroup from '../../../components/Input/InputGroup';
import BoxBorder from '../../../components/Layout/box';

import style from '../user.module.scss';

const companyList = [
  {
    id: 1,
    name: 'PT. Erkananta',
    start: 'Jul 7, 2021',
    end: 'Jul 1, 2022',
  },
  {
    id: 2,
    name: 'PT. Indocoin Perkasa',
    start: 'Jan 2, 2020',
    end: 'Jun 28, 2021',
  },
  {
    id: 3,
    name: 'PT. Nasa Lokal',
    start: 'Jul 2, 2019',
    end: 'Des 31, 20219',
  },
];

const CareerTab = () => {
  return (
    <BoxBorder>
      <div className="flex flex-row mb-8">
        <div className="flex-1">
          <h2 className="text-lg text-basic-primary font-semibold">
            Career Information
          </h2>
          <span className="font-light text-xs text-basic-secondary">
            Information about your career
          </span>
        </div>
        <button>
          <PlusIcon className="w-5 h-5 text-accent-primary" />
        </button>
      </div>
      <div className="form">
        <label class="block mb-8">
          <span class="text-basic-primary font-[13px] mb-2">Company Name</span>
          <Input />
        </label>
        <label className="block mb-8">
          <span class="text-basic-primary font-[13px] mb-2">Start From</span>
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
        <label className="block mb-8">
          <span class="text-basic-primary font-[13px] mb-2">Ending In</span>
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
        <div className="flex mt-8">
          <button
            className="rounded-md border-basic-stroke border px-8 py-2 text-basic-primary"
            type="reset">
            Discard
          </button>
          <button
            className="rounded-md ml-3 bg-basic-primary border-basic-primary border px-8 py-2 text-bg-primary"
            type="button">
            Add Career
          </button>
        </div>
        <div className="career-list block mt-28">
          {companyList.map((e) => {
            return (
              <div key={e.id} className="mb-8">
                <h3 className="text-white font-roboto font-bold text-base">
                  {e.name}
                </h3>
                <p className="text-basic-secondary font-roboto font-bold text-base">
                  {e.start} - {e.end}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </BoxBorder>
  );
};
export default CareerTab;
