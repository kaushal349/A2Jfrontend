import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required()
});

export function validate_name (data) {
  console.log("I ma here to validate_name");
  schema.isValid({ name: data }).then(function(valid) {
    valid ? console.log("valid data") : console.log("invalid data");
  });
};
