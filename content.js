const blurUserCode = () => {
    const style = document.createElement('style');
  style.textContent = `
    #__next {
      position: relative;
    }

    #__next::after {
      content: '';
      position: absolute;
      top: 8.5rem;
      right: 0;
      width: 50%;
      height: 75%;
      background-color: rgba(0, 0, 0, 0.99);
      z-index: 9999;
      pointer-events: none;
    }
  `;

  document.head.appendChild(style);
  document.body.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (targetElement.matches('#editor > div.flex.h-9.items-center.pr-4.bg-layer-2.dark\\:bg-dark-layer-2.border-fill-3.dark\\:border-dark-fill-3.rounded-t.border-b') || targetElement.matches('#editor > div.flex.h-9.items-center.pr-4.bg-layer-2.dark\:bg-dark-layer-2.border-fill-3.dark\:border-dark-fill-3.rounded-t.border-b')) {
        if (document.head.contains(style)) {
            document.head.removeChild(style)
        }
        //console.log('Element clicked!');
        
      }
    // console.log('hi');
    // if(document.head.contains(style)){
    //     document.head.removeChild(style)
    // }
   
  });
  
  
}

blurUserCode()

// const createRedBoxOverlay = () => {
//     const style = document.createElement('style');
//     style.textContent = `
//       .editor-overlay {
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         background-color: rgba(255, 0, 0, 0.5); /* Red with 50% opacity */
//         z-index: 9999;
//       }
//     `;
  
//     const editorDiv = document.querySelector('.editor');
//     if (editorDiv) {
//       const overlay = document.getElementById('__next');
//       overlay.classList.add('editor-overlay');
//       editorDiv.appendChild(overlay);
//     }
  
//     document.head.appendChild(style);
//   }
  
//   createRedBoxOverlay();