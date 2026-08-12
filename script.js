/* ============================================
   🌸 CARTA DE ANIVERSÁRIO
   SCRIPT PRINCIPAL
============================================ */

(() => {

'use strict';


/* ==================================================
   💖 PERSONALIZAÇÃO
   ALTERE APENAS ESTA PARTE
================================================== */


/* 📸 FOTOS

   Coloque suas fotos dentro da pasta "fotos".

   Exemplo:

   fotos/foto1.jpg
   fotos/foto4.jpg
   fotos/foto3.jpg
   fotos/foto2.jpg
   fotos/foto5.jpg
*/
const photos = [

    {
        image: 'fotos/foto1.jpg',
        message: 'Cada momento ao seu lado é um presente... 🌸'
    },

    {
        image: 'fotos/foto2.jpg',
        message: 'Seu sorriso ilumina meus dias... ✨'
    },

    {
        image: 'fotos/foto3.jpg',
        message: 'Você é a melhor parte da minha história... 💖'
    },

    {
        image: 'fotos/foto4.jpg',
        message: 'Lembra desse dia? Foi tão especial... 💕'
    },

    {
        image: 'fotos/foto5.jpg',
        message: 'Ter você na minha vida é um sonho... 🌷'
    }

];


/* 💌 CARTA

   Escreva aqui a mensagem que quiser.

*/

const birthdayLetter = `
Meu amor,

Hoje é um dia muito especial — o dia em que o mundo
te recebeu e ficou muito mais bonito. 🌸

Quero aproveitar este momento para te dizer o quanto
você é importante para mim.

Cada dia ao seu lado é um presente que eu jamais
vou me cansar de agradecer.

Seu sorriso ilumina meus dias e seu jeito único
faz tudo ficar mais especial.

Neste novo ano da sua vida, desejo que todos
os seus sonhos se realizem.

Que você continue sendo essa pessoa incrível,
forte, carinhosa e maravilhosa.

Obrigado(a) por existir.

Obrigado(a) por cada abraço,
cada sorriso e cada momento.

Espero continuar fazendo parte
da sua história.

Com todo o meu amor,

Feliz Aniversário! 🎂🎉

Eu te amo! ❤️
`.trim();


/* 💕 FRASES DA DECLARAÇÃO */

const declarationPhrases = [

    'Desde o dia em que te conheci...',

    'algo dentro de mim mudou para sempre.',

    'Você entrou na minha vida como uma brisa suave',

    'e transformou tudo ao seu redor. 🌸',

    'Cada conversa, cada sorriso, cada olhar...',

    'foi construindo algo que eu nunca imaginei viver.',

    'Você me mostrou o que é o amor de verdade.',

    'Um amor leve, sincero e profundo.',

    'Sou imensamente grato(a) por ter você.',

    'E por cada momento que passamos juntos.',

    'Você é a razão do meu sorriso mais sincero.',

    'Eu te amo mais do que palavras podem dizer. ❤️'

];


/* 🎵 MÚSICA

   Coloque o arquivo na mesma pasta do index.html.

   Exemplo:

   musica.mp3

   Depois coloque aqui:

*/

const MUSIC_FILE = 'musica.mp3';


/* ==================================================
   🔧 ELEMENTOS
================================================== */

const screens = {

    welcome:
        document.getElementById('screenWelcome'),

    photos:
        document.getElementById('screenPhotos'),

    love:
        document.getElementById('screenLove'),

    declaration:
        document.getElementById('screenDeclaration'),

    envelope:
        document.getElementById('screenEnvelope'),

    final:
        document.getElementById('screenFinal')

};


const btnStart =
    document.getElementById('btnStart');

const btnYes =
    document.getElementById('btnYes');

const btnNo =
    document.getElementById('btnNo');

const loveReaction =
    document.getElementById('loveReaction');

const declarationText =
    document.getElementById('declarationText');

const declarationHearts =
    document.getElementById('declarationHearts');

const envelopeWrapper =
    document.getElementById('envelopeWrapper');

const letterContent =
    document.getElementById('letterContent');

const continueButton =
    document.getElementById('continueButton');

const musicToggle =
    document.getElementById('musicToggle');

const photoPlaceholder =
    document.getElementById('photoPlaceholder');

const photoMessage =
    document.getElementById('photoMessage');

const photoDots =
    document.getElementById('photoDots');

const particlesBg =
    document.getElementById('particlesBg');

const petalsContainer =
    document.getElementById('petalsContainer');

const confettiContainer =
    document.getElementById('confettiContainer');

const finalHearts =
    document.getElementById('finalHearts');

const finalTitle =
    document.getElementById('finalTitle');

const finalMessage =
    document.getElementById('finalMessage');


/* ==================================================
   🎵 MÚSICA
================================================== */

const audio =
    new Audio(MUSIC_FILE);

audio.loop = true;

audio.volume = 0.35;

let musicPlaying = false;


function startMusic() {

    audio.play()
        .then(() => {

            musicPlaying = true;

            musicToggle.textContent = '🎵';

        })
        .catch(() => {

            musicPlaying = false;

        });

}


function toggleMusic() {

    if (musicPlaying) {

        audio.pause();

        musicPlaying = false;

        musicToggle.textContent = '🔇';

    } else {

        startMusic();

    }

}


musicToggle.addEventListener(
    'click',
    (event) => {

        event.stopPropagation();

        toggleMusic();

    }
);


/* ==================================================
   📱 NAVEGAÇÃO
================================================== */

let currentScreen = 'welcome';


function showScreen(name) {

    Object.values(screens)
        .forEach(screen => {

            screen.classList.remove('active');

        });


    screens[name]
        .classList.add('active');


    currentScreen = name;

}


/* ==================================================
   🌟 PARTÍCULAS
================================================== */

function createParticle() {

    const icons = [

        '🌸',
        '💖',
        '⭐',
        '🌷',
        '💕',
        '✨',
        '🌹',
        '💗'

    ];


    const particle =
        document.createElement('span');

    particle.className = 'particle';

    particle.textContent =
        icons[
            Math.floor(
                Math.random() * icons.length
            )
        ];


    particle.style.left =
        Math.random() * 95 + '%';


    particle.style.animationDuration =
        (Math.random() * 8 + 8) + 's';


    particlesBg.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 16000);

}


setInterval(
    createParticle,
    1500
);


/* ==================================================
   📸 FOTOS
================================================== */

let photoIndex = 0;

let photoInterval;


function renderPhotoDots() {

    photoDots.innerHTML = '';

    photos.forEach((_, index) => {

        const dot =
            document.createElement('span');

        dot.className =
            'photo-dot';

        if (index === photoIndex) {

            dot.classList.add('active');

        }

        photoDots.appendChild(dot);

    });

}


function showPhoto(index) {

    photoIndex = index;

    const photo =
        photos[index];


    photoPlaceholder.innerHTML = `

        <img
            src="${photo.image}"
            alt="Foto ${index + 1}"
            onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=photo-emoji>📸</div><p class=photo-hint>Coloque a foto ${index + 1} na pasta fotos</p>';"
        >

    `;


    photoMessage.style.opacity = '0';


    setTimeout(() => {

        photoMessage.textContent =
            photo.message;

        photoMessage.style.opacity =
            '1';

    }, 200);


    renderPhotoDots();

}


function startPhotos() {

    showPhoto(0);


    clearInterval(photoInterval);


    photoInterval =
        setInterval(() => {

            photoIndex =
                (photoIndex + 1)
                % photos.length;

            showPhoto(photoIndex);

        }, 3500);

}


function stopPhotos() {

    clearInterval(photoInterval);

}


document
    .querySelector('.photo-frame')
    .addEventListener(
        'click',
        () => {

            photoIndex =
                (photoIndex + 1)
                % photos.length;

            showPhoto(photoIndex);

        }
    );


/* ==================================================
   ❤️ BOTÃO NÃO
================================================== */

let fleeCount = 0;

const MAX_FLEE = 4;


function fleeButton() {

    if (fleeCount >= MAX_FLEE)
        return;


    const x =
        (Math.random() * 180) - 90;


    const y =
        (Math.random() * 120) - 60;


    btnNo.style.transform =
        `translate(${x}px, ${y}px)`;


    fleeCount++;


    if (fleeCount >= MAX_FLEE) {

        setTimeout(() => {

            btnNo.style.opacity = '0';

            btnNo.style.pointerEvents =
                'none';

            loveReaction.innerHTML =
                '😏<br><small>Só existe uma opção...</small>';

        }, 400);

    }

}


btnNo.addEventListener(
    'mouseenter',
    fleeButton
);


btnNo.addEventListener(
    'touchstart',
    (event) => {

        event.preventDefault();

        fleeButton();

    }
);


btnNo.addEventListener(
    'click',
    (event) => {

        event.preventDefault();

        fleeButton();

    }
);


/* ==================================================
   💖 BOTÃO SIM
================================================== */

btnYes.addEventListener(
    'click',
    () => {

        btnNo.style.opacity = '0';

        btnNo.style.pointerEvents =
            'none';


        loveReaction.innerHTML =
            '💖💖💖<br><small>Eu também te amo!!!</small>';


        createHeartBurst();


        setTimeout(() => {

            goToDeclaration();

        }, 2200);

    }
);


function createHeartBurst() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            const heart =
                document.createElement('span');

            heart.textContent =
                ['💖','💕','💗','❤️','🩷']
                [Math.floor(Math.random() * 5)];


            heart.style.position =
                'fixed';

            heart.style.left =
                (30 + Math.random() * 40) + '%';

            heart.style.bottom =
                '30%';

            heart.style.fontSize =
                '2rem';

            heart.style.zIndex =
                '50';

            heart.style.animation =
                'heartRise 2.5s ease-out forwards';


            document.body.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 3000);

        }, i * 80);

    }

}


