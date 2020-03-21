$(() => {
  initialize()
})

async function initialize() {
  const { getCurrentCulture, getDateFormatByCulture } = await import('./utils.js')
}
