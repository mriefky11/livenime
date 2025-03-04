const Badge = (props) => {
  const {children, index} = props;
  return (
    <span
      key={index}
      className='bg-sky-500 text-white px-3 py-1 rounded-lg text-sm font-semibold'
    >
      {children}
    </span>
  );
};

export default Badge;
