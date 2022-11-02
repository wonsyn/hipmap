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
      }
    },
  });

export const { saveClick, saveSudogwan, saveGwandong, saveHoseo, saveHonam, saveYungnam, saveJeju, saveName} = HipMapSlice.actions

export const { saveSudogwanMobile, saveGwandongMobile, saveHoseoMobile, saveHonamMobile, saveYungnamMobile, saveJejuMobile, saveDeskTop } = HipMapSlice.actions
 
export const hipMapState = (state: RootState) => state.labelingReducer;

export default HipMapSlice.reducer;