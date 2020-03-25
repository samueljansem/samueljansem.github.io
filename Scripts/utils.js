export const getCurrentCulture = () => {
  return window.navigator.language
}

export const getDateFormatByCulture = () => {
  if (window.navigator.language == 'en-US') return 'MM/DD/YYYY'
  if (window.navigator.language == 'pt-BR') return 'DD/MM/YYYY'
}

export const getDateKeyByDate = (date, type) => {
  let culture = getCurrentCulture()
  let day
  let week
  let month
  let year

  if (culture == 'en-US') {
    day = date.substr(3, 2)
    week = moment(date).isoWeek()
    month = date.substr(0, 2)
    year = date.substr(6, 4)
  }
  if (culture == 'pt-BR') {
    day = date.substr(0, 2)
    week = moment(date).isoWeek()
    month = date.substr(3, 2)
    year = date.substr(6, 4)
  }

  if (type == 'd') {
    return parseInt(`${year}${month}${day}`)
  }
  if (type == 'w') {
    return parseInt(`${year}${week}`)
  }
  if (type == 'm') {
    return parseInt(`${year}${month}`)
  }
}
