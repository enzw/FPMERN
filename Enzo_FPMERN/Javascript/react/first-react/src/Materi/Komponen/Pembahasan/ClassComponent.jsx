// perlu import react 
import React from "react";

class ClassComponent extends React.Component {
    
    // dia butuh method render () untuk bisa return hasil
    render() {
        return(
            // return cuma bisa 1 mereturn elemen
            // jadi pastiin paling luar dibungkus(cuma bisa dijadiin 1 parent) misal pake <div>
            <div>
                <h2>Komponen ini dibuat menggunakan Class Component</h2>
                <h1>Hello {this.props.nama}</h1>
            </div>
        )
    }
}

export { ClassComponent }