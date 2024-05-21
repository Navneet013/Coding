const sliderDiv = document.querySelector('.sliderDiv');
const topWrapper = document.querySelector('.top-wrapper');
const colorBoxes = document.querySelectorAll('.colorbox');
const topPanel = document.querySelector('.top-panel');
const row3 = document.querySelector('.row3');
const dabba = document.querySelector('.dabba');
const datedabba = document.querySelector('.dabba .date');
const searchBar = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
const reference = document.querySelector('.reference');
const footer = document.querySelector('.footer');
const dots = document.querySelectorAll('.dot');
const dots1 = document.querySelectorAll('.dot1');
const baksa = document.querySelector('#baksa');
// constants
const RED_COLOR = '#7D0202';
const INPUT_RED_COLOR = '#B9282C';
const BUTTON_RED_COLOR = '#D95558';
// blue
const BLUE_COLOR = '#394757';
const INPUT_BLUE_COLOR = '#4D6175';
const BUTTON_BLUE_COLOR = '#56AED4';
// orange
const ORANGE_COLOR = '#F47646';
const INPUT_ORANGE_COLOR = '#FDA46A';
const BUTTON_ORANGE_COLOR = '#FFC097';
// purple
const PURPLE_COLOR = '#56405E';
const INPUT_PURPLE_COLOR = '#795984';
const BUTTON_PURPLE_COLOR = '#9F81A9';
// green
const GREEN_COLOR = '#5F8125';
const INPUT_GREEN_COLOR = '#84B533';
const BUTTON_GREEN_COLOR = '#B4D878';

sliderDiv.addEventListener('click', () => {
  sliderDiv.classList.toggle('opened');
  if (sliderDiv.classList.contains('opened')) {
    sliderDiv.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    topWrapper.style.position = 'relative';
    topWrapper.style.transform = 'translateY(0px)';
  } else {
    sliderDiv.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    topWrapper.style.transform = 'translateY(-85px)';
    topWrapper.style.position = 'absolute';
  }
});

