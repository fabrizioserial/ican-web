import FormHeader from '../FormHeader';
import { StyledContainerForm } from './ContainerInputField/styles';
import { StyledBox } from '../../../common/styledCommonComponents';
import { InputTypeEnum } from '../../../utils/utils';
import TextInputField from './TextInputField';
import DateInputField from './DateInputField';
import SelectorInputField from './SelectorInputField';
import TNMInputField from './TNMInputField';

export const FormBuilder = (formSqueleton, values, onChangeHandle) => {
	return formSqueleton?.map((section, index) => (
		<StyledBox key={index + section.title}>
			<FormHeader icon={section?.icon} title={section?.title} />
			<StyledBox css={{ padding: '17px 0 55px' }}>
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
							),
						)}
					</StyledBox>
				))}
			</StyledBox>
		</StyledBox>
	));
};

const InputTypeBuilder = (type, index, properties, values, onChangeHandle) => {
	switch (type) {
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
				<TNMInputField
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
