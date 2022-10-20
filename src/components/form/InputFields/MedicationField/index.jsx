import React from 'react'

const MedicationField = ({ id, names, values, onChange }) => {
    // pegar directo al endpoint que trae la medicacion y el gramaje

    // crear funciones 1: onchange para gramaje, 2: onChange para medication
    // argumentos para onChange: names y values

    // onDelete, usa el dispatch(removeTreatmentMedication(id))
    return (
        <>
            <SelectorInputField
            // key={index}
            // type={properties.type}
            // value={values[properties.name]}
            // label={properties.label}
            // name={properties.name}
            // onChange={onChangeHandle} //onChange medicacion
            // options={properties.options} // recibe del endpoint
            />
            <SelectorInputField
            // key={index}
            // type={properties.type}
            // value={values[properties.name]}
            // label={properties.label}
            // name={properties.name}
            // onChange={onChangeHandle} //onChange gramaje
            // options={properties.options} // recibe del endpoint
            />
        </>
    )
}

export default MedicationField