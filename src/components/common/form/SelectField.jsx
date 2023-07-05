import { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-tailwindcss-select';
import { checkIfObjectHaveProp } from '../../../helpers';

export const SelectField = ({
	register,
	nameValues = {},
	defaultValue,
	required,
	selectList = [],
	propForSelectValue = 'id',
	propForSelectLabel = 'name',
	errorMessage,
	handleValueOnChange,
	activeFilter = false,
	filterPlaceholder = 'Buscar...',
}) => {
	const options = selectList.map(item => ({
		value: checkIfObjectHaveProp(item, propForSelectValue),
		label: checkIfObjectHaveProp(item, propForSelectLabel),
	}));

	const [value, setValue] = useState();

	if (defaultValue && !value?.value) {
		const defaultItem = {
			value: checkIfObjectHaveProp(defaultValue, propForSelectValue),
			label: checkIfObjectHaveProp(defaultValue, propForSelectLabel),
		};

		setValue(defaultItem);
	}

	if (!defaultValue && value?.value) setValue();

	const handleChange = option => {
		setValue(option);
		handleValueOnChange(nameValues.input, option?.value);
	};

	return (
		<div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8 '>
			<div className='w-full md:w-2/6'>
				<p>
					{nameValues.label} {required && <span className='text-red-500'>*</span>}
				</p>
			</div>
			<div className='flex flex-col w-full md:w-4/6'>
				<div id='select-input' className='flex-1 text-dark-200'>
					<Select
						primaryColor='amber'
						placeholder={`Elegir ${nameValues.label.toLowerCase()}`}
						value={value}
						onChange={handleChange}
						options={options}
						isSearchable={activeFilter}
						searchInputPlaceholder={filterPlaceholder}
					/>
				</div>
				<div className='text-red-500 h-2 mt-1'>
					{errorMessage && <div className='animate-fade'>{errorMessage}</div>}
				</div>
			</div>
			<input
				type='hidden'
				{...register(nameValues.input, {
					required: {
						value: required,
						message: `El ${nameValues.label?.toLowerCase()} es requerido.`,
					},
				})}
			/>
		</div>
	);
};

SelectField.propTypes = {
	register: PropTypes.func.isRequired,
	nameValues: PropTypes.shape({
		label: PropTypes.string.isRequired,
		input: PropTypes.string.isRequired,
	}),
	defaultValue: PropTypes.string,
	required: PropTypes.bool,
	selectList: PropTypes.array.isRequired,
	handleValueOnChange: PropTypes.func.isRequired,
	activeFilter: PropTypes.bool,
	filterPlaceholder: PropTypes.string,
	propForSelectValue: PropTypes.string,
	propForSelectLabel: PropTypes.string,
	errorMessage: PropTypes.string,
};