/* ==================================================
   💕 DECLARAÇÃO
================================================== */

function goToDeclaration() {

    showScreen('declaration');

    declarationText.innerHTML = '';

    typeDeclaration();

}


function typeDeclaration() {

    let index = 0;


    function nextPhrase() {

        if (
            index >=
            declarationPhrases.length
        ) {

            setTimeout(
                goToEnvelope,
                1800
            );

            return;

        }


        const paragraph =
            document.createElement('p');

        paragraph.className =
            'phrase';

        paragraph.textContent =
            declarationPhrases[index];


        declarationText.appendChild(
            paragraph
        );


        index++;


        setTimeout(
            nextPhrase,
            paragraph.textContent.length
            * 45 + 1000
        );

    }


    nextPhrase();

}


/* ==================================================
   ✉️ ENVELOPE
================================================== */

function goToEnvelope() {

    showScreen('envelope');

    envelopeWrapper
        .classList
        .remove('opened');

    continueButton
        .classList
        .remove('show');

    letterContent.innerHTML = '';

}


envelopeWrapper.addEventListener(
    'click',
    () => {

        if (
            envelopeWrapper
                .classList
                .contains('opened')
        ) {

            return;

        }


        openEnvelope();

    }
);


function openEnvelope() {

    if (
        envelopeWrapper
            .classList
            .contains('opened')
    ) {

        return;

    }


    envelopeWrapper
        .classList
        .add('opened');


    setTimeout(
        typeLetter,
        900
    );

}


