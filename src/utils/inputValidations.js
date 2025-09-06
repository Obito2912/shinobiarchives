/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

const email_validation = {
  name: "email",
  label: "Email",
  type: "email",
  id: "email",
  placeholder: "Enter your email",
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Not a valid email",
    },
  },
};

const password_validation = {
  name: "password",
  label: "Password",
  type: "password",
  id: "password",
  placeholder: "Enter your password",
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    minLength: {
      value: 6,
      message: "Min characters 6",
    },
  },
};

const name_validation = {
  name: "name",
  label: "Name",
  type: "text",
  id: "name",
  placeholder: "Enter your name",
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
    minLength: {
      value: 2,
      message: "2 characters min",
    },
  },
};

const avatar_url_validation = {
  name: "avatarUrl",
  label: "Avatar URL",
  type: "url",
  id: "avatar-url",
  placeholder: "https://example.com",
  validation: {
    required: { value: true, message: "Required" },
    pattern: {
      value: /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/i,
      message: "Not a valid URL",
    },
  },
};

// const desc_validation = {
//   name: "description",
//   label: "description",
//   multiline: true,
//   id: "description",
//   placeholder: "write description ...",
//   validation: {
//     required: {
//       value: true,
//       message: "required",
//     },
//     maxLength: {
//       value: 200,
//       message: "200 characters max",
//     },
//   },
// };

// const num_validation = {
//   name: "num",
//   label: "number",
//   type: "number",
//   id: "num",
//   placeholder: "write a random number",
//   validation: {
//     required: {
//       value: true,
//       message: "required",
//     },
//   },
// };

export {
  email_validation,
  password_validation,
  name_validation,
  avatar_url_validation,
  // desc_validation,
  // num_validation,
};
