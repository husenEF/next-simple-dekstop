import Input from './input';

const InputGroup = ({ icon, ...rest }) => {
  return (
    <div className="relative mt-1">
      <Input {...rest} />
      {icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputGroup;
