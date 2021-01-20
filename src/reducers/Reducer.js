const iState={
    name:"Yasir",
    mobile:"+92 301 7198 621"
}

const Reducer=(state=iState,action) =>{
    var choose=action.type
    switch(choose){
        case 'CHANGE_NAME': return {...state, name:action.payload}
        case 'CHANGE_MOBILE': return {...state, mobile:action.payload}
        default: return state
    }
}

export default Reducer