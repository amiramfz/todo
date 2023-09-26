import { useState } from "react";
import index from "../index.module.css";
import Date from "./date/Date";
import Table from "./table/Table";


function FirstPage(props) {
    let s = props.lan
    let j = props.sw
    console.log(j);

    if (j==1){

     return (
        <>
        <Date lan={s}/>
        </>
    
    );
}


    else{
        return(
            <>
            <Table lan={s}/>
            </>
        );
    }



  }
  
  export default FirstPage;
  