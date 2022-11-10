import Image from 'next/image';
import { lazy, Suspense, useEffect, useState } from 'react';

import MainLayout from '../src/components/Layout';
import classNames from '../src/utils/classNames';

const tabs = [
  {
    id: 'information',
    name: 'Information',
    component: lazy(() => import('../src/pages/user/Information')),
  },
  {
    id: 'career',
    name: 'Career',
    component: lazy(() => import('../src/pages/user/Career')),
  },
  {
    id: 'education',
    name: 'Education',
    component: lazy(() => import('../src/pages/user/Education')),
  },
  {
    id: 'gallery',
    name: 'Gallery',
    component: lazy(() => import('../src/pages/user/Gallery')),
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(null);
  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const renderTab = () => {
    const tab = tabs.find((e) => activeTab.id === e.id);
    if ('component' in tab) {
      const { component: Component } = tab;
      // return <Component />;
      return (
        <Suspense fallback={<span>Loading...</span>}>
          <Component />
        </Suspense>
      );
    }
  };
  useEffect(() => {
    if (activeTab === null) {
      setActiveTab(tabs[0]);
    }
  }, []);

  return (
    <MainLayout rightContainer="relative overflow-auto">
      <div className="absolute left-0 top-0 right-0 h-80 z-0">
        <Image
          src="https://picsum.photos/seed/picsum/800/300"
          alt="background"
          fill
        />
      </div>
      <div
        className={classNames(
          'content relative rounded-lg lg:p-8 p-3 z-10 mt-36 bg-bg-primary',
        )}>
        <h1 className="text-[32px] text-basic-primary font-semibold">
          Wong Fei Hung
        </h1>
        <span className="font-poppins text-basic-secondary font-normal text-sm">
          Level 1 - #SG769891
        </span>
        <div className="tabs mt-8">
          <div className="sm:hidden mb-4">
            <select
              id="tabs"
              name="tabs"
              onChange={(e) => {
                const tab = tabs.find((t) => e.target.value === t.id);
                handleTab(tab);
              }}
              className="block w-full rounded-md bg-transparent text-basic-primary border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              defaultValue={activeTab?.name}>
              {tabs.map((tab) => (
                <option key={tab.name} value={tab.id} className="bg-bg-thriary">
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
                    aria-current={
                      activeTab?.id === tab.id ? 'page' : undefined
                    }>
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="tab-contents lg:mt-8 sm:mt-6">
            {activeTab && renderTab(activeTab)}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
