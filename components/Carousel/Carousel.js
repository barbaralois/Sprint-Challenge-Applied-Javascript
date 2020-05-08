/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselEntry = document.querySelector('.carousel-container');

function createCarousel() {
  let carouselDiv = document.createElement('div');
  let leftButton = document.createElement('div');
  let imgOne = document.createElement('img');
  let imgTwo = document.createElement('img');
  let imgThree = document.createElement('img');
  let imgFour = document.createElement('img');
  let rightButton = document.createElement('div');

  carouselDiv.appendChild(leftButton);
  carouselDiv.appendChild(imgOne);
  carouselDiv.appendChild(imgTwo);
  carouselDiv.appendChild(imgThree);
  carouselDiv.appendChild(imgFour);
  carouselDiv.appendChild(rightButton);

  carouselDiv.classList.add('carousel');
  leftButton.classList.add('left-button');
  imgOne.src = './assets/carousel/mountains.jpeg';
  imgTwo.src = './assets/carousel/computer.jpeg';
  imgThree.src = './assets/carousel/trees.jpeg';
  imgFour.src = './assets/carousel/turntable.jpeg';
  rightButton.classList.add('right-button');

  leftButton.textContent = '<';
  rightButton.textContent = '>';

  let picContainer = [imgOne, imgTwo, imgThree, imgFour];
  let currNum = 0;
  let activePic = picContainer[currNum];
  activePic.style.display = 'block';

  leftButton.addEventListener('click', (event) => {
    activePic.style.display = 'none';
    let newNum = currNum - 1;
    if (newNum < 0) {
      newNum = 3;
      currNum = 3;
    }
    currNum = newNum;
    activePic = picContainer[newNum];
    activePic.style.display = 'block';
  });

  rightButton.addEventListener('click', (event) => {
    activePic.style.display = 'none';
    let newNum = currNum + 1;
    if (newNum > 3) {
      newNum = 0;
      currNum = 0;
    }
    currNum = newNum;
    activePic = picContainer[newNum];
    activePic.style.display = 'block';
  });

  return carouselDiv;
}

carouselEntry.appendChild(createCarousel());
