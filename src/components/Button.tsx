import { ValuesOf } from "@/types";

const BUTTON_SIZE = {
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3,
} as const;

type Props = {
  label: string;
  onClick?: () => void;
  size: ValuesOf<typeof BUTTON_SIZE>;
};

const Button = (props: Props) => {
  const getButtonSize = () => {
    switch (props.size) {
      case BUTTON_SIZE.LARGE:
        return "h-14 text-lg";
      case BUTTON_SIZE.MEDIUM:
        return "h-10 text-md";
      case BUTTON_SIZE.SMALL:
        return "h-7 text-xs";
    }
  };

  return (
    <div
      onClick={props.onClick}
      className={`flex justify-center items-center cursor-pointer bg-white text-black font-bold rounded-3xl ${getButtonSize()}`}
    >
      {props.label}
    </div>
  );
};

export { Button, BUTTON_SIZE };
