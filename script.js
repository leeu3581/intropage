// Learn more about using JavaScript to interact with webpages:
// https://developer.mozilla.org/en-US/docs/Web/javascript

const COLORS = [
  'rebeccapurple',
  'magenta',
  'lime',
  'violet',
  'red',
  'cyan',
  'yellow',
  'springgreen',
  'aqua',
  'orange',
  'crimson',
  'coral',
  'deeppink',
  'dodgerblue',
  'gold'
]
const button = document.getElementById('change-background-color')

button.addEventListener('click', changeBackgroundColor)

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('url').innerText = window.location
  document.getElementById('library-url').href = `beaker://library/${window.location}`

  // is this a Dat-supported website? If so, use a dat:// URL for the beakerbrowser.com link
  const beakerLink = document.getElementById('beaker-url')
  if (window.DatArchive) {
    beakerLink.href = 'dat://beakerbrowser.com'
  } else {
    beakerLink.href = 'https://beakerbrowser.com'
  }
})

function changeBackgroundColor () {
  const maxIdx = COLORS.length - 1
  const idx = Math.floor(Math.random() * Math.floor(maxIdx))
  const newColor = COLORS[idx]

  document.body.style.background = newColor
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}