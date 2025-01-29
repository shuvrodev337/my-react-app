const withBorder = (WrappedComponent) => {
  return (props) => (
    <div className="border-2 border-purple-700 rounded-full">
      <WrappedComponent {...props} />
    </div>
  );
};

export default withBorder;
