"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Input } from "../ui/Input";
import { Button, BUTTON_SIZE } from "../ui/Button";

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
        placeholder="Digite seu nome de usuário"
        value={nameField}
        onChange={updateNameField}
      />
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
      <Button
        onClick={validateSignin}
        label={"Entrar"}
        size={BUTTON_SIZE.LARGE}
      />
    </>
  );
};

export { SignupForm };
