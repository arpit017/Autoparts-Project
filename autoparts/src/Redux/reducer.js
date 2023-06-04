let initialdata={
cartPageData:[],
detailsPageData:{},
checkoutPageData:{}
}

let reducer=(store = initialdata,action)=>{
  
    if(action.type=="getCartData"){
        console.log("huihuihui")
        return{
           ...store,cartPageData:[...store.cartPageData,action.payload]
        }
    }else if(action.type=="getDetailsPageData"){
        return{
            ...store,detailsPageData:action.payload
        }
    }else if(action.type=="CLEAR_CART"){
        return{
            ...store,cartPageData:action.payload
        }
    }else if(action.type=="Get_CheckOut"){
        return{

            ...store,checkoutPageData:action.payload
        }
    }

    return store;
}
export {reducer}