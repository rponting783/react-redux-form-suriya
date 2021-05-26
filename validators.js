const validators = {
  required: (message) =>
    value => (value || typeof value === 'number' ? undefined : message),
  maxLength: (max) =>
    (value, formValues, instanceRef, fieldName) => {
      console.log(value, formValues, instanceRef, fieldName);
      return value && value.length > max ? `Must be ${max} characters or less` : undefined
    }
}

export default validators;