import React, { useEffect, useState } from 'react'
import SelectorInputField from '../SelectorInputField'
import { TNMOptions } from '../../../../utils/utils'

const ConditionalSelectInputField = ({ properties, values, onChange }) => {

    const [currentOption, setCurrentOption] = useState(TNMOptions[values.tumor] ?? [])

    useEffect(() => {
        setCurrentOption(TNMOptions[values.tumor] ?? [])
    }, [values.tumor])

    return (
        <SelectorInputField
            type={properties.type}
            value={values[properties.name]}
            label={properties.label}
            name={properties.name}
            onChange={onChange}
            options={currentOption[properties.name]}
        />
    )
}


export default ConditionalSelectInputField