/* ==================================================
   💌 CARTA DIGITADA
================================================== */

function typeLetter() {

    letterContent.innerHTML = '';


    const chars =
        birthdayLetter.split('');


    chars.forEach(
        (char, index) => {

            if (char === '\n') {

                letterContent
                    .appendChild(
                        document.createElement('br')
                    );

                return;

            }


            const span =
                document.createElement('span');

            span.className =
                'char';

            span.textContent =
                char;

            span.style.animationDelay =
                (index * 0.025) + 's';


            letterContent
                .appendChild(span);

        }
    );


    const totalTime =
        chars.length * 25 + 1200;


    setTimeout(
        () => {

            continueButton
                .classList
                .add('show');

        },
        totalTime
    );

}


/* ==================================================
   🎉 TELA FINAL
================================================== */

continueButton.addEventListener(
    'click',
    () => {

        continueButton
            .classList
            .remove('show');

        goToFinal();

    }
);


function goToFinal() {

    showScreen('final');


    finalTitle.textContent =
        'Feliz Aniversário! 🎂💖';


    finalMessage.textContent =
        `Você é uma pessoa muito especial.

Obrigado(a) por existir.

Que seu novo ano seja cheio de
amor, felicidade e momentos incríveis.

Te amo hoje e sempre! ❤️`;


    finalHearts.innerHTML = '';


    const hearts = [

        '💖',
        '💕',
        '💗',
        '❤️',
        '🩷',
        '🌸',
        '✨',
        '🎂'

    ];


    hearts.forEach(
        (icon, index) => {

            const span =
                document.createElement('span');

            span.textContent =
                icon;

            span.style.animationDelay =
                (index * .15) + 's';

            finalHearts
                .appendChild(span);

        }
    );


    launchConfetti();

}


/* ==================================================
   🎊 CONFETES
================================================== */

function launchConfetti() {

    confettiContainer.innerHTML = '';


    for (
        let i = 0;
        i < 70;
        i++
    ) {

        setTimeout(
            createConfetti,
            i * 30
        );

    }

}


function createConfetti() {

    const colors = [

        '#ff6b8a',
        '#f48fb1',
        '#ffb6c1',
        '#ffd1dc',
        '#f9d56e',
        '#e75480'

    ];


    const piece =
        document.createElement('div');


    piece.className =
        'confetti-piece';


    piece.style.left =
        Math.random() * 100 + '%';


    piece.style.backgroundColor =
        colors[
            Math.floor(
                Math.random() * colors.length
            )
        ];


    piece.style.width =
        (Math.random() * 10 + 6) + 'px';


    piece.style.height =
        (Math.random() * 18 + 8) + 'px';


    piece.style.animationDuration =
        (Math.random() * 3 + 3) + 's';


    confettiContainer
        .appendChild(piece);


    setTimeout(
        () => piece.remove(),
        6000
    );

}


/* ==================================================
   🚀 COMEÇAR
================================================== */

btnStart.addEventListener(
    'click',
    () => {

        /* A primeira interação permite
           que o celular reproduza a música. */

        startMusic();


        showScreen('photos');

        startPhotos();


        setTimeout(
            () => {

                stopPhotos();

                showScreen('love');

            },

            photos.length * 3500 + 1000

        );

    }
);


/* ==================================================
   🚀 INICIALIZAÇÃO
================================================== */

showScreen('welcome');

renderPhotoDots();

})();