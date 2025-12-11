// jadi si index.jsx ini fungsinya sebagai class yang menampung component2 tadi(class & functional)

import React from "react";
import { ClassComponent } from "./Pembahasan/ClassComponent.jsx";
import { FunctionalComponent } from "./Pembahasan/FunctionalComponent.jsx";

// maka dia bikin class bernama folder root dia berada(dalam kasus ini foldernya bernama Komponen)
export default class Komponen extends React.Component{ // class ini di export untuk dipanggil di app.js

    render(){
        return(
            <div>
                <ClassComponent nama="Enzo Tampan" />
                <FunctionalComponent/>
            </div>
        )
    }
}

