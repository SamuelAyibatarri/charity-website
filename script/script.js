const imagePaths = [
    './assets/section_gallery_group1.svg',
    './assets/section_gallery_group2.svg',
    './assets/section_gallery_group3.svg',
  ];

  const open_menu_icon = document.querySelector(".open-menu");
  const close_menu_icon = document.querySelector(".close-icon");
  const side_menu = document.querySelector(".side-menu");
  
  const slidesContainer = document.getElementById('carousel-slides');

  let currentIndex = 0;
  let position = 0;
  const speed = 0.5; // pixels per frame
  
  function createImage(src,index) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Carousel Image';
    img.setAttribute('index', `${index}`)
    img.style.margin = '10px';
    return img;
  }

  // Infinite images
  function addImages (imgIndex) {
        const img = createImage(imagePaths[imgIndex % imagePaths.length], imgIndex);
        slidesContainer.appendChild(img);
    } 

  function addImagesInfinitely () {
    if (currentIndex < 3) {
        addImages(currentIndex);
    } else {
        setTimeout(()=> {
            addImages(currentIndex)
        }, 1000)
    }
        // Schedule removal after N seconds
        if(currentIndex > 10) {
            setTimeout(() => {
            removeImg(currentIndex - 5); // keep last 5
            }, 10000); // 10 seconds delay  
        }

      
    currentIndex++;
    setTimeout(addImagesInfinitely, 1000); // add a new image every 1 second
    } 


  function removeImg (index){
    let img = slidesContainer.querySelector(`[index="${index}"]`)
    img.remove();
  }

  function animate() {
    position -= speed;
    slidesContainer.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  function openSideMenu() {
    side_menu.style.display = 'flex';
  }

    function closeSideMenu() {
    side_menu.style.display = 'none';
  }

  addImagesInfinitely();
  animate();
  open_menu_icon.addEventListener("click", ()=> {
    openSideMenu();
  })
    close_menu_icon.addEventListener("click", ()=> {
    closeSideMenu();
  })