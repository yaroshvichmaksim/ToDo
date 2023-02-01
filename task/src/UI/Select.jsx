import React from "react";

const Select = ({ defaultValue, options, values, onChange }) => {
    console.log(options);
    return (
        <select value={values} className="form-select" aria-label="Default select example"
            onChange={e => onChange(e.target.value)}
        >
            <option disabled defaultValue={defaultValue} selected>Сортировка задач</option>
            {
                options.map(m =>
                    <option key={m.value} value={m.value}>{m.text}</option>
                )
            }


        </select>
    )
}
export default Select;   