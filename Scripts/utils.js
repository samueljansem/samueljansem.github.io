export const getCurrentCulture = () => {
  return window.navigator.language
}

export const getDateFormatByCulture = () => {
  if (window.navigator.language == 'en-US') return 'MM/DD/YYYY'
  if (window.navigator.language == 'pt-BR') return 'DD/MM/YYYY'
}
