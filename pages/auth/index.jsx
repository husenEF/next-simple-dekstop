import { useEffect, useState } from 'react';

import { formatDate } from '../../src/utils/format';
import classNames from '../../src/utils/classNames';
import LoginForm from '../../src/pages/auth/Login';
import RegistrationForm from '../../src/pages/auth/Registration';
import MainLayout from '../../src/components/Layout';

const AuthPage = (props) => {
  const [tabs] = useState([
    {
      name: 'Login',
      id: 'login',
    },
    {
      name: 'Registration',
      id: 'registration',
    },
  ]);
  const [activeTab, setActive] = useState(null);

  const handleTab = (tab) => {
    setActive(tab);
  };

  useEffect(() => {
    if (activeTab === null) {
      setActive(tabs[0]);
    }
  }, [activeTab]);

  return (
    <MainLayout>
      <h3 className="text-basic-secondary">
        Today {formatDate(new Date(), 'MMM d, yyyy')}
      </h3>

      <div className="tabs">
        <div className="sm:hidden mt-3">
          <select
            id="tabs"
            name="tabs"
            className="block mb-4 w-full rounded-md bg-transparent text-basic-primary border-basic-stroke py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={activeTab?.name}
            onChange={(e) => {
              const tab = tabs.find((t) => t.id === e.target.value);
              console.log({ tab });
              handleTab(tab);
            }}
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id} className="bg-bg-thriary">
                {tab.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-basic-stroke">
            <nav className="-mb-px flex space-x-8 rel" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  onClick={() => handleTab(tab)}
                  key={tab.name}
                  className={classNames(
                    activeTab?.id === tab.id
                      ? 'text-basic-primary'
                      : 'text-basic-thriary',
                    'whitespace-nowrap py-4 px-1 font-medium text-sm relative',
                    activeTab?.id === tab.id
                      ? "before:left-0 before:content-[' '] before:absolute before:bottom-0 before:w-full before:h-[4px] before:bg-gradient-to-r before:from-accent-secondary before:to-accent-primary"
                      : '',
                  )}
                  aria-current={activeTab?.id === tab.id ? 'page' : undefined}>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
        <div className="tab-contents lg:mt-16 sm:mt-6">
          {activeTab?.id === 'login' && <LoginForm />}
          {activeTab?.id === 'registration' && <RegistrationForm />}
        </div>
      </div>
    </MainLayout>
  );
};

export default AuthPage;
