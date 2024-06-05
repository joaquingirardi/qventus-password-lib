![Qventus Logo](/src/assets/logo-qventus-white.svg)

> Password Library

Welcome to the Qventus Password Library repository! This library provides a reusable React component for password validation.

## Table of Contents

- [Getting Started](#getting-started)
- [Customization](#customization)
- [Testing](#testing)
- [Contact](#contact)

## Getting Started

To get started with the Qventus Password Library, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/joaquingirardi/qventus-password-library.git
```

2. Navigate into the project directory:

```bash
cd qventus-password-library
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run app
```

5. Open your browser and visit `http://localhost:3000` to view the library.

## Customization

The Qventus Password Library component can be easily extended and customized to suit your specific requirements. You can modify the styling, add or remove validation rules, or adjust the behavior as needed.

```javascript
const passwordReqs = [
  "has-one-or-more-special-characters",
  "has-a-number-digit",
  "has-an-uppercase-letter",
  // Here you can add the validations keys, then inside the component the validation functions.
];
```

```javascript
<PasswordLib options={passwordReqs} />
```

## Testing

Automated tests are included in this project to ensure the correctness of the password validation component. You can run the tests using the following command:

```bash
npm run test
```

## Contact

For any inquiries or support, feel free to contact me at contact@joaquingirardi.com.

---

**Note:** This library is responsive and can be seamlessly integrated into your web applications. Enjoy using the Qventus Password Library to enhance the security of your applications!
