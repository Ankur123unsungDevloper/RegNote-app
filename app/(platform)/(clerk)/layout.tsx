const ClerkLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative top-[100px] left-[500px] text-center items-center justify-center">
      {children}
    </div>
  );
};

export default ClerkLayout;