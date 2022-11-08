import Resend from '../../../components/Icons/Resend';
import Input from '../../../components/Input/input';
import { useOtp } from '../../../hooks/useRegisters';
import { logger } from '../../../utils/logger';

const OtpForm = () => {
  const { otpCheck, otpRequest, data, setData, resetError } = useOtp();

  const inputfocus = (elmnt) => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log('next');

      const next = elmnt.target.tabIndex;
      if (next < 4) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetError();
    const otpString = Object.values(data).join('');
    otpCheck.mutate(otpString);
    return false;
  };

  return (
    <div className="login-form border border-basic-stroke rounded-lg p-8 mt-8">
      <h2 className="text-basic-primary text-lg font-poppins font-semibold">
        OTP Verification
      </h2>
      <p className="text-basic-secondary text-xs">
        Insert OTP code sent to your phone
      </p>
      <form onSubmit={handleSubmit}>
        <div class="grid grid-flow-col auto-rows-max gap-4 mt-4">
          <Input
            type="number"
            value={data.otp1}
            className="text-center text-white !font-bold text-[24px]"
            onChange={(e) => setData({ ...data, ['otp1']: e.target.value })}
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
            tabIndex="1"
          />
          <Input
            type="number"
            value={data.otp2}
            className="text-center text-white !font-bold text-[24px]"
            onChange={(e) => setData({ ...data, ['otp2']: e.target.value })}
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
            tabIndex="2"
          />
          <Input
            type="number"
            value={data.otp3}
            className="text-center text-white !font-bold text-[24px]"
            onChange={(e) => setData({ ...data, ['otp3']: e.target.value })}
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
            tabIndex="3"
          />
          <Input
            type="number"
            className="text-center text-white !font-bold text-[24px]"
            onChange={(e) => setData({ ...data, ['otp4']: e.target.value })}
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
            tabIndex="4"
          />
          <button
            className="rounded-md ml-3 bg-basic-primary border-basic-primary border px-8 py-2 text-bg-primary"
            type="onSubmit"
            disabled={otpCheck.isLoading}>
            Verify
          </button>
        </div>
        <div className="link mt-8">
          <button
            href=""
            className="flex flex-row justify-items-center text-accent-secondary text-lg">
            <Resend
              className="h-4 w-4 text-accent-secondary mr-2"
              height="18px"
              viewBox="0 0 18 22"
            />
            Terms and conditions
          </button>
        </div>
      </form>
    </div>
  );
};
export default OtpForm;
