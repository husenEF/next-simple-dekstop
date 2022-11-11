import Link from 'next/link';

import Logo from '../Icons/Logo';
import Alert from '../Alert';
import classNames from '../../utils/classNames';
import { useGlobalAlertConsumer } from '../../context/globalAlert';

const MainLayout = ({ children, rightContainer }) => {
  const { alert, removeAlert } = useGlobalAlertConsumer();
  return (
    <div className="flex lg:flex-row flex-col lg:h-screen">
      <div className="bg-bg-primary lg:p-12 p-3 lg:w-2/6 w-full">
        <h1 className="">
          <Link href="/" className="text-basic-primary flex">
            <Logo className="mr-2" />
            COINPRIVY
          </Link>
        </h1>
        <div className="mt-14 lg:px-7 px-2">
          <h2 className="text-basic-primary text-[32px] font-semibold">
            Welcome to{'\r\n'}Coinprivy
          </h2>
          <p className="text-basic-secondary">
            is a secure platform that makes it easy to buy, sell, and store
            cryptocurrency like Bitcoin, Ethereum, and more. Based in the USA
          </p>
          {alert?.message !== '' && (
            <Alert
              className="mr-2"
              message={alert?.message}
              type={alert?.status}
              title={alert?.title}
              onClose={removeAlert}
            />
          )}
        </div>
      </div>
      <div
        className={classNames(
          'bg-bg-secondary lg:w-4/6 lg:p-12 p-2 w-full pb-10',
          rightContainer,
        )}>
        {children}
      </div>
    </div>
  );
};
export default MainLayout;
