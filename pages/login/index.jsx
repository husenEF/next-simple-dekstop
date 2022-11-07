import { useEffect, useState } from 'react';

import Logo from '../../src/components/Icons/Logo';
import { formatDate } from '../../src/utils/format';
import classNames from '../../src/utils/classNames';
import LoginForm from '../../src/pages/auth/Login';
import RegistrationForm from '../../src/pages/auth/Registration';

const Login = (props) => {
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
  }, [activeTab, tabs]);
  
  return (
    <div className="flex h-screen">
      <div className="bg-bg-primary flex-1 max-w-xl p-12">
        <h1 className="text-basic-primary flex">
          <Logo className="mr-2" />
          COINPRIVY
        </h1>
        <div className="mt-14 px-7">
          <h2 className="text-basic-primary text-[32px] font-semibold">
            Welcome to{'\r\n'}Coinprivy
          </h2>
          <p className="text-basic-secondary">
            is a secure platform that makes it easy to buy, sell, and store
            cryptocurrency like Bitcoin, Ethereum, and more. Based in the USA
          </p>
        </div>
      </div>
      <div className="bg-bg-secondary flex-auto p-12">
        <h3 className="text-basic-secondary">
          Today {formatDate(new Date(), 'MMM d, yyyy')}
        </h3>

        <div className="tabs">
          <div className="sm:hidden">
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              defaultValue={activeTab?.name}>
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
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
                    aria-current={
                      activeTab?.id === tab.id ? 'page' : undefined
                    }>
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
      </div>
    </div>
  );
};

export default Login;
