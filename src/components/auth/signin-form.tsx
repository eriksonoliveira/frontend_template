"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Input } from "../ui/Input";
import { Button, BUTTON_SIZE } from "../ui/Button";

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
        placeholder="Digite seu email"
        value={emailField}
        onChange={updateEmailField}
      />
      <Input
        password
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={updatePasswordField}
      />
      <Button onClick={validateSignin} label={"Entrar"} size={BUTTON_SIZE.LARGE}/>
    </>
  );
};

export { SigninForm };
