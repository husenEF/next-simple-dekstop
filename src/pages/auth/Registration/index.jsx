import useRegistationModule from './module';
import RegistrationView from './view';

const Registration = () => {
  const {
    countryList,
    selected,
    form,
    isShowPassword,
    handleSelect,
    togglePassword,
    saveData,
    handleChange,
    handleReset,
  } = useRegistationModule();

  return (
    <RegistrationView
      data={{ selected, isShowPassword, countryList, form }}
      event={{ handleSelect, togglePassword, handleChange, handleReset }}
      onSave={saveData}
    />
  );
};

export default Registration;
