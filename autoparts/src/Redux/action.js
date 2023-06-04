import { getCartData } from "./actionTypes";
import { getDetailsPageData } from "./actionTypes";

export const getCartDataFun=(ele)=>{
    return{
        type:getCartData,
        payload:ele
    }
}

export const getDetailsData=(ele)=>{
    return{
        type:getDetailsPageData,
        payload:ele
    }
}
export const clearCartData=(payload)=>{
    return{
        type:"CLEAR_CART",
        payload
        
    }
}

export const getCheckoutData=(ele)=>{
    return{
        type:"Get_CheckOut",
        payload:ele
    }
}

