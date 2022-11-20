import { useRef,useState } from "react";
import { useGLTF} from '@react-three/drei'


export default function Tails() {
    const group = useRef()
    const { nodes, materials } = useGLTF('/img/fullcharacter.glb')
    const [name, setName] = useState("Tail01");
    
    const a = nodes[name]

   
    useGLTF.preload('/C11.glb') // 더 빨리 부르라고 
      return (
             
        <group name="Tails" rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh name={name} geometry={a.geometry} material={materials.DefaultPBR01} skeleton={a.skeleton} />
        {/* <skinnedMesh name="Tail02" geometry={nodes.Tail02.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail02.skeleton} />
        <skinnedMesh name="Tail03" geometry={nodes.Tail03.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail03.skeleton} />
        <skinnedMesh name="Tail04" geometry={nodes.Tail04.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail04.skeleton} />
        <skinnedMesh name="Tail05" geometry={nodes.Tail05.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail05.skeleton} />
        <skinnedMesh name="Tail06" geometry={nodes.Tail06.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail06.skeleton} />
        <skinnedMesh name="Tail07" geometry={nodes.Tail07.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail07.skeleton} />
        <skinnedMesh name="Tail08" geometry={nodes.Tail08.geometry} material={materials.DefaultPBR01} skeleton={nodes.Tail08.skeleton} /> */}
      </group>
      )
    }