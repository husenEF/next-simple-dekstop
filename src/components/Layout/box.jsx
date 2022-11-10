const BoxBorder = ({ children }) => {
  return (
    <div className="border border-basic-stroke rounded-lg lg:p-8 p-4">
      {children}
    </div>
  );
};

export default BoxBorder
