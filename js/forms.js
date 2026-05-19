// ── FORM MANAGER ──
const FormManager = (() => {
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateRequired = (value) => {
    return value.trim().length > 0;
  };

  const validateMinLength = (value, min) => {
    return value.length >= min;
  };

  const showError = (input, message) => {
    input.classList.add('is-error');
    const error = document.createElement('div');
    error.className = 'form-error';
    error.textContent = message;
    input.parentElement.appendChild(error);
  };

  const clearError = (input) => {
    input.classList.remove('is-error');
    const error = input.parentElement.querySelector('.form-error');
    if (error) error.remove();
  };

  const validateForm = (formElement) => {
    let isValid = true;
    const inputs = formElement.querySelectorAll('[data-validate]');

    inputs.forEach(input => {
      clearError(input);

      const validators = input.dataset.validate.split('|');

      validators.forEach(validator => {
        const [rule, ...args] = validator.split(':');

        let valid = true;
        let message = '';

        switch (rule) {
          case 'required':
            valid = validateRequired(input.value);
            message = 'Este campo é obrigatório';
            break;
          case 'email':
            valid = validateEmail(input.value);
            message = 'Digite um email válido';
            break;
          case 'min':
            valid = validateMinLength(input.value, parseInt(args[0]));
            message = `Mínimo de ${args[0]} caracteres`;
            break;
          case 'max':
            valid = input.value.length <= parseInt(args[0]);
            message = `Máximo de ${args[0]} caracteres`;
            break;
        }

        if (!valid) {
          showError(input, message);
          isValid = false;
        }
      });
    });

    return isValid;
  };

  const serialize = (formElement) => {
    const data = new FormData(formElement);
    return Object.fromEntries(data);
  };

  return {
    validateForm,
    serialize,
    validateEmail,
    validateRequired
  };
})();
