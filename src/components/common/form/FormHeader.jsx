/* eslint-disable react/prop-types */
import { useState } from 'react';
import Select from 'react-tailwindcss-select';
import { checkIfObjectHaveProp } from '../../../helpers';
import { twMerge } from 'tailwind-merge';

const defaultStyles = 'flex flex-col md:flex-row gap-2 items-center justify-between text-dark-200';

export const FormHeader = ({
	defaultValue,
	selectList,
	handleCurrentOption,
	propertyToUseInValue = 'id',
	propertyToUseInLabel = 'name',
	selectOnlyThisItems = [],
	button,
	styles = '',
}) => {
	const options = selectList.map(item => ({
		value: checkIfObjectHaveProp(item, propertyToUseInValue),
		label: checkIfObjectHaveProp(item, propertyToUseInLabel),
	}));

	const [value, setValue] = useState();

	if ((!value?.value && defaultValue) || value?.value !== defaultValue) {
		const defaultItem = {
			value: checkIfObjectHaveProp(defaultValue, propertyToUseInValue),
			label: checkIfObjectHaveProp(defaultValue, propertyToUseInLabel),
		};

		setValue(defaultItem);
	}

	const handleOnChange = value => {
		if (selectOnlyThisItems.length < 1) return;

		const isItemInList = selectOnlyThisItems.find(item => item === value.value);

		if (!isItemInList) return;

		setValue(value);
		handleCurrentOption(value?.value);
	};

	return (
		<div id='select-input' className={twMerge(defaultStyles, styles)}>
			<h1 className='text-xl text-gray-100'>{value?.value}</h1>
			<div className='flex flex-col md:flex-row items-center gap-2'>
				<div>
					<Select primaryColor='amber' value={value} onChange={handleOnChange} options={options} />
				</div>

				{button}
			</div>
		</div>
	);
};
