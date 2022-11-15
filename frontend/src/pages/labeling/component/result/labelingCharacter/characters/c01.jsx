import { useRef,useEffect,useState } from "react";
import { useGLTF,useAnimations} from '@react-three/drei';

function C01(){
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/img/C01.glb')
  const { actions } = useAnimations(animations, group);
  const [name, setName] = useState("Idle01");

  useEffect(() => {
    actions[name].play();
  });

    return (
        <group ref={group}  dispose={null} scale={[2.2,2.2,2.2]} position={[0,-1.7,0]}>
        <group name="C01">
          <group name="C01_1">
            <group name="Bodies" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="MainBody01" geometry={nodes.MainBody01.geometry} material={materials.DefaultPBR01} skeleton={nodes.MainBody01.skeleton} />
            </group>
            <group name="Bodyparts" rotation={[-Math.PI / 2, 0, 0]} />
            <group name="Eyes" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Eye01" geometry={nodes.Eye01.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye01.skeleton} />
            </group>
            <group name="Gloves" rotation={[-Math.PI / 2, 0, 0]} />
            <group name="Headparts" rotation={[-Math.PI / 2, 0, 0]} />
            <group name="MouthandNoses" rotation={[-Math.PI / 2, 0, 0]}>
              <skinnedMesh name="Mouth01" geometry={nodes.Mouth01.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth01.skeleton} />
            </group>
            <primitive object={nodes.root} />
            <group name="Tails" rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
      </group>
   
    )
}

export default C01