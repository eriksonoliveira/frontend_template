"use client";

import { ChangeEvent, useCallback, useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

type Props = {
  placeholder: string;
  password?: boolean;
  value?: string;
  filled?: boolean;
  icon?: IconDefinition;
  onChange?: (newValue: string) => void;
};

const Input = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <div
      className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${
        props.filled && "bg-gray-700"
      }`}
    >
      {props.icon && (
        <FontAwesomeIcon
          icon={props.icon}
          className="ml-4 size-6 text-gray-500"
        />
      )}
      <input
        type={props.password && showPassword == false ? "password" : "text"}
        className="flex-1 outline-none bg-transparent h-full px-4"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          props.onChange && props.onChange(e.target.value)
        }
      />
      {props.password && (
        <FontAwesomeIcon
          icon={showPassword ? faEye : faEyeSlash}
          className="size-6 text-gray-500 mr-4 cursor-pointer"
          onClick={togglePasswordVisibility}
        />
      )}
    </div>
  );
};

export { Input };
