$(() => {
  initialize()
})

async function initialize() {
  const { getCurrentCulture, getDateFormatByCulture, getDateKeyByDate } = await import('./utils.js')
  let date = '03/29/2020'
  let type = 'm'
  let dk = getDateKeyByDate(date, type)
  console.log(dk)
}
