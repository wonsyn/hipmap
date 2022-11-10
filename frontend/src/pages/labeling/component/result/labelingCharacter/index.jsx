import { LabelingCharacterDiv } from "../../../styles/result";
// import { ImgContainer } from "../../../../main/styles/ImgStyle";
// import result_sample from "../../../../../assets/labeling/result/result_sample.png"
// import { SelectLabelingChar } from "../labelingCalc";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Suspense, useRef,useEffect,useState } from "react";
import { Canvas } from '@react-three/fiber'
import { useGLTF,PerspectiveCamera,useAnimations} from '@react-three/drei'



// 되는 놈 
function Model({...props}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/C11.glb')
  const { actions } = useAnimations(animations, group);
  const [name, setName] = useState("Idle01")
  useEffect(() => {
    console.log(actions)
    actions[name].play();
  });
  // useEffect(() => {
  //   console.log(actions) // find out the name of your action
  //   actions.someAction.play()
  //   });
  useGLTF.preload('/C11.glb') // 더 빨리 부르라고 
    return (
      <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 21, 0, 0]} scale={[2, 2, 2]} name="C11">
        <group name="C11_1">
          <group name="Bodies" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name="MainBody01" geometry={nodes.MainBody06.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody06.skeleton} />
          </group>
          <group name="Bodyparts" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name="Bodypart06" geometry={nodes.Bodypart06.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart06.skeleton} />
          </group>
          <group name="Eyes" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name="Eye11" geometry={nodes.Eye11.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye11.skeleton} />
          </group>
          <group name="Gloves" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name="Glove05" geometry={nodes.Glove05.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove05.skeleton} />
          </group>
          <group name="Headparts" rotation={[-Math.PI / 2, 0, 0]} />
          <group name="MouthandNoses" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name="Mouth15" geometry={nodes.Mouth15.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth15.skeleton} />
          </group>
          <primitive object={nodes.root} />
          <group name="Tails" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name="Tail06" geometry={nodes.Tail06.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail06.skeleton} />
          </group>
        </group>
      </group>
    </group>
    )
  }
  
// function Model() {
        
//     const loader = new GLTFLoader();
//     loader.load(
//     './Astronaut.glb',
//     ( gltf ) => {
//         // called when the resource is loaded
//         scene.add( gltf.scene );
//     },
//     ( xhr ) => {
//         // called while loading is progressing
//         console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
//     },
//     ( error ) => {
//         // called when loading has errors
//         console.error( 'An error happened', error );
//     },
// );
    // const { nodes, materials } = useGLTF('https://hipmap.s3.ap-northeast-2.amazonaws.com/labelCharacter/C02.glb')
    
    // const gltf= useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb')
    // const gltf= useGLTF('Astronaut.glb')
    // console.log(gltf);
    // return (<primitive object={gltf.scene} />)
    
    // return(
    //     <p>뿡</p>
    // )
    
  // }

// function Model(){
//     const gltf = useGLTF('./Astronaut.glb')
//   return (<primitive object={gltf.scene} />)
// }
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