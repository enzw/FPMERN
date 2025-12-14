import React from "react";
import style from "./index.module.css"
import { info } from "sass";

export default class Module extends React.Component{
    render() {
        return(
            <div>
                <button className={`${style.btn} ${style.btnInfo}`}>Enzo</button>
            </div>
        )
    }
}