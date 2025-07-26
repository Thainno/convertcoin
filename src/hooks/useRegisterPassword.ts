import { useState, useCallback } from "react";

interface PasswordValidationErrors {
  password?: string;
  confirmPassword?: string;
}

export function useRegisterPassword() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<PasswordValidationErrors>({});

  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()[\]{};:'",.<>/?\\|`~_\-=+]).{8,}$/;

  //Valida a força da senha
  const validatePasswordStrength = useCallback((password: string): boolean => {
    return PASSWORD_REGEX.test(password);
  }, []);

  // Valida ambas as senhas e atualiza os erros
  const validatePasswords = useCallback((): boolean => {
    const currentErrors: PasswordValidationErrors = {};
    let isValid = true;

    //Validação da força da primeira senha
    if (!validatePasswordStrength(password)) {
      currentErrors.password =
        "A senha deve ter no mínimo 8 caracteres, incluindo número, letra maiúscula, minúscula e caractere especial.";
      isValid = false;
    }

    //Validação de senhas iguais
    if (password !== confirmPassword) {
      currentErrors.confirmPassword = "As senhas não coincidem.";
      isValid = false;
    } else if (confirmPassword && !validatePasswordStrength(confirmPassword)) {
      currentErrors.confirmPassword =
        "A confirmação da senha não atende aos requisitos de segurança.";
      isValid = false;
    }

    setErrors(currentErrors);
    return isValid;
  }, [password, confirmPassword, validatePasswordStrength]);

  // Função para resetar os erros
  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errors,
    validatePasswords,
    clearErrors,
    validatePasswordStrength,
  };
}
