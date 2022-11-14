import { useRef,useState } from "react";
import { useGLTF,useAnimations} from '@react-three/drei'


export default function Eyes() {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/img/fullcharacter.glb')
    const [name, setName] = useState("Eye01");
    const a = nodes[name]


   
    useGLTF.preload('/C11.glb') // 더 빨리 부르라고 
      return (
             
        <group name="Eyes" rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh name={name} geometry={a.geometry} material={materials.DefaultPBR01} skeleton={a.skeleton} />
            {/* <skinnedMesh name="Eye02" geometry={nodes.Eye02.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye02.skeleton} />
            <skinnedMesh name="Eye04" geometry={nodes.Eye04.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye04.skeleton} />
            <skinnedMesh name="Eye05" geometry={nodes.Eye05.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye05.skeleton} />
            <skinnedMesh name="Eye06" geometry={nodes.Eye06.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye06.skeleton} />
            <skinnedMesh name="Eye08" geometry={nodes.Eye08.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye08.skeleton} />
            <skinnedMesh name="Eye09" geometry={nodes.Eye09.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye09.skeleton} />
            <skinnedMesh name="Eye10" geometry={nodes.Eye10.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye10.skeleton} />
            <skinnedMesh name="Eye11" geometry={nodes.Eye11.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye11.skeleton} />
            <skinnedMesh name="Eye12" geometry={nodes.Eye12.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye12.skeleton} />
            <skinnedMesh name="Eye15" geometry={nodes.Eye15.geometry} material={materials.DefaultPBR01} skeleton={nodes.Eye15.skeleton} /> */}
          </group>
      )
    }