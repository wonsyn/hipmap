import { useRef,useEffect,useState } from "react";
import { useGLTF,useAnimations} from '@react-three/drei';

function Efficiency(){
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/img/Efficiency.glb')
  const { actions } = useAnimations(animations, group);
  const [name, setName] = useState("Idle01");

  useEffect(() => {
    actions[name].play();
  });

    return (
        <group ref={group}  dispose={null} scale={[2.2,2.2,2.2]} position={[0,-1.7,0]}>
        <group name="Efficiency">
          <group name="Efficiency_1">
            <group name="Bodies" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="MainBody04" geometry={nodes.MainBody04.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody04.skeleton} />
            </group>
            <group name="Bodyparts" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Bodypart07" geometry={nodes.Bodypart07.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart07.skeleton} />
            </group>
            <group name="Eyes" rotation={[-Math.PI / 2, 0, 0]} />
            <group name="Gloves" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Glove07" geometry={nodes.Glove07.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove07.skeleton} />
            </group>
            <group name="Headparts" rotation={[-Math.PI / 2, 0, 0]} />
            <group name="MouthandNoses" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Nose12" geometry={nodes.Nose12.geometry} material={materials.DefaultPBR01} skeleton={nodes.Nose12.skeleton} />
            </group>
            <primitive object={nodes.root} />
            <group name="Tails" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Tail08" geometry={nodes.Tail08.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail08.skeleton} />
            </group>
          </group>
        </group>
      </group>
   
    )
}

export default Efficiency