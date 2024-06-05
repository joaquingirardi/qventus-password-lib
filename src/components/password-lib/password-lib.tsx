import { useState } from "react";
import _ from "lodash";
import { FaEye, FaEyeSlash, FaCheck, FaTimes } from "react-icons/fa";

export type PasswordValidationTypes =
  | "has-one-or-more-special-characters"
  | "has-a-number-digit"
  | "has-an-uppercase-letter"
  | "has-no-consecutive-letters";

type PasswordLibProps = {
  options: PasswordValidationTypes[];
};

const hasSpecialCharacter = (password: string) => /[!@#$%^&*]/.test(password);
const hasNumber = (password: string) => /\d/.test(password);
const hasUppercaseLetter = (password: string) => /[A-Z]/.test(password);
const hasNoConsecutiveLetters = (password: string) => !/(.)\1/.test(password);

export const PasswordLib = ({ options }: PasswordLibProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password: string) => {
    const validations: { [key in PasswordValidationTypes]: boolean } = {
      "has-one-or-more-special-characters": hasSpecialCharacter(password),
      "has-a-number-digit": hasNumber(password),
      "has-an-uppercase-letter": hasUppercaseLetter(password),
      "has-no-consecutive-letters": hasNoConsecutiveLetters(password),
    };

    return options.reduce((acc, option) => {
      acc[option] = validations[option];
      return acc;
    }, {} as { [key: string]: boolean });
  };

  const validationStatus = validatePassword(password);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="password-lib">
      <div className="input-container">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        {showPassword ? (
          <FaEyeSlash onClick={togglePasswordVisibility} />
        ) : (
          <FaEye onClick={togglePasswordVisibility} />
        )}
      </div>
      <ul>
        {options.map((option) => (
          <li
            key={option}
            data-testid={`validation-item-${option}`}
            style={{ color: validationStatus[option] ? "green" : "red" }}
          >
            {validationStatus[option] ? (
              <FaCheck style={{ color: "green" }} />
            ) : (
              <FaTimes style={{ color: "red" }} />
            )}
            <span>{_.startCase(_.replace(option, /-/g, " "))}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
