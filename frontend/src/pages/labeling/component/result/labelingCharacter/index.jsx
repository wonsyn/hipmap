import { LabelingCharacterDiv } from "../../../styles/result";
import { Suspense, useRef,useEffect,useState } from "react";
import { Canvas } from '@react-three/fiber'
import { useGLTF,useAnimations} from '@react-three/drei'
import Glove from "./gloves";
import Bodyparts from "./bodyparts";
import Eyes from "./eyes";
import Headparts from "./headparts";
import MouseAndNoses from "./mouthAndNoses";
import Tails from "./tails";
// 되는 놈 
function Model({...props}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/img/fullcharacter.glb')
  const { actions } = useAnimations(animations, group);
  const [name, setName] = useState("Idle01");

  useEffect(() => {
    console.log(nodes.root)
    actions[name].play();
  });

  
  //  useGLTF.preload('/C11.glb') // 더 빨리 부르라고 
    return (
      <mesh onClick={(e) => actions.Dizzy.play()} >
      <group ref={group} {...props} dispose={null}>
      <group name="C11" rotation={[Math.PI / 21, 0, 0]} scale={[1.5, 1.5, 1.5]}>
        <group name="C11_1">
          <group name="Bodies" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name="MainBody01" geometry={nodes.MainBody01.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody01.skeleton} />
            {/* <skinnedMesh name="MainBody02" geometry={nodes.MainBody02.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody02.skeleton} />
            <skinnedMesh name="MainBody03" geometry={nodes.MainBody03.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody03.skeleton} />
            <skinnedMesh name="MainBody04" geometry={nodes.MainBody04.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody04.skeleton} />
            <skinnedMesh name="MainBody05" geometry={nodes.MainBody05.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody05.skeleton} />
            <skinnedMesh name="MainBody06" geometry={nodes.MainBody06.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody06.skeleton} /> */}
          </group>
         <Bodyparts/>
          <Eyes/>
         <Glove/>
          <Headparts/>
         <MouseAndNoses/>
          <primitive object={nodes.root} />
          <Tails/>
        </group>
      </group>
    </group>
    </mesh>
   
    )
  }
  
function LabelingCharacter(){
    return(
        <LabelingCharacterDiv>  
            <Canvas>
            <Suspense fallback={null}>
            <ambientLight />
              <Model/>
              </Suspense>
            </Canvas>       
        </LabelingCharacterDiv>
    )
}

export default LabelingCharacter