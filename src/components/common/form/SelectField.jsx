import Select from 'react-tailwindcss-select';
import { checkIfObjectHaveProp, stringNormalizer } from '../../../helpers';
import { useState } from 'react';

/* eslint-disable react/prop-types */
export const SelectField = ({
	register,
	name,
	defaultValue,
	required,
	selectList = [],
	propertyToUseInValue = 'id',
	propertyToUseInLabel = 'name',
}) => {
	const validName = stringNormalizer(name);

	const defaultItem = {
		value: checkIfObjectHaveProp(defaultValue, propertyToUseInValue),
		label: checkIfObjectHaveProp(defaultValue, propertyToUseInLabel),
	};

	const options = selectList.map(item => ({
		value: checkIfObjectHaveProp(item, propertyToUseInValue),
		label: checkIfObjectHaveProp(item, propertyToUseInLabel),
	}));

	const [value, setValue] = useState(defaultItem);

	const handleOnChange = value => setValue(value);

	return (
		<div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8 '>
			<div className='w-full md:w-2/6'>
				<p>
					{name} {required && <span className='text-red-500'>*</span>}
				</p>
			</div>
			<div id='select-input' className='flex-1 text-dark-200'>
				<Select
					primaryColor='amber'
					placeholder={name}
					value={value}
					onChange={handleOnChange}
					options={options}
				/>
			</div>

			<input type='hidden' {...register(validName, { required })} value={value} />
		</div>
	);
};
