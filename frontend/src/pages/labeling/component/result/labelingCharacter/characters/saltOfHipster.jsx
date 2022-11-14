import { useRef,useEffect,useState } from "react";
import { useGLTF,useAnimations} from '@react-three/drei';

function SaltOfHipster(){
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/img/SaltOfHipster.glb')
  const { actions } = useAnimations(animations, group);
  const [name, setName] = useState("Idle01");

  useEffect(() => {
    actions[name].play();
  });

    return (
        <group ref={group}  dispose={null} scale={[2.2,2.2,2.2]} position={[0,-1.7,0]}>
        <group name="SaltOfHipster">
          <group name="SaltOfHipster_1">
            <group name="Bodies" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="MainBody04" geometry={nodes.MainBody04.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody04.skeleton} />
            </group>
            <group name="Bodyparts" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Bodypart05" geometry={nodes.Bodypart05.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart05.skeleton} />
            </group>
            <group name="Eyes" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Eye10" geometry={nodes.Eye10.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye10.skeleton} />
            </group>
            <group name="Gloves" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Glove04" geometry={nodes.Glove04.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove04.skeleton} />
            </group>
            <group name="Headparts" rotation={[-Math.PI / 2, 0, 0]} />
            <group name="MouthandNoses" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Nose10" geometry={nodes.Nose10.geometry} material={materials.DefaultPBR01} skeleton={nodes.Nose10.skeleton} />
            </group>
            <primitive object={nodes.root} />
            <group name="Tails" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Tail05" geometry={nodes.Tail05.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail05.skeleton} />
            </group>
          </group>
        </group>
      </group>
    )
}

export default SaltOfHipster