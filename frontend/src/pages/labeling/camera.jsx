
import 'aframe';
// import 'aframe-particle-system-component';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react"
// import { Canvas } from '@react-three/fiber';
import { useScript } from '../../hook';
import { useSelector } from 'react-redux';
import html2canvas from "html2canvas";
import styled from '@emotion/styled';

function CameraPage(){
  // 레이블링
  // const labelingName = useSelector(state => state.userReducer)
  // console.log(labelingName)
  //
  const status = useScript("https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.0/aframe/build/aframe-ar.js");
  const nftStatus = useScript("https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js")
  const lookStatus = useScript("https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js")
  // const guiStatus = useScript("https://rawgit.com/rdub80/aframe-gui/master/dist/aframe-gui.min.js")
  const sceneRef = useRef()
  console.log(status)
  useEffect(() => {
    
    if(sceneRef && sceneRef.current){
      sceneRef.current && sceneRef.current.focus();

    }
  },[sceneRef]);

  if(status === "loading" || lookStatus === "loading"){
    return (
      <div>로딩중...</div>
    )
  }
  const gltfModel = "/img/SixthSense.glb"; // 사용자 label에 따라서 주소 변환 
  
  return(
      <>
     


   <a-scene ref={sceneRef} 
   class="ar-1" 
   vr-mode-ui="enabled: false;"
   arjs="sourceType: webcam;debugUIEnabled: false;"
   canvas="height: 50; width: 50"
   embedded
   style ={{display: "block", width:"100vw", height:"90vh"}}>
 
      <a-assets >
        <a-asset-item id="glb" src="/img/C01.glb" ></a-asset-item>
      </a-assets>
     
      <a-entity animation-mixer="clip:Idle01;"  light="type: ambient; intensity: 2.5" gltf-model={gltfModel} position="0 1 -3" scale="0.3 0.3 0.3"  ></a-entity>

 <a-video id="screen-1" 
                    material="src:#element; shader: standard;"
                    geometry="primitive: plane; segmentsHeight: 16; segmentsWidth: 16"
                    a-webcam
                    position="0 0 0" 
                    rotation="-10 0 0"
                    width="4" height="3">
    </a-video>
    <a-camera cursor="rayOrigin: mouse"></a-camera>
   
    </a-scene>
    
    <canvas id="canvas"></canvas>
   
	  
	    <a href="#" id="download-photo" download="selfie.png" title="Save Photo" class="disabled" >file_download</a>   
	  
 
      </>

    )

    
}


export default CameraPage

