import { useRef,useState } from "react";
import { useGLTF} from '@react-three/drei'


export default function MouseAndNoses() {
    const group = useRef()
    const { nodes, materials , animations } = useGLTF('/img/fullcharacter.glb')
    const [name, setName] = useState("Mouth01");
    
    const a = nodes[name]

    useGLTF.preload('/C11.glb') // 더 빨리 부르라고 
      return (
             
        <group name="MouthandNoses" rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh name={name} geometry={a.geometry} material={materials.DefaultPBR01} skeleton={a.skeleton} />
        {/* <skinnedMesh name="Mouth02" geometry={nodes.Mouth02.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth02.skeleton} />
        <skinnedMesh name="Mouth03" geometry={nodes.Mouth03.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth03.skeleton} />
        <skinnedMesh name="Mouth04" geometry={nodes.Mouth04.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth04.skeleton} />
        <skinnedMesh name="Mouth05" geometry={nodes.Mouth05.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth05.skeleton} />
        <skinnedMesh name="Mouth06" geometry={nodes.Mouth06.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth06.skeleton} />
        <skinnedMesh name="Mouth07" geometry={nodes.Mouth07.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth07.skeleton} />
        <skinnedMesh name="Mouth08" geometry={nodes.Mouth08.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth08.skeleton} />
        <skinnedMesh name="Mouth09" geometry={nodes.Mouth09.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth09.skeleton} />
        <skinnedMesh name="Mouth15" geometry={nodes.Mouth15.geometry} material={materials.DefaultPBR01} skeleton={nodes.Mouth15.skeleton} />
        <skinnedMesh name="Nose10" geometry={nodes.Nose10.geometry} material={materials.DefaultPBR01} skeleton={nodes.Nose10.skeleton} />
        <skinnedMesh name="Nose11" geometry={nodes.Nose11.geometry} material={materials.DefaultPBR01} skeleton={nodes.Nose11.skeleton} />
        <skinnedMesh name="Nose12" geometry={nodes.Nose12.geometry} material={materials.DefaultPBR01} skeleton={nodes.Nose12.skeleton} />
        <skinnedMesh name="Nose13" geometry={nodes.Nose13.geometry} material={materials.DefaultPBR01} skeleton={nodes.Nose13.skeleton} />
        <skinnedMesh name="Nose14" geometry={nodes.Nose14.geometry} material={materials.DefaultPBR01} skeleton={nodes.Nose14.skeleton} /> */}
      </group>
      )
    }