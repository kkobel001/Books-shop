export default function validateInfo(values) {
  const errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username requied';
  }

  // Email

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.emial = 'Email address is invalid';
  }

  if (!values.message) {
    errors.text = 'Text required';
  } else if (values.message.length < 30) {
    errors.message = 'Text is invalid';
  }
  return errors;
}
