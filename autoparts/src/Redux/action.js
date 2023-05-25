import { getCartData } from "./actionTypes";

export const getCartDataFun=(ele)=>{
    return{
        type:getCartData,
        payload:ele
    }
}