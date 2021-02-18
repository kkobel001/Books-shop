import { useState } from 'react';

const useForm = validate => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    subject: '',
    text: '',
  });

  const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting]=useState(false)

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

    // setIsSubmitting(true)
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
