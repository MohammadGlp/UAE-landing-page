const Table = ({ head, headChildren, children, className }) => {
  return (
    <table
      className={`border-collapse border border-white-gray-5 ${className}`}
    >
      {head ? <thead>{headChildren}</thead> : null}
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
