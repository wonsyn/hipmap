import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface hipMapState {
   isClicked: boolean
   isSudogwan: boolean
   isGwandong: boolean
   isHoseo: boolean
   isHonam: boolean
   isYungnam: boolean
   isJeju: boolean
   name: string
   isSudogwanMobile: boolean
   isGwandongMobile: boolean
   isHoseoMobile: boolean
   isHonamMobile: boolean
   isYungnamMobile: boolean
   isJejuMobile: boolean
   isDeskTop: boolean
   sudogwanAnime: boolean
   gwandongAnime: boolean
   hoseoAnime: boolean
   honamAnime: boolean
   yungnamAnime: boolean
   jejuAnime: boolean
   sameLabelingCheck: boolean
   region: string
   si: string
   gu: string
   dong: string


}

const initialState: hipMapState = {
   isClicked: false,
   isSudogwan: false,
   isGwandong: false,
   isHoseo: false,
   isHonam: false,
   isYungnam: false,
   isJeju: false,
   name: "",
   isSudogwanMobile: false,
   isGwandongMobile: false,
   isHoseoMobile: false,
   isHonamMobile: false,
   isYungnamMobile: false,
   isJejuMobile: false,
   isDeskTop: false,
   sudogwanAnime: false,
   gwandongAnime: false,
   hoseoAnime: false,
   honamAnime: false,
   yungnamAnime: false,
   jejuAnime: false,
   sameLabelingCheck: false,
   region: "",
   si: "",
   gu: "", 
   dong: "",
}

export const HipMapSlice = createSlice({
    name: "HipMapSlice",
    initialState,
    reducers: {
      saveClick(state){
        state.isClicked = !state.isClicked
      },
      saveSudogwan(state){
        state.isSudogwan = !state.isSudogwan
      },
      saveGwandong(state){
        state.isGwandong = !state.isGwandong
      },
      saveHoseo(state){
        state.isHoseo = !state.isHoseo
      },
      saveHonam(state){
        state.isHonam = !state.isHonam
      },
      saveYungnam(state){
        state.isYungnam = !state.isYungnam
      },
      saveJeju(state){
        state.isJeju = !state.isJeju
      },
      saveName(state, action){
        state.name = action.payload.name
      },
      saveSudogwanMobile(state, action){
        state.isSudogwanMobile = action.payload.isSudogwanMobile
      },
      saveGwandongMobile(state, action){
        state.isGwandongMobile = action.payload.isGwandongMobile
      },
      saveHoseoMobile(state, action){
        state.isHoseoMobile = action.payload.isHoseoMobile
      },
      saveHonamMobile(state, action){
        state.isHonamMobile = action.payload.isHonamMobile
      },
      saveYungnamMobile(state, action){
        state.isYungnamMobile = action.payload.isYungnamMobile
      },
      saveJejuMobile(state, action){
        state.isJejuMobile = action.payload.isJejuMobile
      },
      saveDeskTop(state){
        state.isDeskTop = !state.isDeskTop
      },
      saveSudogwanAnime(state){
        state.sudogwanAnime = !state.sudogwanAnime
      },
      saveGwandongAnime(state){
        state.gwandongAnime = !state.gwandongAnime
      },
      saveHoseoAnime(state){
        state.hoseoAnime = !state.hoseoAnime
      },
      saveHonamAnime(state){
        state.honamAnime = !state.honamAnime
      },
      saveYungnamAnime(state){
        state.yungnamAnime = !state.yungnamAnime
      },
      saveJejuAnime(state){
        state.jejuAnime = !state.jejuAnime
      },
      saveSameLabelingCheck(state){
        state.sameLabelingCheck = !state.sameLabelingCheck
      },
      saveRegion(state, action){
        state.region = action.payload.region
      },
      saveSiGuDong(state, action){
        state.si = action.payload.si
        state.gu = action.payload.gu
        state.dong = action.payload.dong
      }
    },
  });

export const { saveClick, saveSudogwan, saveGwandong, saveHoseo, saveHonam, saveYungnam, saveJeju, saveName} = HipMapSlice.actions

export const { saveSudogwanMobile, saveGwandongMobile, saveHoseoMobile, saveHonamMobile, saveYungnamMobile, saveJejuMobile, saveDeskTop } = HipMapSlice.actions
export const { saveSudogwanAnime, saveGwandongAnime, saveHoseoAnime, saveHonamAnime, saveYungnamAnime, saveJejuAnime } = HipMapSlice.actions
export const { saveSameLabelingCheck } = HipMapSlice.actions
export const { saveRegion } =  HipMapSlice.actions 
export const { saveSiGuDong } =  HipMapSlice.actions 
export const hipMapState = (state: RootState) => state.labelingReducer;

export default HipMapSlice.reducer;