import { connect } from 'react-redux'

function Mobile(props){
    return(
        <div>
            <h1>My Name {props.sname} </h1>
            <h1>My Mobile {props.smobile} </h1>
            <button onClick={()=>{props.changeMobile("+92 301 7198 622")}}>Click for Change Mobile </button>
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
        changeMobile:(mobile)=>{
            dispatch({
                type: 'CHANGE_MOBILE',
                payload: mobile
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mobile)