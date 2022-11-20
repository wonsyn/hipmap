import { useRef,useEffect,useState } from "react";
import { useGLTF,useAnimations} from '@react-three/drei';

function PartyAnimal(){
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/img/PartyAnimal.glb')
  const { actions } = useAnimations(animations, group);
  const [name, setName] = useState("Idle01");

  useEffect(() => {
    actions[name].play();
  });

    return (
        <group ref={group} dispose={null} scale={[2.2,2.2,2.2]} position={[0,-1.7,0]}>
        <group name="PartyAnimal">
          <group name="PartyAnimal_1">
            <group name="Bodies" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="MainBody03" geometry={nodes.MainBody03.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody03.skeleton} />
            </group>
            <group name="Bodyparts" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Bodypart02" geometry={nodes.Bodypart02.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart02.skeleton} />
              <skinnedMesh name="Bodypart03" geometry={nodes.Bodypart03.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart03.skeleton} />
            </group>
            <group name="Eyes" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Eye09" geometry={nodes.Eye09.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye09.skeleton} />
            </group>
            <group name="Gloves" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Glove03" geometry={nodes.Glove03.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove03.skeleton} />
            </group>
            <group name="Headparts" rotation={[-Math.PI / 2, 0, 0]} />
            <group name="MouthandNoses" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Mouth09" geometry={nodes.Mouth09.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth09.skeleton} />
            </group>
            <primitive object={nodes.root} />
            <group name="Tails" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Tail04" geometry={nodes.Tail04.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail04.skeleton} />
            </group>
          </group>
        </group>
      </group>
   
    )
}

export default PartyAnimal