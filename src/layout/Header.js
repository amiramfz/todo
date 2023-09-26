import head from "./head.module.css";
import logo from "../images/logo.png";
import { useState } from "react";
import index from "../index.module.css";


function Header(props) {

  let [s, sets] = useState(1)
  let [j,setj]=useState(0)



 function language() {
  if (s==0)
  sets(1)
  else
  sets(0)

 props.mylang(s)
 }

 function BoxChanger() {
  if (s==0)
  setj(1)
  else
  setj(0)
 }


  return (
      <>
      <div className={head.HeadBox}>
        <img className={head.image} src={logo}/>
        <button className={head.butt} onClick={language}>{s==0 ?  "فارسی" : "English"}</button>
        <button className={head.butt2} onClick={BoxChanger}>{s==0 ? "Date/To Do" : "تاریخ / لیست کار"}</button>
      </div>
      </>
  
  );
}

export default Header;
