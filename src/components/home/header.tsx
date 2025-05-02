import { Logo } from "../ui/logo";

const Header = () => {
  return (
    <div className="mt-6">
      <div className="lg:hidden">
        <Logo size={24} />
      </div>
    </div>
  );
};

export { Header };
