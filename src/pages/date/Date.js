import { useState } from "react";
import index from "../../index.module.css";
import Clock from 'react-live-clock';
import table from "../table/table.module.css";





function Data (){


     return (
        <>
         <div className={table.CloB}>
         <Clock filter={date => date.replace('8', '7a')} format={'HH:mm:ss'} ticking={true} />

         </div>
        </>
    
    );



  }
  
  export default Data;
  