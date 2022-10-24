import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import TrashIcon from '../../../../assets/TrashIcon';
import IconButton from '../../../../common/components/iconButton';
import { StyledBox } from '../../../../common/styledCommonComponents';
import { removeBiomarker } from '../../../../redux/slices/formSlice';
import SelectorInputField from '../SelectorInputField';
import TextInputField from '../TextInputField';

const optionsEvaluation =
{
    Positiva: "Positiva",
    Neutro: "Neutro",
    Negativa: "Negativa",
}

const BiomarkerField = ({ id, names, placeholder, values, onChange, type }) => {
    // pegar directo al endpoint que trae el biomarcardor y la evaluacion

    // crear funciones 1: onchange para evaluacion
    // argumentos para onChange: names y values

    const handleChangeEvaluation = () => {

    }

    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(removeBiomarker(id))
    }

    useEffect(() => {
        console.log(values)
    })

    return (
        <StyledBox
            css={{
                width: "100%",
                columnGap: '30px',
                display: 'flex',
                boxSizing: 'border-box',
            }}
        >
            <StyledBox
                css={{
                    flex: 0.6,
                }}
            >
                <TextInputField
                    type={type}
                    placeholder={placeholder}
                    value={values.biomarker}
                    label={"Biomarcador"}
                    name={names.biomarker}
                // onChange={onChangeHandle}
                />
            </StyledBox>
            <StyledBox
                css={{
                    flex: 0.4,
                    display: 'flex',
                    flexDirection: "row",
                    alignItems: 'flex-end',
                    columnGap: '20px'
                }}
            >
                <SelectorInputField
                    type={type}
                    value={values.evaluation}
                    label={"Evaluación"}
                    name={names.evaluation}
                    onChange={onChange} // onChange gramaje
                    options={optionsEvaluation} // recibe del endpoint
                />
                <StyledBox>
                    <IconButton
                        icon={<TrashIcon />}
                        onClick={() => handleDelete(id)}
                    />
                </StyledBox>
            </StyledBox>
        </StyledBox >
    )
}

export default BiomarkerField