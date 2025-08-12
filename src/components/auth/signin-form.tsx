"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Input } from "../Input";
import { Button, BUTTON_SIZE } from "../Button";

const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const updateEmailField = useCallback(
    (value: string) => {
      setEmailField(value);
    },
    [setEmailField]
  );

  const updatePasswordField = useCallback(
    (value: string) => {
      setPasswordField(value);
    },
    [setPasswordField]
  );

  const validateSignin = useCallback(() => {
    router.replace("/");
  }, [router]);

  return (
    <>
      <Input
        placeholder="E-mail"
        value={emailField}
        onChange={updateEmailField}
      />
      <Input
        password
        placeholder="Password"
        value={passwordField}
        onChange={updatePasswordField}
      />
      <Button onClick={validateSignin} label={"Sign in"} size={BUTTON_SIZE.LARGE}/>
    </>
  );
};

export { SigninForm };
