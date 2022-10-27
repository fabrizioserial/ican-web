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
import BiomarkerField from './BiomarkersField';
import RelapsesField from './RelapsesField';

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
								component?.handleClick,
							),
						)}
					</StyledBox>
				))}
			</StyledBox>
		</StyledBox>
	));
};

const InputTypeBuilder = (
	type,
	index,
	properties,
	values,
	onChangeHandle,
	handleClick,
) => {
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
					key={index}
					index={index}
					label={properties.label}
					handleClick={handleClick}
				/>
			);
		case InputTypeEnum.BIOMARKER_ROW:
			return (
				<BiomarkerField
					key={index}
					id={properties.id}
					type={properties.type}
					values={{
						biomarker: values[`${properties.names[0]}${properties.id}`],
						evaluation: values[`${properties.names[1]}${properties.id}`],
					}}
					names={{
						biomarker: `${properties.names[0]}${properties.id}`,
						evaluation: `${properties.names[1]}${properties.id}`,
					}}
					onChange={onChangeHandle}
				/>
			);
		case InputTypeEnum.RELAPSES_ROW:
			return (
				<RelapsesField
					key={index}
					id={properties.id}
					type={properties.type}
					values={{
						relapseDate: values[`${properties.names[0]}${properties.id}`],
						diagnosticDate:
							values[`${properties.names[1]}${properties.id}`],
						metastasisSite:
							values[`${properties.names[2]}${properties.id}`],
						treatmentRelapse:
							values[`${properties.names[3]}${properties.id}`],
					}}
					names={{
						relapseDate: `${properties.names[0]}${properties.id}`,
						diagnosticDate: `${properties.names[1]}${properties.id}`,
						metastasisSite: `${properties.names[2]}${properties.id}`,
						treatmentRelapse: `${properties.names[3]}${properties.id}`,
					}}
					onChange={onChangeHandle}
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
						grammage: values[`${properties.names[1]}${properties.id}`],
					}}
					names={{
						medication: `${properties.names[0]}${properties.id}`,
						grammage: `${properties.names[1]}${properties.id}`,
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
