let startGame = document.querySelector('.start_game')
let card = document.querySelectorAll('.card img')
let characters = ['ricky', 'morty', 'summer', 'beth', 'jerry', 'cops', 'dr_wong', 'evil_morty']
let card1 = ''
let card2 = ''

function shuffle() {
    startGame.style.display = 'none'

    card1 = ''
    card2 = ''

    const duplicatedCharacters = [...characters, ...characters]

    for (let i = 0; i < card.length; i++) {
        card[i].style.opacity = '0'
        card[i].classList.remove('same')
    }

    for (let i = 0; i < card.length; i++) {
        const random = duplicatedCharacters.sort(() => Math.random() - 0.5)

        for (let i = 0; i < random.length; i++) {
            card[i].src = `images/${random[i]}.jpeg`
        }
    }
}

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        card[i].style.opacity = '100%'

        if (card1 == '') {
            card1 = card[i].src
            card1Number = i
        } else if (card1 != '' && card2 == '') {
            card2 = card[i].src
            card2Number = i

            if (card1 == card2) {
                card1 = ''
                card2 = ''
                card[card1Number].classList.add('same')
                card[card2Number].classList.add('same')
            }

            if (card1 != card2) {
                card1 = ''
                card2 = ''
                setTimeout(() => {
                    card[card1Number].style.opacity = '0'
                    card[card2Number].style.opacity = '0'
                }, 400)
            }
        }
    })
}