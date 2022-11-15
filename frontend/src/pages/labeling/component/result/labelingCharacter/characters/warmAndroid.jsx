import { useRef,useEffect,useState } from "react";
import { useGLTF,useAnimations} from '@react-three/drei';

function WarmAndroid(){
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/img/WarmAndroid.glb')
  const { actions } = useAnimations(animations, group);
  const [name, setName] = useState("Idle01");

  useEffect(() => {
    actions[name].play();
  });

    return (
        <group ref={group} dispose={null} scale={[2.2,2.2,2.2]} position={[0,-1.7,0]}>
        <group name="WarmAndroid">
          <group name="WarmAndroid_1">
            <group name="Bodies" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="MainBody05" geometry={nodes.MainBody05.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody05.skeleton} />
            </group>
            <group name="Bodyparts" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Bodypart09" geometry={nodes.Bodypart09.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart09.skeleton} />
            </group>
            <group name="Eyes" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Eye01" geometry={nodes.Eye01.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye01.skeleton} />
            </group>
            <group name="Gloves" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Glove02" geometry={nodes.Glove02.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove02.skeleton} />
            </group>
            <group name="Headparts" rotation={[-Math.PI / 2, 0, 0]} />
            <group name="MouthandNoses" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Nose13" geometry={nodes.Nose13.geometry} material={materials.DefaultPBR01} skeleton={nodes.Nose13.skeleton} />
            </group>
            <primitive object={nodes.root} />
            <group name="Tails" rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
      </group>
   
    )
}

export default WarmAndroid 