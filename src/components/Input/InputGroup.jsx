import React from 'react';
import classNames from '../../utils/classNames';
import Input from './input';

// const InputGroup = ({ rightIcon, leftIcon, className, ...rest }) => {
//   return (
//     <div className="relative mt-1">
//       {leftIcon && (
//         <div className="absolute inset-y-0 left-0-0 flex items-center pl-3">
//           {leftIcon}
//         </div>
//       )}
//       <Input
//         className={classNames(
//           className,
//           leftIcon ? 'pl-9' : '',
//           rightIcon ? 'pr-9' : '',
//         )}
//         {...rest}
//       />
//       {rightIcon && (
//         <div className="absolute inset-y-0 right-0 flex items-center pr-3">
//           {rightIcon}
//         </div>
//       )}
//     </div>
//   );
// };

// eslint-disable-next-line react/display-name
const InputGroup = React.forwardRef((props, ref) => {
  const { rightIcon, leftIcon, className, ...rest } = props;
  return (
    <div className="relative mt-1">
      {leftIcon && (
        <div className="absolute inset-y-0 left-0-0 flex items-center pl-3">
          {leftIcon}
        </div>
      )}
      <Input
        className={classNames(
          className,
          leftIcon ? 'pl-9' : '',
          rightIcon ? 'pr-9' : '',
        )}
        ref={ref}
        {...rest}
      />
      {rightIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {rightIcon}
        </div>
      )}
    </div>
  );
});

export default InputGroup;
