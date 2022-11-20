import { LabelingCharacterDiv } from "../../../styles/result";
import { Suspense, useRef,useEffect,useState } from "react";
import { Canvas } from '@react-three/fiber'
import { useGLTF,useAnimations} from '@react-three/drei'
import BigBoss from "./characters/bigBoss";
import C01 from "./characters/c01";
import Efficiency from "./characters/efficiency";
import Humanloversclub from "./characters/humanloversclub";
import PartyAnimal from "./characters/partyAnimal";
import PureHipster from "./characters/pureHipster";
import SaltOfHipster from "./characters/saltOfHipster";
import SixthSense from "./characters/sixthSense";
import WarmAndroid from "./characters/warmAndroid";
import { OrbitControls } from "@react-three/drei";

function Model(labelName) {
  console.log(labelName.labelName.name)
  if(labelName.labelName.name == "Warm Android"){
    return <WarmAndroid/>
  }else if(labelName.labelName.name == "Party Animal"){
    return <PartyAnimal/>
  }else if(labelName.labelName.name == "Salt Of Hipster"){
    return <SaltOfHipster/>
  }else if(labelName.labelName.name == "A.K.A Efficiency"){
    return <Efficiency/>
  }else if(labelName.labelName.name == "Sixth Sense Hipster"){
    return <SixthSense/>
  }else if(labelName.labelName.name == "HumanLoversClub"){
    return <Humanloversclub/>
  }else if(labelName.labelName.name == "Pure Hipster"){
    return <PureHipster/>
  }else if(labelName.labelName.name == "Big Boss"){
    return <BigBoss/>
  }else {
    return <C01/>
  }

  }
  
function LabelingCharacter(name){
    return(
        <LabelingCharacterDiv>  
            <Canvas>
            <Suspense fallback={null}>
            <ambientLight />
            <OrbitControls />
              <Model labelName={name}/>
              </Suspense>
            </Canvas>       
        </LabelingCharacterDiv>
    )
}

export default LabelingCharacter
