// perlu import react 
import React from "react";
import PropTypes from "prop-types";

class ClassComponent extends React.Component {

    // berikut cara buat state di class
    state = {
        value: 0
    }

    // cara pake "value" yang ada di dalam state
    handlemin = () => {
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 1 })
        }
    }

    handlesum = () => {
        this.setState({ value: this.state.value + 1 })
    }

    // dia butuh method render () untuk bisa return hasil
    render() {
        return (
            // return cuma bisa 1 mereturn elemen
            // jadi pastiin paling luar dibungkus(cuma bisa dijadiin 1 parent) misal pake <div>
            <div>
                <h2>Komponen ini dibuat menggunakan Class Component</h2>
                {/* nah ini dia nangkep props dari index.jsx */}
                <h1>Hello {this.props.nama}</h1>
                <button onClick={this.handlemin}> - </button>
                <span>{'  '}{this.state.value}{'  '}</span>
                <button onClick={this.handlesum}> + </button>
            </div>
        )
    }
}

// kita bisa pastiin props harus di isi("isRequired") dan dalam bentuk string dengan cara
ClassComponent.propTypes = {
  nama: PropTypes.bool.isRequired
};

export { ClassComponent }