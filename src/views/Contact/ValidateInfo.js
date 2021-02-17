export default function validateInfo(values) {
  const errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username requied';
  }

  // Email

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.emial = 'Email address is incalid';
  }

  if (!values.text) {
    errors.text = 'Email required';
  } else if (values.text.length < 30) {
    errors.text = 'Text is incalid';
  }
  return errors;
}
