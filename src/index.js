import './styles/style.sass'
import './styles/reset.css'

import reactFinanceAppImg from './assets/financeapp.png'
import searchEnergyTelegramBot from './assets/searchEnergyTelegramBot.jpg'
import avatar from './assets/avatar.jpg'

const projects = [
  {
    imgPath: reactFinanceAppImg,
    imgAlt: 'react finance app',
    name: 'React Finance App',
    description: [
      {
        title: 'Описание:',
        text: 'Просто pet проект для ведения личных финансов и капитала',
      },
      {
        title: 'Задача:',
        text: 'Вести учет всех транзакций, вести капитал, сортировать по категориям, вести аналитику',
      },
      {
        title: 'Технологии:',
        text: 'JS, React, HTML, CSS, Vite',
      },
    ],
    link: 'https://react-finance-app.onrender.com/',
    linkGH: 'https://github.com/anikeydev/react-finance-app',
  },
  {
    imgPath: searchEnergyTelegramBot,
    imgAlt: 'react finance app',
    name: 'React Finance App',
    description: [
      {
        title: 'Описание:',
        text: 'Просто pet проект для ведения личных финансов и капитала',
      },
      {
        title: 'Задача:',
        text: 'Вести учет всех транзакций, вести капитал, сортировать по категориям, вести аналитику',
      },
      {
        title: 'Технологии:',
        text: 'JS, React, HTML, CSS, Vite',
      },
    ],
    link: 'https://react-finance-app.onrender.com/',
    linkGH: 'https://github.com/anikeydev/react-finance-app',
  },
  {
    imgPath: avatar,
    imgAlt: 'react finance app',
    name: 'React Finance App',
    description: [
      {
        title: 'Описание:',
        text: 'Просто pet проект для ведения личных финансов и капитала',
      },
      {
        title: 'Задача:',
        text: 'Вести учет всех транзакций, вести капитал, сортировать по категориям, вести аналитику',
      },
      {
        title: 'Технологии:',
        text: 'JS, React, HTML, CSS, Vite',
      },
    ],
    link: 'https://react-finance-app.onrender.com/',
    linkGH: 'https://github.com/anikeydev/react-finance-app',
  },
]

const $projects = document.getElementById('projects')
const $list = document.createElement('ul')
$list.classList.add('projects__list')

const liItems = projects.map((item) => {
  return `<li class="projects__item">
            <img
              class="projects__img"
              src=${item.imgPath}
              alt=${item.imgAlt}/>
            <h3 class="projects__name">${item.name}</h3>
            <div class="projects__description">
                ${item.description
                  .map(
                    (item) =>
                      `<p><strong>${item.title}</strong> ${item.text}</p>`
                  )
                  .join(' ')}
            </div>
            <div class="projects__buttons">
              <a
                  class="projects__link"
                  href=${item.link}
                  target="_blank"
              >Web...</a>
              <a
                  class="projects__link"
                  href=${item.linkGH}
                  target="_blank"
              >GitHub...</a>
            </div>
        </li>   `
})

$list.insertAdjacentHTML('beforeend', liItems.toString())
$projects.appendChild($list)

{
  /* <img
class="projects__img"
src=${item.imgPath}
alt=${item.imgAlt} /> */
}
