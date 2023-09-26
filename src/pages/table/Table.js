import { useState } from "react";
import index from "../../index.module.css";
import table from "./table.module.css";

function Table(props) {
  let s = props.lan;
 
  let numb = 0;
  let [title , settitle]= useState()
  let [body , setbody]= useState()

  let [data, setdata] = useState([]);

  function adder() {
    let f = {
        title : title ,
        explanation : body
    }
    setdata([...data, f]);
    
  }
  function titlep(e) {
    settitle(e.target.value)
  }
  function bodyp(e) {
    setbody(e.target.value)
    
  }

  return (
    <>

      <div className={table.BigBox}>
        <div className={table.SBox}>
            <div className={table.AddBox}>
                <input onChange={titlep} placeholder="موضوع کار جدید"/>
                <input onChange={bodyp} placeholder="توضیح کار جدید"/>
                <button className={table.butt} onClick={adder}>{s==0 ? "اضافه " : "Add"}</button>
            </div>
          <div className={table.TopPart}>
            <p className={table.radif}>{s == 0 ? "ردیف": "Nom" }</p>
            <p  className={table.mozo} >{s == 0 ? "موضوع" : "Title" }</p>
            <p  className={table.tozih} >{s == 0 ? "توضیح" : "Explanation"}</p>
            <p  className={table.done} >{s == 0 ? "انجام شد" : "Done"}</p>
          </div>
          <div>
            {data.map((x) => {
                numb++
              return (
                <>
                  <div className={table.itembox}>
                    <p className={table.radif}>{numb}</p>
                    <p className={table.mozo}>{x.title}</p>
                    <p className={table.tozih}>{x.explanation}</p>
                    <input className={table.done} type="checkbox"></input>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
