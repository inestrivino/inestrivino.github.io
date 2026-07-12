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
  const isMuted = () => document.documentElement.hasAttribute('data-muted');

  //click sound effect
  document.addEventListener('click', (event) => {
    if (isMuted()) return;
    const target = event.target;
    if (target && target.closest('.sfx-button')) {
      soundManager.click.pause();
      soundManager.click.currentTime = 0;
      soundManager.click.play();
    }
  });

  //hover sound effect with flags so the sound doesn't overlap
  document.addEventListener('mouseover', (event) => {
    if (isMuted()) return;
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

  //hover sound effect for projects and posts specifically
  document.addEventListener('mouseover', (event) => {
    if (isMuted()) return;
    const target = event.target;
    if (target && target.closest('.sfx-project')) {
      soundManager.hoverProject.pause();
      soundManager.hoverProject.currentTime = 0;
      soundManager.hoverProject.play();
    }
  });
}