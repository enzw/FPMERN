import { useState } from "react"

const FunctionalComponent = ({ nama = "User" }) => {
    // kalo mau ambil props harus masukin parameter dulu di functionya 
    // (bisa pake destructuring biar gausah [parameter].[propsyangdipanggil] misal {nama})
    // dan kita bisa set defaultnya dengan cara { props = defaultnya_apa }

    // cara buat state di functional component
    const [value, setValue] = useState(0);

    // cara pake "value" dari state
    const handlesum = () => {
        setValue(value + 1)
    }

    const handlemin = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }

    // sedangkan functional component bisa langsung panggil return dan isi parameter return
    return (
        <div>
            <h1>Ini Pakai Functional Component</h1>
            <h1>Halo {nama}</h1>
            <button onClick={handlemin}> - </button>
            <span> {value} </span>
            <button onClick={handlesum}> + </button>
        </div>
    )
}

export { FunctionalComponent }