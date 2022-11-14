
import 'aframe';
// import 'aframe-particle-system-component';

import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react"
// import { Canvas } from '@react-three/fiber';
import { useScript } from '../../hook';

function CameraPage(){

  const status = useScript("https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.0/aframe/build/aframe-ar.js");
  const nftStatus = useScript("https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js")
  const lookStatus = useScript("https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js")

  console.log(status)
  if(status === "loading" || lookStatus === "loading"){
    return (
      <div>로딩중...</div>
    )
  }
  const gltfModel = "/img/fullcharacter.glb"; // 사용자 label에 따라서 주소 변환 

  return(
      <>

   <a-scene class="ar-1" vr-mode-ui="enterARButton: #myEnterARButton" renderer="logarithmicDepthBuffer: true">
      <a id="myEnterARButton" href="#"></a>
    
      <a-assets >
        <a-asset-item id="glb" src="/img/fullcharacter.glb" ></a-asset-item>
      </a-assets>
      <a-entity id ="glgl" animation-mixer="clip:Idle01;" gltf-model={gltfModel} position="0 1 -2" scale="0.5 0.5 0.5"  ></a-entity>

      <a-camera
        position="0 1 2"
        cursor-visible="true"
        cursor-color="#0095DD"
        cursor-opacity="0.5"
        cursor-scale="1"
        gps-camera
        rotation-reader
      >
      </a-camera>
    </a-scene>

      </>
    )
}
// document.getElementById("glgl").setAttribute("animation-mixer", "clip:Idle01");
export default CameraPage