const HeaderSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <header className="relative h-60 text-white overflow-hidden">
      <div className="absolute inset-0"></div>
    </header>
  );
};

export default HeaderSection;
