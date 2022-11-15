import { useRef,useState } from "react";
import { useGLTF,useAnimations} from '@react-three/drei'


export default function Headparts() {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/img/fullcharacter.glb')
    const [name, setName] = useState("Ear01");
    
    const a = nodes[name]
   
    useGLTF.preload('/C11.glb') // 더 빨리 부르라고 
      return (
             
        <group name="Headparts" rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh name={name} geometry={a.geometry} material={materials.DefaultPBR02} skeleton={a.skeleton} />
        {/* <skinnedMesh name="Hair07" geometry={nodes.Hair07.geometry} material={materials.DefaultPBR02} skeleton={nodes.Hair07.skeleton} />
        <skinnedMesh name="Hair08" geometry={nodes.Hair08.geometry} material={materials.DefaultPBR02} skeleton={nodes.Hair08.skeleton} />
        <skinnedMesh name="Hat18" geometry={nodes.Hat18.geometry} material={materials.DefaultPBR02} skeleton={nodes.Hat18.skeleton} /> */}
      </group>
      )
    }