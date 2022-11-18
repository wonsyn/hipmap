import React from 'react';
import Select from 'react-select'
import { SelectDiv, SelectWrappingDiv } from '../../../styles/fullmap';
import { useState } from 'react';
import { useSi } from '../../../../../hoc/hipMap/fullMap/useSi';
import { useGu } from '../../../../../hoc/hipMap/fullMap/useGu';
import { useDong } from '../../../../../hoc/hipMap/fullMap/useDong';
import { useDispatch } from 'react-redux';
import { saveSiGuDong } from '../../../../../store/hipMap/hipMapStore';
// 밖에서 select 할 것들 만들어서 안에다가 넣어줘야한다!
function SelectSi(){
  const {data: siData, isFetching: isSiFetching} = useSi(
    {
        queryKey: "siData",
        uri: "/area/sido",
    }
  )
  if(!isSiFetching){
    let bigList: any = []
    siData.sidoList.map((si: any, i: number) => {
      let values: any = {}
      values.value = si['code']
      values.label = si['sido']
      bigList.push(values)
    })
    return bigList
  }
}

function SelectGu(si: any){
  const {data: guData, isFetching: isGuFetching} = useGu(
    {
        queryKey: "guData",
        uri: "/area/gugun",
        sido: `${si.siCode}`
    }
  )
  if(!isGuFetching && si){
    let middleList: any = []
    guData.gugunList.map((gu: any, i: number) => {
      let values: any = {}
      values.value = gu['code']
      values.label = gu['gugun']
      middleList.push(values)
    })
    return middleList
  } 
}
function SelectDong(gu: any){
  const {data: dongData, isFetching: isDongFetching} = useDong(
    {
        queryKey: "dongData",
        uri: "/area/dong",
        gugun: `${gu.guCode}`
    }
  )
  if(!isDongFetching && gu){
    let middleList: any = []
    dongData.dongList.map((dong: any, i: number) => {
      let values: any = {}
      values.value = dong['code']
      values.label = dong['dong']
      middleList.push(values)
    })
    return middleList
  } 
}


export default function SelectBox() {
  const dispatch = useDispatch()
  const [si, setSi] = useState<any>('');
  const [siName, setSiName] = useState<string>('');
  const [gu, setGu] = useState<any>('');
  const [guName, setGuName] = useState<string>('');
  const [dong, setDong] = useState<any>('');
  const [dongName, setDongName] = useState<string>('');
  if(siName && guName && dongName){
    dispatch(saveSiGuDong(
      {
        si: siName,
        gu: guName,
        dong: dongName
      }
    ))
  }
  return(
    <>
    <SelectWrappingDiv>
      <Select
        onChange={(e:any)=>{
          setSi({
          ...si,
          siCode: e.value})
          setSiName(e.label)
        }}
        options={SelectSi()}
        placeholder="도 / 시"/>
      <Select
        onChange={(e:any)=>{
          setGu({
          ...gu,
          guCode: e.value})
          setGuName(e.label)
        }}
          options={SelectGu(si)}
          placeholder="군 / 구"/>
      <Select
        onChange={(e:any)=>{
          setDong({
          ...dong,
          dongCode: e.value})
          setDongName(e.label)
        }}
          options={SelectDong(gu)}
          placeholder="동 / 면"/>
    </SelectWrappingDiv>
    </>
  )
}