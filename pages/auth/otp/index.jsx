import Alert from '../../../src/components/Alert';
import Logo from '../../../src/components/Icons/Logo';
import MainLayout from '../../../src/components/Layout';
import { useOtp } from '../../../src/hooks/useRegisters';
import OtpForm from '../../../src/pages/auth/Otp';

import { formatDate } from '../../../src/utils/format';

const OtpPage = () => {
  const { isError, error } = useOtp();
  return (
    <MainLayout>
      <h3 className="text-basic-secondary">
        Today {formatDate(new Date(), 'MMM d, yyyy')}
      </h3>

      <OtpForm />
    </MainLayout>
  );
  return (
    <div className="flex h-screen">
      <div className="bg-bg-primary flex-1 p-12">
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
      <div className="bg-bg-secondary flex-auto p-12">
        <h3 className="text-basic-secondary">
          Today {formatDate(new Date(), 'MMM d, yyyy')}
        </h3>

        <OtpForm />
      </div>
    </div>
  );
};

export default OtpPage;
