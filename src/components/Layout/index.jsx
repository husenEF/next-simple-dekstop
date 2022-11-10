import { formatDate } from '../../utils/format';

import Logo from '../Icons/Logo';
import Alert from '../Alert';
import classNames from '../../utils/classNames';

const MainLayout = ({ children, rightContainer }) => {
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
          <Alert className="mr-2" />
        </div>
      </div>
      <div
        className={classNames(
          'bg-bg-secondary flex-auto p-12',
          rightContainer,
        )}>
        {children}
      </div>
    </div>
  );
};
export default MainLayout;
