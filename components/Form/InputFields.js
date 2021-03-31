export const InputFields = [
  {
    name: "name",
    placeholder: "Your first name",
    ref: { required: "NAME FIELD IS REQUIRED" },
  },
  {
    name: "lastName",
    placeholder: "Your last name",
    ref: { required: "LAST NAME FIELD IS REQUIRED" },
  },
  {
    name: "email",
    placeholder: "Your e-mail",
    ref: {
      required: "EMAIL FIELD IS REQUIRED",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "INVALID EMAIL ADDRESS",
      },
    },
  },
];
