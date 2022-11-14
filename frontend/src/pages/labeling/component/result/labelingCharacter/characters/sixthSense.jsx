import { useRef,useEffect,useState } from "react";
import { useGLTF,useAnimations} from '@react-three/drei';

function SixthSense(){
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/img/SixthSense.glb')
  const { actions } = useAnimations(animations, group);
  const [name, setName] = useState("Idle01");

  useEffect(() => {
    actions[name].play();
  });

    return (
        <group ref={group}  dispose={null} scale={[2.2,2.2,2.2]} position={[0,-1.7,0]}>
        <group name="SixthSense">
          <group name="SixthSense_1">
            <group name="Bodies" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="MainBody06" geometry={nodes.MainBody06.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody06.skeleton} />
            </group>
            <group name="Bodyparts" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Bodypart10" geometry={nodes.Bodypart10.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart10.skeleton} />
            </group>
            <group name="Eyes" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Eye01" geometry={nodes.Eye01.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye01.skeleton} />
            </group>
            <group name="Gloves" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Glove10" geometry={nodes.Glove10.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove10.skeleton} />
            </group>
            <group name="Headparts" rotation={[-Math.PI / 2, 0, 0]} />
            <group name="MouthandNoses" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Nose14" geometry={nodes.Nose14.geometry} material={materials.DefaultPBR01} skeleton={nodes.Nose14.skeleton} />
            </group>
            <primitive object={nodes.root} />
            <group name="Tails" rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
      </group>
    )
}

export default SixthSense