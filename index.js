const adviceHTML = document.querySelector('.advice')
const advID = document.querySelector('.advID')

const generateAdv = async () => {
  fetch('https://api.adviceslip.com/advice', {
    cache: 'reload'
  })
  .then(r => r.json())
  .then(data => {
    advID.innerHTML = ` #${data.slip.id}`
    adviceHTML.innerHTML = `"${data.slip.advice}"`
  })
}