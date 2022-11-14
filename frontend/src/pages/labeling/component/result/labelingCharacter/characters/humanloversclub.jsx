import { useRef,useEffect,useState } from "react";
import { useGLTF,useAnimations} from '@react-three/drei';

function Humanloversclub(){
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/img/Humanloversclub.glb')
  const { actions } = useAnimations(animations, group);
  const [name, setName] = useState("Idle01");

  useEffect(() => {
    actions[name].play();
  });

    return (
        <group ref={group} dispose={null} scale={[2.2,2.2,2.2]} position={[0,-1.7,0]}>
      <group name="Humanloversclub">
        <group name="Humanloversclub_1">
          <group name="Bodies" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name="MainBody02" geometry={nodes.MainBody02.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody02.skeleton} />
          </group>
          <group name="Bodyparts" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name="Bodypart09" geometry={nodes.Bodypart09.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart09.skeleton} />
          </group>
          <group name="Eyes" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name="Eye15" geometry={nodes.Eye15.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye15.skeleton} />
          </group>
          <group name="Gloves" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name="Glove09" geometry={nodes.Glove09.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove09.skeleton} />
          </group>
          <group name="Headparts" rotation={[-Math.PI / 2, 0, 0]} />
          <group name="MouthandNoses" rotation={[-Math.PI / 2, 0, 0]} />
          <primitive object={nodes.root} />
          <group name="Tails" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name="Tail08" geometry={nodes.Tail08.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail08.skeleton} />
          </group>
        </group>
      </group>
    </group>
   
    )
}

export default Humanloversclub