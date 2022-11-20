import { useRef,useState } from "react";
import { useGLTF,useAnimations} from '@react-three/drei'


export default function Bodyparts() {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/img/fullcharacter.glb')
    const [name, setName] = useState("Bodypart01");
    const a = nodes[name]

   
    useGLTF.preload('/C11.glb') // 더 빨리 부르라고 
      return (
             
        <group name="Bodyparts" rotation={[-Math.PI / 2, 0, 0]}>
        {/* <skinnedMesh name="Bodypart01" geometry={nodes.Bodypart01.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart01.skeleton} />
        <skinnedMesh name="Bodypart02" geometry={nodes.Bodypart02.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart02.skeleton} />
        <skinnedMesh name="Bodypart03" geometry={nodes.Bodypart03.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart03.skeleton} />
        <skinnedMesh name="Bodypart04" geometry={nodes.Bodypart04.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart04.skeleton} />
        <skinnedMesh name="Bodypart05" geometry={nodes.Bodypart05.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart05.skeleton} />
        <skinnedMesh name="Bodypart06" geometry={nodes.Bodypart06.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart06.skeleton} />
        <skinnedMesh name="Bodypart07" geometry={nodes.Bodypart07.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart07.skeleton} />
        <skinnedMesh name="Bodypart08" geometry={nodes.Bodypart08.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart08.skeleton} />
        <skinnedMesh name="Bodypart09" geometry={nodes.Bodypart09.geometry} material={materials.DefaultPBR01} skeleton={nodes.Bodypart09.skeleton} /> */}
        <skinnedMesh name={name} geometry={a.geometry} material={materials.DefaultPBR01} skeleton={a.skeleton} />
      </group>
      )
    }