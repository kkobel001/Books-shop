export default function validateInfo(values) {
  const errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username requied';
  }

  // Email

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.%+-]+\.[A-Z]{2,}$/i.text(values.email)) {
    errors.emial = 'Email address is incalid';
  }
  return errors;
}
