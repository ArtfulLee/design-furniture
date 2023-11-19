const tabs = document.querySelector('.last-chance')
const tabButton = document.querySelectorAll('.last-chance__tab-item')
const contents = document.querySelectorAll('.last-chance__tab')

tabs.onclick = (e) => {
  const id = e.target.dataset.id
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove('active')
    })
    e.target.classList.add('active')

    contents.forEach((content) => {
      content.classList.remove('active')
    })
    const element = document.getElementById(id)
    element.classList.add('active')
  }
}
