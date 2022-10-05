import React from 'react'
import SelectorInputField from '../SelectorInputField'

const options = {
    "mama":
    {
        TX: 'mama TX',
        T0: 'T0',
    },
    "prostata":
    {
        TX: 'prostat TX',
        T0: 'T0',

    },
    "colon":
    {
        TX: 'colon TX',
        T0: 'T0',
    },
    "pulmon":
    {
        TX: 'pulmon TX',
        T0: 'T0',
    },
}

const TNMInputField = ({ properties, values, onChange }) => {
    return (
        <SelectorInputField
            type={properties.type}
            value={values[properties.name]}
            label={properties.label}
            name={properties.name}
            onChange={onChange}
            options={options[values.tumor] ?? []}
        />
    )
}


export default TNMInputField