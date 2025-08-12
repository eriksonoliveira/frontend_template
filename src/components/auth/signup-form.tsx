"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Input } from "../Input";
import { Button, BUTTON_SIZE } from "../Button";

const SignupForm = () => {
  const router = useRouter();

  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const updateNameField = useCallback(
    (value: string) => {
      setNameField(value);
    },
    [setNameField]
  );

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
        placeholder="Create your user name"
        value={nameField}
        onChange={updateNameField}
      />
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
      <Button
        onClick={validateSignin}
        label={"Sign up"}
        size={BUTTON_SIZE.LARGE}
      />
    </>
  );
};

export { SignupForm };
