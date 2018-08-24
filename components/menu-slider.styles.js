import css from 'styled-jsx/css'

export default css`
  .menu-slider {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    z-index: 2;
    overflow: hidden;
    transition: transform .6s .8s cubic-bezier(.7, .3, 0, 1);
  }

  .menu-slider.visible {
    transform: translateY(0);
    -webkit-transform: translateY(0);
    transition: transform .6s cubic-bezier(.7, .3, 0, 1);
  }

  .menu-slider :global(ul) {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .menu-nav.visible :global(.logo) {
    opacity: 1;

    transition: opacity 2s 1.3s ease, width 1s .3s ease, height 1s .3s ease;
  }

  .menu-slider :global(.overlay) {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }

  .menu-slider :global(.logo) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    opacity: 0;

    transition: opacity .3s ease;
  }

  .menu-slider.visible :global(.logo) {
    opacity: 1;

    transition: opacity 2s 1.3s ease, width 1s .3s ease, height 1s .3s ease;
  }

  .menu-slider :global(.swipeable-container) {
    height: 100%;
  }

  .menu-slider :global(.logo.blog) {
    width: 300px;
    height: 300px;

    transition opacity 2s 1.3s ease, width 1s .2s cubic-bezier(.7, .3, 0, 1), height 1s .2s cubic-bezier(.7, .3, 0, 1);
  }

  .menu-slider :global(.logo.photography .polygon) {
    border-radius: 50%;
  }

  .menu-slider :global(.menu-item) {
    position: absolute;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    flex-basis: none;
    transform: translateX(0);
    -webkit-transform: translateX(0);
    opacity: 0;
    display: block;

    transition: opacity .4s ease-in-out, transform 1.2s ease-in-out;
    -webkit-transition: opacity .4s ease-in-out, -webkit-transform 1.2s ease-in-out;
  }

  .menu-slider.visible :global(.menu-item) {
    opacity: 1;
    transform: translateX(0);
    -webkit-transform: translateX(0);

    transition: opacity 1s .4s ease-in-out, transform 1.2s ease-in-out;
    -webkit-transition: opacity 1s .4s ease-in-out, -webkit-transform 1.2s ease-in-out;
  }

  .menu-slider.visible :global(.menu-item.prev) {
    transform: translateX(-100vh);
    -webkit-transform: translateX(-100vh);
    opacity: 0;

    transition: opacity 1s ease-in-out, transform 2s ease;
    -webkit-transition: opacity 1s ease-in-out, -webkit-transform 2s ease;
  }

  .menu-slider.visible :global(.menu-item.next),
  .menu-slider.visible :global(.menu-item.next:last-child) {
    transform: translateX(100vh);
    -webkit-transform: translateX(100vh);
    opacity: 0;

    transition: opacity 1s ease-in-out, transform 2s ease;
    -webkit-transition: opacity 1s ease-in-out, -webkit-transform 2s ease;
  }

  .menu-slider.visible :global(.menu-item .title) {
    width: 100%;
  }

  .menu-slider.visible :global(.menu-item .wip-block) {
    background: #333;
    position: absolute;
    color: #fff;
    opacity: 0.7;
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    width: 100%;
  }

  .menu-slider :global(.menu-item .title .line) {
    display: none;
  }

  @keyframes bounceDownEffect {
    0% { transform: translateY(-130px) rotate(180deg); }
    100% { transform: translateY(-120px) rotate(180deg); }
  }

  @keyframes bounceUpEffect {
    0% { transform: translateY(30px); }
    100% { transform: translateY(20px); }
  }

  .menu-slider :global(.menu-item:hover) {
    color: #aaa;
    transition: opacity 1s .4s ease-in-out, transform 1.2s ease-in-out;
    -webkit-transition: opacity 1s .4s ease-in-out, -webkit-transform 1.2s ease-in-out;
  }`

