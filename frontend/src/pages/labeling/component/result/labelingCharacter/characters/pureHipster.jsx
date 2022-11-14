import { useRef,useEffect,useState } from "react";
import { useGLTF,useAnimations} from '@react-three/drei';

function PureHipster(){
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/img/PureHipster.glb')
  const { actions } = useAnimations(animations, group);
  const [name, setName] = useState("Idle01");

  useEffect(() => {
    actions[name].play();
  });

    return (
        <group ref={group}  dispose={null}>
        <group name="PureHipster" scale={[2.2,2.2,2.2]} position={[0,-1.7,0]}>
          <group name="PureHipster_1">
            <group name="Bodies" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="MainBody01" geometry={nodes.MainBody01.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody01.skeleton} />
            </group>
            <group name="Bodyparts" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Bodypart01" geometry={nodes.Bodypart01.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart01.skeleton} />
            </group>
            <group name="Eyes" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Eye06" geometry={nodes.Eye06.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye06.skeleton} />
            </group>
            <group name="Gloves" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Glove01" geometry={nodes.Glove01.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove01.skeleton} />
            </group>
            <group name="Headparts" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Ear01" geometry={nodes.Ear01.geometry} material={materials.DefaultPBR02} skeleton={nodes.Ear01.skeleton} />
            </group>
            <group name="MouthandNoses" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Mouth07" geometry={nodes.Mouth07.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth07.skeleton} />
            </group>
            <primitive object={nodes.root} />
            <group name="Tails" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Tail01" geometry={nodes.Tail01.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail01.skeleton} />
            </group>
          </group>
        </group>
      </group>
   
    )
}

export default PureHipster