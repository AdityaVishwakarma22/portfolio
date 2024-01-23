const Tabs = ({ children, onSelect, label }) => {
  return (
    <button className="" onClick={onSelect} id={label}>
      {children}
    </button>
  );
};

export default Tabs;
