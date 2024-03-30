"use strict"

document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.querySelector('.main__login-form--pay');
    form?.addEventListener('submit', (event) => {
        alert('Оплата прошла успешно!')
    })
    const search = document.querySelector('.search__input');
    const dropdown = document.querySelector('.search__results');
    const linksList = [
        {
            carName: 'Honda Accord', 
            link: 'pages/accord.html'
        },
        {
            carName: 'Toyota Camry', 
            link:  `${window.location.origin}/pages/camry.html`
        },
        {
            carName: 'Toyota Chaser', 
            link: `${window.location.origin}/pages/chaser.html`
        },
        {
            carName: 'Toyota Cresta', 
            link: `${window.location.origin}/pages/cresta.html`
        },
        {
            carName: 'Toyota Crown', 
            link: `${window.location.origin}/pages/crown.html`
        },
        {
            carName: 'Toyota Land Cruiser', 
            link: `${window.location.origin}/pages/landcruiser.html`
        },
        {
            carName: 'Lexus LS 300', 
            link: `${window.location.origin}/pages/ls300.html`
        },
        {
            carName: 'Toyota Mark II', 
            link: `${window.location.origin}/pages/markII.html`
        },
        {
            carName: 'Toyota Supra', 
            link: `${window.location.origin}/pages/supra.html`
        },
    ]
    function showDropDown(event) {
        const text = event.target.value;
        if (text === "") {
            dropdown.classList.remove('search__results--open')
        } else {
            
            const filteredLinksList = linksList.filter(function (linkItem) {
                return linkItem.carName.toLowerCase().includes(text)
            }
            )
            if (filteredLinksList.length > 0) {
                dropdown.classList.add('search__results--open')   
            } else {
                dropdown.classList.remove('search__results--open')
            }
            dropdown.innerHTML = ''
            filteredLinksList.forEach(item => {
                const li = document.createElement('li')
                const a = document.createElement('a') 
                a.setAttribute('href', item.link)
                a.textContent = item.carName
                window.addEventListener('click' , (event) => {
                    dropdown.classList.remove('search__results--open')
                }, {once: true}) 
                li.appendChild(a)
                dropdown.appendChild(li)
            })
        }
    }
    search.addEventListener('click' , (event) => {
        event.stopPropagation()
    }) 
    search.addEventListener("input", (event) => {
        showDropDown(event)
    } )
    search.addEventListener("focus", (event) => {
        showDropDown(event)
    } )
  });

