import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
interface labelingState {
  type1: {
      E: number
      I: number
  },
  type2: {
      N: number
      S: number
  },
  type3: {
      T: number
      F: number
  },
  type4: {
      J: number
      P: number
  },
  type5: {
      Chill: number
      Heng: number
  },
  type6: {
    Fashion: number
    Zzin: number
  },
  labelingName: string
}

const initialState: labelingState = {
  type1: {
      E: 0,
      I: 0
  },
  type2: {
      N: 0,
      S: 0
  },
  type3: {
      T: 0,
      F: 0
  },
  type4: {
      J: 0,
      P: 0
  },
  type5: {
      Chill: 0,
      Heng: 0
  },
  type6: {
    Fashion: 0,
    Zzin: 0
  },
  labelingName: ""
}


export const LabelingSlice = createSlice({
    name: "LabelingSlice",
    initialState,
    reducers: {
      saveCountE(state, action){
        console.log("들어오는지 확인합니다1")
        state.type1.E  = action.payload.E
      },
      saveCountI(state, action){
        console.log("들어오는지 확인합니다2")
        state.type1.I  = action.payload.I
      },
      saveCountN(state, action){
        console.log("들어오는지 확인합니다3")
        state.type2.N  = action.payload.N
      },
      saveCountS(state, action){
        console.log("들어오는지 확인합니다4")
        state.type2.S = action.payload.S
      },
      saveCountT(state, action){
        console.log("들어오는지 확인합니다5")
        state.type3.T = action.payload.T
      },
      saveCountF(state, action){
        console.log("들어오는지 확인합니다6")
        state.type3.F = action.payload.F
      },
      saveCountJ(state, action){
        console.log("들어오는지 확인합니다7")
        state.type4.J = action.payload.J
      },
      saveCountP(state, action){
        console.log("들어오는지 확인합니다8")
        state.type4.P  = action.payload.P
      },
      saveCountChill(state, action){
        console.log("들어오는지 확인합니다9")
        state.type5.Chill  = action.payload.Chill
      },
      saveCountHeng(state, action){
        console.log("들어오는지 확인합니다10")
        state.type5.Heng  = action.payload.Heng
      },
      saveCountFashion(state, action){
        console.log("들어오는지 확인합니다11")
        state.type6.Fashion  = action.payload.Fashion
      },
      saveCountZzin(state, action){
        console.log("들어오는지 확인합니다12")
        state.type6.Zzin  = action.payload.Zzin
      },
      saveLabelingName(state, action){
        state.labelingName = action.payload.labelingName
      }
    },
  });

export const { saveCountE, saveCountI, saveCountN, saveCountS, saveCountT, saveCountF, saveCountJ, saveCountP, 
  saveCountChill, saveCountHeng, saveCountFashion, saveCountZzin, 
  saveLabelingName } = LabelingSlice.actions
 
export const labelingState = (state: RootState) => state.labelingReducer;

export default LabelingSlice.reducer;