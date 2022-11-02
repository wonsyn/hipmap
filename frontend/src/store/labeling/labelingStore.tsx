import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
interface labelingState {
    type1: {
        selector1: number
        selector2: number
    }
    type2: {
        selector3: number
        selector4: number
    }
    type3: {
        selector5: number
        selector6: number
    }
    type4: {
        selector7: number
        selector8: number
    }
    type5: {
        selector9: number
        selector10: number
    }
}

const initialState: labelingState = {
    type1: {
        selector1: 0,
        selector2: 0
    },
    type2: {
        selector3: 0,
        selector4: 0
    },
    type3: {
        selector5: 0,
        selector6: 0
    },
    type4: {
        selector7: 0,
        selector8: 0
    },
    type5: {
        selector9: 0,
        selector10: 0
    }
}

export const LabelingSlice = createSlice({
    name: "LabelingSlice",
    initialState,
    reducers: {
      saveCount1(state){
        console.log("들어오는지 확인합니다1")
        state.type1.selector1 += 1
      },
      saveCount2(state){
        console.log("들어오는지 확인합니다2")
        state.type1.selector2 += 1
      },
      saveCount3(state){
        console.log("들어오는지 확인합니다3")
        state.type2.selector3 += 1
      },
      saveCount4(state){
        console.log("들어오는지 확인합니다4")
        state.type2.selector4 += 1
      },
      saveCount5(state){
        console.log("들어오는지 확인합니다5")
        state.type3.selector5 += 1
      },
      saveCount6(state){
        console.log("들어오는지 확인합니다6")
        state.type3.selector6 += 1
      },
      saveCount7(state){
        console.log("들어오는지 확인합니다7")
        state.type4.selector7 += 1
      },
      saveCount8(state){
        console.log("들어오는지 확인합니다8")
        state.type4.selector8 += 1
      },
      saveCount9(state){
        console.log("들어오는지 확인합니다9")
        state.type5.selector9 += 1
      },
      saveCount10(state){
        console.log("들어오는지 확인합니다10")
        state.type5.selector10 += 1
      },



    },
  });

export const { saveCount1, saveCount2, saveCount3, saveCount4, saveCount5, saveCount6, saveCount7, saveCount8, saveCount9, saveCount10 } = LabelingSlice.actions
 
export const labelingState = (state: RootState) => state.labelingReducer;

export default LabelingSlice.reducer;