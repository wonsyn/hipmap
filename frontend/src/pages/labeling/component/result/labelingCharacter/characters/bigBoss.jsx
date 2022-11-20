import { useRef,useEffect,useState } from "react";
import { useGLTF,useAnimations} from '@react-three/drei';

function BigBoss(){
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/img/BigBoss.glb')
  const { actions } = useAnimations(animations, group);
  const [name, setName] = useState("Idle01");

  useEffect(() => {
    actions[name].play();
  });

    return (
        <group ref={group}  dispose={null} scale={[2.2,2.2,2.2]} position={[0,-1.7,0]}>
        <group name="BigBoss">
          <group name="BigBoss_1">
            <group name="Bodies" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="MainBody03" geometry={nodes.MainBody03.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody03.skeleton} />
            </group>
            <group name="Bodyparts" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Bodypart06" geometry={nodes.Bodypart06.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart06.skeleton} />
            </group>
            <group name="Eyes" rotation={[-Math.PI / 2, 0, 0]} />
            <group name="Gloves" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Glove08" geometry={nodes.Glove08.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove08.skeleton} />
            </group>
            <group name="Headparts" rotation={[-Math.PI / 2, 0, 0]} />
            <group name="MouthandNoses" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Mouth04" geometry={nodes.Mouth04.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth04.skeleton} />
            </group>
            <primitive object={nodes.root} />
            <group name="Tails" rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
      </group>
   
    )
}

export default BigBoss