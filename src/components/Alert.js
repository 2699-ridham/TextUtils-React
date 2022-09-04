import React from 'react'

function Alert(props) {
    const Capitalize=(word)=>{
        const str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  return (
    //important syntax -> which can replace the if else if initial value is null;
    //'porps.Alertmsg &&' means that if 'porps.Alertmsg' is null then next value will not be execute
    props.Alertmsg && <div className={`alert alert-${props.Alertmsg.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.Alertmsg.type)}</strong>: {props.Alertmsg.msg}
    </div>
  )
}

export default Alert
