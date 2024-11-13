import React from "react";

export default function Alert(props){
    if(props.alertmessage==null){

    }
    else{
        return(
            <>
            <alert id="alertmessage"><span id="alertextcss">{props.alertmessage}</span><span id="checksign">✔️</span></alert>
            </>
        )
    }
}