colorBoxes.forEach((colorBox) => {
  colorBox.addEventListener('click', () => {
    if (colorBox.classList.contains('red')) {
      topWrapper.style.backgroundColor = RED_COLOR;
      topPanel.style.backgroundColor = RED_COLOR;
      row3.style.backgroundColor = RED_COLOR;
      dabba.style.backgroundColor = RED_COLOR;
      reference.style.backgroundColor = RED_COLOR;
      footer.style.backgroundColor = RED_COLOR;
      baksa.style.backgroundColor = RED_COLOR;
      datedabba.style.backgroundColor = INPUT_RED_COLOR;
      searchBar.style.backgroundColor = INPUT_RED_COLOR;
      searchButton.style.backgroundColor = BUTTON_RED_COLOR;
      sliderDiv.style.backgroundColor = INPUT_RED_COLOR;
      document.documentElement.style.setProperty(
        '--main-hover-color',
        RED_COLOR
      );
      dots.forEach((dot) => {
        dot.style.backgroundColor = INPUT_RED_COLOR;
      });
      dots1.forEach((dot1) => {
        dot1.style.color = `${RED_COLOR} !important`;
      });
    } else if (colorBox.classList.contains('blue')) {
      topWrapper.style.backgroundColor = BLUE_COLOR;
      topPanel.style.backgroundColor = BLUE_COLOR;
      row3.style.backgroundColor = BLUE_COLOR;
      dabba.style.backgroundColor = BLUE_COLOR;
      reference.style.backgroundColor = BLUE_COLOR;
      footer.style.backgroundColor = BLUE_COLOR;
      baksa.style.backgroundColor = BLUE_COLOR;
      datedabba.style.backgroundColor = INPUT_BLUE_COLOR;
      searchBar.style.backgroundColor = INPUT_BLUE_COLOR;
      searchButton.style.backgroundColor = INPUT_BLUE_COLOR;
      sliderDiv.style.backgroundColor = INPUT_BLUE_COLOR;
      document.documentElement.style.setProperty(
        '--main-hover-color',
        BLUE_COLOR
      );
      dots.forEach((dot) => {
        dot.style.backgroundColor = INPUT_BLUE_COLOR;
      });
      dots1.forEach((dot1) => {
        dot1.style.color = `${BLUE_COLOR} !important`;
      });
    } else if (colorBox.classList.contains('orange')) {
      topWrapper.style.backgroundColor = ORANGE_COLOR;
      topPanel.style.backgroundColor = ORANGE_COLOR;
      row3.style.backgroundColor = ORANGE_COLOR;
      dabba.style.backgroundColor = ORANGE_COLOR;
      reference.style.backgroundColor = ORANGE_COLOR;
      footer.style.backgroundColor = ORANGE_COLOR;
      baksa.style.backgroundColor = ORANGE_COLOR;
      datedabba.style.backgroundColor = INPUT_ORANGE_COLOR;
      searchBar.style.backgroundColor = INPUT_ORANGE_COLOR;
      searchButton.style.backgroundColor = INPUT_ORANGE_COLOR;
      sliderDiv.style.backgroundColor = INPUT_ORANGE_COLOR;
      document.documentElement.style.setProperty(
        '--main-hover-color',
        ORANGE_COLOR
      );
      dots.forEach((dot) => {
        dot.style.backgroundColor = INPUT_ORANGE_COLOR;
      });
      dots1.forEach((dot1) => {
        dot1.style.color = `${ORANGE_COLOR} !important`;
      });
    } else if (colorBox.classList.contains('purple')) {
      topWrapper.style.backgroundColor = PURPLE_COLOR;
      topPanel.style.backgroundColor = PURPLE_COLOR;
      row3.style.backgroundColor = PURPLE_COLOR;
      dabba.style.backgroundColor = PURPLE_COLOR;
      reference.style.backgroundColor = PURPLE_COLOR;
      footer.style.backgroundColor = PURPLE_COLOR;
      baksa.style.backgroundColor = PURPLE_COLOR;
      datedabba.style.backgroundColor = INPUT_PURPLE_COLOR;
      searchBar.style.backgroundColor = INPUT_PURPLE_COLOR;
      searchButton.style.backgroundColor = INPUT_PURPLE_COLOR;
      sliderDiv.style.backgroundColor = INPUT_PURPLE_COLOR;
      document.documentElement.style.setProperty(
        '--main-hover-color',
        PURPLE_COLOR
      );
      dots.forEach((dot) => {
        dot.style.backgroundColor = INPUT_PURPLE_COLOR;
      });
      dots1.forEach((dot1) => {
        dot1.style.color = `${PURPLE_COLOR} !important`;
      });
    } else {
      topWrapper.style.backgroundColor = GREEN_COLOR;
      topPanel.style.backgroundColor = GREEN_COLOR;
      row3.style.backgroundColor = GREEN_COLOR;
      dabba.style.backgroundColor = GREEN_COLOR;
      reference.style.backgroundColor = GREEN_COLOR;
      footer.style.backgroundColor = GREEN_COLOR;
      baksa.style.backgroundColor = GREEN_COLOR;
      datedabba.style.backgroundColor = INPUT_GREEN_COLOR;
      searchBar.style.backgroundColor = INPUT_GREEN_COLOR;
      searchButton.style.backgroundColor = INPUT_GREEN_COLOR;
      sliderDiv.style.backgroundColor = INPUT_GREEN_COLOR;
      document.documentElement.style.setProperty(
        '--main-hover-color',
        GREEN_COLOR
      );
      dots.forEach((dot) => {
        dot.style.backgroundColor = INPUT_GREEN_COLOR;
      });
      dots1.forEach((dot1) => {
        dot1.style.color = `${GREEN_COLOR} !important`;
      });
    }
  });
});
