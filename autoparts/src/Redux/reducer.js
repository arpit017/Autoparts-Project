let initialdata={
cartPageData:[]
}

let reducer=(store = initialdata,action)=>{
  
    if(action.type=="getCartData"){
        console.log("huihuihui")
        return{
           ...store,cartPageData:[...store.cartPageData,action.payload]
        }
    }

    return store;
}
export {reducer}