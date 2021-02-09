import { useState } from 'react';

const useForm = validate => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return { handleChange, values, handleSubmit, errors, isSubmitting };
};

export default useForm;
