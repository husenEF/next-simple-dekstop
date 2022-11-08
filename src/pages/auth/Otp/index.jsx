import Resend from '../../../components/Icons/Resend';
import Input from '../../../components/Input/input';

const OtpForm = () => {

  return (
    <div className="login-form border border-basic-stroke rounded-lg p-8 mt-8">
      <h2 className="text-basic-primary text-lg font-poppins font-semibold">
        OTP Verification
      </h2>
      <p className="text-basic-secondary text-xs">
        Insert OTP code sent to your phone
      </p>
      <div class="grid grid-flow-col auto-rows-max gap-4 mt-4">
        <Input
          type="number"
          value="7"
          className="text-center text-white !font-bold text-[24px]"
        />
        <Input
          type="number"
          className="text-center text-white !font-bold text-[24px]"
        />
        <Input
          type="number"
          className="text-center text-white !font-bold text-[24px]"
        />
        <Input
          type="number"
          className="text-center text-white !font-bold text-[24px]"
        />
        <button
          className="rounded-md ml-3 bg-basic-primary border-basic-primary border px-8 py-2 text-bg-primary"
          type="button">
          Verify
        </button>
      </div>
      <div className="link mt-8">
        <button href="" className="flex flex-row justify-items-center text-accent-secondary text-lg">
          <Resend
            className="h-4 w-4 text-accent-secondary mr-2"
            height="18px"
            viewBox="0 0 18 22"
          />
          Terms and conditions
        </button>
      </div>
    </div>
  );
};
export default OtpForm;
