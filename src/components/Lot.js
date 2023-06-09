'use client';
import Lottie from 'lottie-react';
import { useEffect } from 'react';
// import testAnimation from '../assets/test_data.json';
import lottie from '../../public/assets/lottie';
import useDetectScroll from '@smakss/react-scroll-direction';
import ScrollMagic from 'scrollmagic';

export default function Lot() {
  useEffect(() => {
    if (document.getElementById('bm').firstChild) {
      document.getElementById('bm').innerHTML = '';
    }

    const intro = document.querySelector('.bm-cont');
    const controller = new ScrollMagic.Controller();
    const animationTime = 2400;
    let scene = new ScrollMagic.Scene({
      duration: animationTime,
      triggerElement: intro,
      triggerHook: 0,
    })
      .setPin(intro)
      .addTo(controller);

    var animation = lottie.loadAnimation({
      container: document.getElementById('bm'),
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: '/assets/vid_0.json',
    });

    let delay = 0;
    let heightPerFrame = 0;
    let flag = false;
    let startDelay = 0;
    let endDelay = 0;
    scene.on('update', (e) => {
      console.log(e);
      console.log(
        document.querySelector('.bm-cont').getBoundingClientRect().top
      );
      console.log(e.scrollPos);

      if (document.querySelector('.bm-cont').getBoundingClientRect().top === 0)
        flag = true;

      heightPerFrame = animation.totalFrames / animationTime; // if total animation duration === total frames, then 1px height scroll = 1 frame moved
      console.log(heightPerFrame);
      delay = Math.round(e.scrollPos / animation.totalFrames);

      // if (
      //   !(document.querySelector('.bm-cont').getBoundingClientRect().top > 0)
      // ) {
      //   startDelay = delay;
      // } else {
      //   delay = delay - startDelay;
      // }

      // if (
      //   !(document.querySelector('.bm-cont').getBoundingClientRect().top < 0)
      // ) {
      //   delay = delay - endDelay;
      // } else {
      //   endDelay = delay;
      // }

      animation.goToAndStop(delay, true);
    });
  }, []);

  return (
    <main className="relative main">
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum faciliselementum
        facilisis. Vulputate ut gravida in. Purus non enim praesent elementum
        facilisis. Vulputate ut gravida in. Purus non enim praesent elementum
        facilisis. Vulputate ut gravida in. Purus non enim praesent elementum
        facilisis. Vulputate ut gravida in. Purus non enim praesent elementum
        facilisis. Vulputate ut gravida in. Purus non enim praesent elementum
        facilisis. Vulputate ut gravida in. Purus non enim praesent elementum
        faciliselementum facilisis. Vulputate ut gravida in. Purus non enim
        praesent elementum facilisis. Vulputate ut gravida in. Purus non enim
        praesent elementum facilisis. Vulputate ut gravida in. Purus non enim
        praesent elementum facilisis. Vulputate ut gravida in. Purus non enim
        praesent elementum facilisis. Vulputate ut gravida in. Purus non enim
        praesent elementum facilisis. Vulputate ut gravida in. Purus non enim
        praesent elementum faciliselementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum faciliselementum facilisis. Vulputate
        ut gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum faciliselementum
        facilisis. Vulputate ut gravida in. Purus non enim praesent elementum
        facilisis. Vulputate ut gravida in. Purus non enim praesent elementum
        facilisis. Vulputate ut gravida in. Purus non enim praesent elementum
        facilisis. Vulputate ut gravida in. Purus non enim praesent elementum
        facilisis. Vulputate ut gravida in. Purus non enim praesent elementum
        facilisis. Vulputate ut gravida in. Purus non enim praesent elementum
        faciliselementum facilisis. Vulputate ut gravida in. Purus non enim
        praesent elementum facilisis. Vulputate ut gravida in. Purus non enim
        praesent elementum facilisis. Vulputate ut gravida in. Purus non enim
        praesent elementum facilisis. Vulputate ut gravida in. Purus non enim
        praesent elementum facilisis. Vulputate ut gravida in. Purus non enim
        praesent elementum facilisis. Vulputate ut gravida in. Purus non enim
        praesent elementum faciliselementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum faciliselementum facilisis. Vulputate
        ut gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        gravida in. Purus non enim praesent elementum facilisis. Vulputate ut
        tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames
        ac turpis egestas maecenas pharetra. In nibh mauris cursus mattis
        molestie a. Dui vivamus arcu felis bibendum ut tristique et egestas.
        Blandit volutpat maecenas volutpat blandit aliquam. Quam adipiscing
        vitae proin sagittis. Eros in cursus turpis massa tincidunt dui ut. Ac
        auctor augue mauris augue neque gravida in. Purus non enim praesent
        elementum facilisis. Vulputate ut pharetra sit amet aliquam id diam.
        Commodo odio aenean sed adipiscing diam. Sapien eget mi proin sed libero
        enim. Posuere urna nec tincidunt praesent. Sapien faucibus et molestie
        ac feugiat sed lectus. Amet nisl purus in mollis. Orci ac auctor augue
        mauris augue neque gravida. Ante in nibh mauris cursus mattis molestie a
        iaculis at. Bibendum arcu vitae elementum curabitur. Eros donec ac odio
        tempor orci. Diam donec adipiscing tristique risus nec. Euismod lacinia
        at quis risus sed vulputate. Dignissim cras tincidunt lobortis feugiat
        vivamus at augue eget arcu. Sed augue lacus viverra vitae congue eu
        consequat ac. Fermentum dui faucibus in ornare. Suspendisse sed nisi
        lacus sed viverra tellus in. Leo urna molestie at elementum eu. Elit at
        imperdiet dui accumsan sit. Nunc vel risus commodo viverra maecenas
        accumsan lacus vel. Ac felis donec et odio pellentesque diam volutpat.
        Amet est placerat in egestas erat imperdiet sed euismod nisi. Convallis
        a cras semper auctor neque vitae tempus. Lacus vel facilisis volutpat
        est velit egestas dui id. Malesuada proin libero nunc consequat interdum
        varius sit amet mattis. Suscipit tellus mauris a diam maecenas sed enim
        ut. Et tortor consequat id porta. Ipsum dolor sit amet consectetur
        adipiscing elit pellentesque habitant. Ultrices eros in cursus turpis
        massa tincidunt dui ut. Tincidunt arcu non sodales neque sodales ut
        etiam. Massa massa ultricies mi quis hendrerit dolor magna eget. Quis
        risus sed vulputate odio ut enim blandit volutpat maecenas. Hac
        habitasse platea dictumst vestibulum rhoncus est pellentesque elit
        ullamcorper. Facilisis leo vel fringilla est. Orci dapibus ultrices in
        iaculis nunc sed augue. Integer malesuada nunc vel risus commodo
        viverra. Enim nunc faucibus a pellentesque sit amet porttitor eget
        dolor. Non pulvinar neque laoreet suspendisse interdum consectetur.
        Curabitur vitae nunc sed velit dignissim sodales ut eu. Lacus vestibulum
        sed arcu non odio. Non odio euismod lacinia at quis risus sed vulputate.
        Imperdiet dui accumsan sit amet nulla. Nulla pellentesque dignissim enim
        sit amet venenatis urna cursus eget. Ornare suspendisse sed nisi lacus
        sed viverra tellus. Pellentesque elit eget gravida cum. Commodo
        ullamcorper a lacus vestibulum sed arcu non. Et sollicitudin ac orci
        phasellus. Enim nunc faucibus a pellentesque sit amet. Pulvinar sapien
        et ligula ullamcorper malesuada. Interdum posuere lorem ipsum dolor sit
        amet consectetur. Enim tortor at auctor urna nunc id. Dui vivamus arcu
        felis bibendum ut tristique et egestas. Risus ultricies tristique nulla
        aliquet enim tortor at auctor urna. Urna cursus eget nunc scelerisque
        viverra mauris. Maecenas accumsan lacus vel facilisis volutpat. Donec et
        odio pellentesque diam. Nisl nunc mi ipsum faucibus vitae aliquet nec
        ullamcorper. Aliquam malesuada bibendum arcu vitae elementum curabitur
        vitae nunc. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus
        vitae. Sagittis orci a scelerisque purus semper eget duis at. odio
        pellentesque diam. Nisl nunc mi ipsum faucibus vitae aliquet nec
        ullamcorper. Aliquam malesuada bibendum arcu vitae elementum curabitur
        vitae nunc. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus
        vitae. Sagittis orci a scelerisque purus semper eget duis at. Egestas
        tellus rutrum tellus pellentesque eu tincidunt. Faucibus purus in massa
        tempor. Elementum tempus egestas sed sed risus pretium quam vulputate
        dignissim. Nisi quis eleifend quam adipiscing. Orci dapibus ultrices in
        iaculis. Dolor morbi non arcu risus quis varius quam quisque id.
        Ultrices dui sapien eget mi proin sed libero enim sed. In iaculis nunc
        sed augue lacus. Id aliquet risus feugiat in ante. Dui nunc mattis enim
        ut tellus elementum. Velit dignissim sodales ut eu.odio pellentesque
        diam. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Aliquam
        malesuada bibendum arcu vitae elementum curabitur vitae nunc. Commodo
        nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Sagittis orci
        a scelerisque purus semper eget duis at. Egestas tellus rutrum tellus
        pellentesque eu tincidunt. Faucibus purus in massa tempor. Elementum
        tempus egestas sed sed risus pretium quam vulputate dignissim. Nisi quis
        eleifend quam adipiscing. Orci dapibus ultrices in iaculis. Dolor morbi
        non arcu risus quis varius quam quisque id. Ultrices dui sapien eget mi
        proin sed libero enim sed. In iaculis nunc sed augue lacus. Id aliquet
        risus feugiat in ante. Dui nunc mattis enim ut tellus elementum. Velit
        dignissim sodales ut eu.odio pellentesque diam. Nisl nunc mi ipsum
        faucibus vitae aliquet nec ullamcorper. Aliquam malesuada bibendum arcu
        vitae elementum curabitur vitae nunc. Commodo nulla facilisi nullam
        vehicula ipsum a arcu cursus vitae. Sagittis orci a scelerisque purus
        semper eget duis at. Egestas tellus rutrum tellus pellentesque eu
        tincidunt. Faucibus purus in massa tempor. Elementum tempus egestas sed
        sed risus pretium quam vulputate dignissim. Nisi quis eleifend quam
        adipiscing. Orci dapibus ultrices in iaculis. Dolor morbi non arcu risus
        quis varius quam quisque id. Ultrices dui sapien eget mi proin sed
        libero enim sed. In iaculis nunc sed augue lacus. Id aliquet risus
        feugiat in ante. Dui nunc mattis enim ut tellus elementum. Velit
        dignissim sodales ut eu.Egestas tellus rutrum tellus pellentesque eu
        tincidunt. Faucibus purus in massa tempor. Elementum tempus egestas sed
        sed risus pretium quam vulputate dignissim. Nisi quis eleifend quam
        adipiscing. Orci dapibus ultrices in iaculis. Dolor morbi non arcu risus
        quis varius quam quisque id. Ultrices dui sapien eget mi proin sed
        libero enim sed. In iaculis nunc sed augue lacus. Id aliquet risus
        feugiat in ante. Dui nunc mattis enim ut tellus elementum. Velit
        dignissim sodales ut eu.
      </p> */}
      <div className="bm-cont bg-white">
        <div className="bm" id="bm"></div>
      </div>
      {/* <p className="pp">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames
        ac turpis egestas maecenas pharetra. In nibh mauris cursus mattis
        molestie a. Dui vivamus arcu felis bibendum ut tristique et egestas.
        Blandit volutpat maecenas volutpat blandit aliquam. Quam adipiscing
        vitae proin sagittis. Eros in cursus turpis massa tincidunt dui ut. Ac
        auctor augue mauris augue neque gravida iLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas
        pharetra. In nibh mauris cursus mattis molestie a. Dui vivamus arcu
        felis bibendum ut tristique et egestas. Blandit volutpat maecenas
        volutpat blandit aliquam. Quam adipiscLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas
        pharetra. In nibh mauris cursus mattis molestie a. Dui vivamus arcu
        felis bibendum ut tristique et egestas. Blandit volutpat maecenas
        volutpat blandit aliquam. Quam adipiscing vitae proin sagittis. Eros in
        cursus turpis massa tincidunt dui ut. Ac auctor augue mauris augue neque
        gravida iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Et Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Et malesuada fames ac
        turpis egestas maecenas pharetra. In nibh mauris cursus mattis molestie
        a. Dui vivamus arcu felis bibendum ut tristique et egestas. Blandit
        volutpat maecenas volutpat blandit aliquam. Quam adipiscing vitae proin
        sagittis. Eros in cursus turpis massa tincidunt dui ut. Ac auctor augue
        mauris augue neque gravida iLorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Et Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Et malesuada fames ac turpis egestas maecenas pharetra. In nibh mauris
        cursus mattis molestie a. Dui vivamus arcu felis bibendum ut tristique
        et egestas. Blandit volutpat maecenas volutpat blandit aliquam. Quam
        adipiscing vitae proin sagittis. Eros in cursus turpis massa tincidunt
        dui ut. Ac auctor augue mauris augue neque gravida iLorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Et Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas
        pharetra. In nibh mauris cursus mattis molestie a. Dui vivamus arcu
        felis bibendum ut tristique et egestas. Blandit volutpat maecenas
        volutpat blandit aliquam. Quam adipiscing vitae proin sagittis. Eros in
        cursus turpis massa tincidunt dui ut. Ac auctor augue mauris augue neque
        gravida iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Et Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Et malesuada fames ac
        turpis egestas maecenas pharetra. In nibh mauris cursus mattis molestie
        a. Dui vivamus arcu felis bibendum ut tristique et egestas. Blandit
        volutpat maecenas volutpat blandit aliquam. Quam adipiscing vitae proin
        sagittis. Eros in cursus turpis massa tincidunt dui ut. Ac auctor augue
        mauris augue neque gravida iLorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Et Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Et malesuada fames ac turpis egestas maecenas pharetra. In nibh mauris
        cursus mattis molestie a. Dui vivamus arcu felis bibendum ut tristique
        et egestas. Blandit volutpat maecenas volutpat blandit aliquam. Quam
        adipiscing vitae proin sagittis. Eros in cursus turpis massa tincidunt
        dui ut. Ac auctor augue mauris augue neque gravida iLorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Et Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas
        pharetra. In nibh mauris cursus mattis molestie a. Dui vivamus arcu
        felis bibendum ut tristique et egestas. Blandit volutpat maecenas
        volutpat blandit aliquam. Quam adipiscing vitae proin sagittis. Eros in
        cursus turpis massa tincidunt dui ut. Ac auctor augue mauris augue neque
        gravida iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Et Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Et malesuada fames ac
        turpis egestas maecenas pharetra. In nibh mauris cursus mattis molestie
        a. Dui vivamus arcu felis bibendum ut tristique et egestas. Blandit
        volutpat maecenas volutpat blandit aliquam. Quam adipiscing vitae proin
        sagittis. Eros in cursus turpis massa tincidunt dui ut. Ac auctor augue
        mauris augue neque gravida iLorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Et ing vitae proin sagittis. Eros in cursus turpis massa
        tincidunt dui ut. Ac auctor augue mauris augue neque gravida iLorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Et malesuada fames ac
        turpis egestas maecenas pharetra. In nibh mauris cursus mattis molestie
        a. Dui vivamus arcu felis bibendum ut tristique et egestas. Blandit
        volutpat maecenas volutpat blandit aliquam. Quam adipiscing vitae proin
        sagittis. Eros in cursus turpis massa tincidunt dui ut. Ac auctor augue
        mauris augue neque gravida iLorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Et malesuada fames ac turpis egestas maecenas pharetra. In
        nibh mauris cursus mattis molestie a. Dui vivamus arcu felis bibendum ut
        tristique et egestas. Blandit volutpat maecenas volutpat blandit
        aliquam. Quam adipiscing vitae proin sagittis. Eros in cursus turpis
        massa tincidunt dui ut. Ac auctor augue mauris augue neque gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut gravida in.
        Purus non enim praesent elementum facilisis. Vulputate ut pharetra sit
        amet aliquam id diam. Commodo odio aenean sed adipiscing diam. Sapien
        eget mi proin sed libero enim. Posuere urna nec tincidunt praesent.
        Sapien faucibus et molestie ac feugiat sed lectus. Amet nisl purus in
        mollis. Orci ac auctor augue mauris augue neque gravida. Ante in nibh
        mauris cursus mattis molestie a iaculis at. Bibendum arcu vitae
        elementum curabitur. Eros donec ac odio tempor orci. Diam donec
        adipiscing tristique risus nec. Euismod lacinia at quis risus sed
        vulputate. Dignissim cras tincidunt lobortis feugiat vivamus at augue
        eget arcu. Sed augue lacus viverra vitae congue eu consequat ac.
        Fermentum dui faucibus in ornare. Suspendisse sed nisi lacus sed viverra
        tellus in. Leo urna molestie at elementum eu. Elit at imperdiet dui
        accumsan sit. Nunc vel risus commodo viverra maecenas accumsan lacus
        vel. Ac felis donec et odio pellentesque diam volutpat. Amet est
        placerat in egestas erat imperdiet sed euismod nisi. Convallis a cras
        semper auctor neque vitae tempus. Lacus vel facilisis volutpat est velit
        egestas dui id. Malesuada proin libero nunc consequat interdum varius
        sit amet mattis. Suscipit tellus mauris a diam maecenas sed enim ut. Et
        tortor consequat id porta. Ipsum dolor sit amet consectetur adipiscing
        elit pellentesque habitant. Ultrices eros in cursus turpis massa
        tincidunt dui ut. Tincidunt arcu non sodales neque sodales ut etiam.
        Massa massa ultricies mi quis hendrerit dolor magna eget. Quis risus sed
        vulputate odio ut enim blandit volutpat maecenas. Hac habitasse platea
        dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Facilisis
        leo vel fringilla est. Orci dapibus ultrices in iaculis nunc sed augue.
        Integer malesuada nunc vel risus commodo viverra. Enim nunc faucibus a
        pellentesque sit amet porttitor eget dolor. Non pulvinar neque laoreet
        suspendisse interdum consectetur. Curabitur vitae nunc sed velit
        dignissim sodales ut eu. Lacus vestibulum sed arcu non odio. Non odio
        euismod lacinia at quis risus sed vulputate. Imperdiet dui accumsan sit
        amet nulla. Nulla pellentesque dignissim enim sit amet venenatis urna
        cursus eget. Ornare suspendisse sed nisi lacus sed viverra tellus.
        Pellentesque elit eget gravida cum. Commodo ullamcorper a lacus
        vestibulum sed arcu non. Et sollicitudin ac orci phasellus. Enim nunc
        faucibus a pellentesque sit amet. Pulvinar sapien et ligula ullamcorper
        malesuada. Interdum posuere lorem ipsum dolor sit amet consectetur. Enim
        tortor at auctor urna nunc id. Dui vivamus arcu felis bibendum ut
        tristique et egestas. Risus ultricies tristique nulla aliquet enim
        tortor at auctor urna. Urna cursus eget nunc scelerisque viverra mauris.
        Maecenas accumsan lacus vel facilisis volutpat. Donec et odio
        pellentesque diam. Nisl nunc mi ipsum faucibus vitae aliquet nec
        ullamcorper. Aliquam malesuada bibendum arcu vitae elementum curabitur
        vitae nunc. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus
        vitae. Sagittis orci a scelerisque purus semper eget duis at. Egestas
        tellus rutrum tellus pellentesque eu tincidunt. Faucibus purus in massa
        tempor. Elementum tempus egestas sed sed risus pretium quam vulputate
        dignissim. Nisi quis eleifend quam adipiscing. Orci dapibus ultrices in
        iaculis. Dolor morbi non arcu risus quis varius quam quisque id.
        Ultrices dui sapien eget mi proin sed libero enim sed. In iaculis nunc
        sed augue lacus. Id aliquet risus feugiat in ante. Dui nunc mattis enim
        ut tellus elementum. Velit dignissim sodales ut eu.
      </p> */}
    </main>
  );
}
