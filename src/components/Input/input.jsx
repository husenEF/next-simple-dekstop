import classNames from '../../utils/classNames';

const Input = ({ className, ...rest }) => {
  return (
    <input
      type="tel"
      className={classNames(
        'mt-1 w-full rounded-md border border-basic-stroke text-basic-primary font-roboto font-normal bg-transparent p-2',
        'focus:border-accent-primary focus:text-accent-primary',
        'active:bg-transparent',
        className,
      )}
      {...rest}
    />
  );
};
export default Input;
