import FormHeader from '../FormHeader';
import { StyledBox } from '../../../common/styledCommonComponents';
import { InputTypeEnum } from '../../../utils/utils';
import TextInputField from './TextInputField';
import DateInputField from './DateInputField';
import SelectorInputField from './SelectorInputField';
import ConditionalSelectInputField from './ConditionalSelectInputField';
import Button from '../../../common/components/button/Button';
import PlusCircelIcon from '../../../assets/PlusCircleIcon';
import ActionInputField from './ActionInputField';
import MedicationField from './MedicationField';

export const FormBuilder = (formSqueleton, values, onChangeHandle) => {
	return formSqueleton?.map((section, index) => (
		<StyledBox key={index + section.title}>
			<FormHeader icon={section?.icon} title={section?.title} />
			<StyledBox css={{ padding: '17px 0 40px' }}>
				{section?.fields?.map((field, index) => (
					<StyledBox
						key={index + field}
						css={{
							columnGap: '30px',
							display: 'flex',
							padding: '20px 45px',
							boxSizing: 'border-box',
						}}
					>
						{field?.map((component, index) =>
							InputTypeBuilder(
								component?.input_type,
								index,
								component,
								values,
								onChangeHandle,
								component?.handleClick
							),
						)}
					</StyledBox>
				))}
			</StyledBox>
		</StyledBox>
	));
};

const InputTypeBuilder = (type, index, properties, values, onChangeHandle, handleClick) => {
	switch (type) {
		case InputTypeEnum.BUTTON:
			return (
				<Button
					className="action"
					key={index}
					text={properties.label}
					disabled={true}
					icon={<PlusCircelIcon />}
					onClick={handleClick}
				/>
			);
		case InputTypeEnum.ADD_SECTION:
			return (
				<ActionInputField
					index={index}
					label={properties.label}
					handleClick={handleClick}
				/>
			);
		case InputTypeEnum.MEDICATION_ROW:
			return (
				<MedicationField
					key={index}
					id={properties.id}
					type={properties.type}
					values={{
						medication: values[`${properties.names[0]}${properties.id}`],
						grammage: values[`${properties.names[1]}${properties.id}`]
					}}
					names={{
						medication: `${properties.names[0]}${properties.id}`,
						grammage: `${properties.names[1]}${properties.id}`
					}}
					onChange={onChangeHandle}
				/>
			);
		case InputTypeEnum.TEXTFIELD:
			return (
				<TextInputField
					key={index}
					type={properties.type}
					placeholder={properties.placeholder}
					value={values[properties.name]}
					label={properties.label}
					name={properties.name}
					onChange={onChangeHandle}
				/>
			);
		case InputTypeEnum.SELECTOR:
			return (
				<SelectorInputField
					key={index}
					type={properties.type}
					value={values[properties.name]}
					label={properties.label}
					name={properties.name}
					onChange={onChangeHandle}
					options={properties.options}
				/>
			);
		case InputTypeEnum.DATEFIELD:
			return (
				<DateInputField
					key={index}
					type={properties.type}
					placeholder={properties.placeholder}
					value={values[properties.name]}
					label={properties.label}
					name={properties.name}
					onChange={onChangeHandle}
				/>
			);
		case InputTypeEnum.CONDITIONAL:
			return (
				<ConditionalSelectInputField
					key={index}
					properties={properties}
					values={values}
					onChange={onChangeHandle}
				/>
			);
		case InputTypeEnum.ACTIONFIELD:
			return <></>;
		default:
			return (
				<StyledBox
					key={index}
					css={{ display: 'flex', width: '100%' }}
				></StyledBox>
			);
	}
};
