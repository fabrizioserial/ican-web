import React from 'react'
import { useDispatch } from 'react-redux'
import PlusCircelIcon from '../../../../assets/PlusCircleIcon'
import Button from '../../../../common/components/button/Button'
import { addTreatment, addTreatmentMedication } from '../../../../redux/slices/formSlice'
import { actionTypeEnum } from '../../../../utils/utils'

const ActionInputField = ({ index, label, handleClick }) => {
    const dispatch = useDispatch()
    const onClick = () => {
        switch (handleClick()) {
            case actionTypeEnum.ADD_TREATMENT:
                dispatch(addTreatment())
                break;
            case actionTypeEnum.ADD_MEDICATION:
                dispatch(addTreatmentMedication())
                break;
            default:
                break;
        }
    }

    return (
        <Button
            className="action"
            key={index}
            text={label}
            disabled={true}
            icon={<PlusCircelIcon />}
            onClick={onClick}
        />
    )
}

export default ActionInputField