import { useRef,useState } from "react";
import { useGLTF} from '@react-three/drei'


export default function Glove() {
    const group = useRef()
    const { nodes, materials, animations  } = useGLTF('/img/fullcharacter.glb')
    const [name, setName] = useState("Glove01");
    
    const a = nodes[name]

   
    useGLTF.preload('/C11.glb') // 더 빨리 부르라고 
      return (
             
            <group name="Gloves" rotation={[-Math.PI / 2, 0, 0]}>
              {/* <skinnedMesh name={name} geometry={a.geometry} material={materials.DefaultPBR02} skeleton={nodes.name.skeleton} /> */}
              <skinnedMesh name={name} geometry={a.geometry} material={materials.DefaultPBR02} skeleton={a.skeleton} />
              {/* <skinnedMesh name="Glove03" geometry={nodes.Glove03.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove03.skeleton} />
              <skinnedMesh name="Glove04" geometry={nodes.Glove04.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove04.skeleton} />
              <skinnedMesh name="Glove05" geometry={nodes.Glove05.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove05.skeleton} />
              <skinnedMesh name="Glove06" geometry={nodes.Glove06.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove06.skeleton} />
              <skinnedMesh name="Glove07" geometry={nodes.Glove07.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove07.skeleton} />
              <skinnedMesh name="Glove08" geometry={nodes.Glove08.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove08.skeleton} />
              <skinnedMesh name="Glove09" geometry={nodes.Glove09.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove09.skeleton} />
              <skinnedMesh name="Glove10" geometry={nodes.Glove10.geometry} material={materials.DefaultPBR02} skeleton={nodes.Glove10.skeleton} /> */}
            </group>
      )
    }