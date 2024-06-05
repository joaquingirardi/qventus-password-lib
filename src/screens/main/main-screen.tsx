import {
  PasswordLib,
  PasswordValidationTypes,
} from "../../components/password-lib/password-lib";

const passwordOptions: Array<PasswordValidationTypes> = [
  "has-one-or-more-special-characters",
  "has-a-number-digit",
  "has-an-uppercase-letter",
  "has-no-consecutive-letters",
];

export const MainScreen = () => {
  return (
    <div className="main-screen">
      <div className="content-container">
        <div className="title">Password Component</div>
        <PasswordLib options={passwordOptions} />
        <div className="note-card">
          <div className="info-title">Information</div>
          <div className="content">
            This PasswordLib component is expected to receive the required
            validations as parameters and adjust accordingly. You can find more
            information in the README file.
          </div>
        </div>
      </div>
    </div>
  );
};
