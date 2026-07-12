// @ts-ignore
import { Howl, Howler } from 'howler';

// 1. Centralización de los efectos de sonido de la web
export const soundManager = {
  click: new Howl({
    src: ['/audio/tone1.ogg']
  }),
  hover: new Howl({
    src: ['/audio/pepSound2.ogg']
  }),
  hoverProject: new Howl({
    src: ['/audio/twoTone2.ogg']
  })
};

if (typeof window !== 'undefined') {
  //click sound effect
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.closest('.sfx-button')) {
      soundManager.click.pause();
      soundManager.click.currentTime = 0;
      soundManager.click.play();
    }
  });

  //hover sound effect with flags so the sound doesn't overlap
  document.addEventListener('mouseover', (event) => {
    const target = event.target;
    if (target && target.closest('.sfx-button')) {
      const button = target.closest('.sfx-button');
      if (button && !button.dataset.hovered) {
        soundManager.hover.pause();
        soundManager.hover.currentTime = 0;
        soundManager.hover.play();
        button.dataset.hovered = 'true';
        button.addEventListener('mouseleave', () => {
          delete button.dataset.hovered;
        }, { once: true });
      }
    }
  });

  document.addEventListener('mouseover', (event) => {
    const target = event.target;
    if (target && target.closest('.sfx-project')) {
      soundManager.hoverProject.pause();
      soundManager.hoverProject.currentTime = 0;
      soundManager.hoverProject.play();
    }
  });
}