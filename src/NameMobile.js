import {connect} from 'react-redux'

function Name(props){
    console.log(props)
    return(
        <div>
            <h1>My Name is {props.sname}</h1>
            <h1>My Mobile {props.smobile}</h1>
            <button onClick={()=>{props.changeName("Mehmood")}}>Click for Change Name</button>
            <button onClick={()=>{props.changeMobile("+92 301 7198 622")}}>Click for Change Mobile</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        sname:state.name,
        smobile:state.mobile
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changeName:(name)=>{
            dispatch({
                type: 'CHANGE_NAME',
                payload: name
            })
        },
        changeMobile:(mobile)=>{
            dispatch({
                type: 'CHANGE_MOBILE',
                payload: mobile
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Name)