import React from 'react'

function Alert(props) {
    const Capitalize=(word)=>{
        const str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  return (
    //important syntax -> which can replace the if else ,if initial value is null;
    //'porps.Alertmsg &&' means that if 'porps.Alertmsg' is null then next value will not be execute
    <div style = {{height : '40px'}}>
      {props.Alertmsg && <div className={`alert alert-${props.Alertmsg.type} alert-dismissible fade show`} role="alert">
          <strong>{Capitalize(props.Alertmsg.type)}</strong>: {props.Alertmsg.msg}
      </div>}
    </div>
  )
}

export default Alert
