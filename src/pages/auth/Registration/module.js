import { useState } from 'react';

import { useRegister } from '../../../hooks/useRegisters';
import countryCode from '../../../data/countryCode';

const useRegistationModule = () => {
  const saveMutation = useRegister();

  const countryList = countryCode.map((e) => {
    const newData = { ...e };
    newData.name = `${newData.name} (${newData.dial_code})`;
    newData.id = e.code;
    return newData;
  });
  
  const [selected, setSelected] = useState(
    countryList.find((e) => e.code === 'ID'),
  );
  const [form, setForm] = useState({
    countryCode: selected?.code,
    phone: '',
    password: '',
    latlong: '-7.8011945,110.364917',
    device_type: 2,
    device_token: null,
  });

  const [isShowPassword, togglePassword] = useState(false);
  const saveData = (data) => {
    saveMutation.mutate(data);
  };

  const handleSelect = (e) => {
    console.log({ handleSelect: e });
    setSelected(e);
  };
  const handleReset = () => {
    setForm({ countryCode: '', phone: '', password: '' });
  };

  const handleChange = (key = 'phone', value = '') => {
    setForm({ ...form, [key]: value });
  };

  return {
    countryList,
    selected,
    isShowPassword,
    form,
    handleSelect,
    togglePassword,
    saveData,
    handleReset,
    handleChange,
  };
};

export default useRegistationModule;
