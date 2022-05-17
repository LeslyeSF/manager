export const phoneMask = (value : string) => {
  value=value.replace(/\D/g,'') //Remove tudo o que não é dígito
  value=value.replace(/^(\d{2})(\d)/g,'($1) $2') //Coloca parênteses em volta dos dois primeiros dígitos
  value=value.replace(/(\d)(\d{4})$/,'$1-$2') //Coloca hífen entre o quarto e o quinto dígitos
  return value
};