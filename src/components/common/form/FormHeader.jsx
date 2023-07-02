/* eslint-disable react/prop-types */
import { useState } from 'react';
import Select from 'react-tailwindcss-select';
import { Button } from '../Button';
import { checkIfObjectHaveProp } from '../../../helpers';

export const FormHeader = ({
	defaultValue,
	selectList,
	handleCurrentOption,
	propertyToUseInValue = 'id',
	propertyToUseInLabel = 'name',
	selectOnlyThisItems = [],
	extraButtonLabel,
	handleExtraButtonAction,
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
		<div
			id='select-input'
			className='flex flex-col md:flex-row gap-2 items-center justify-between text-dark-200'
		>
			<h1 className='text-xl text-gray-100'>{value?.value}</h1>
			<div className='flex flex-col md:flex-row items-center gap-2'>
				<div>
					<Select primaryColor='amber' value={value} onChange={handleOnChange} options={options} />
				</div>

				<Button
					onClick={handleExtraButtonAction}
					type='button'
					className='font-normal text-start inline-block w-64 md:w-auto truncate'
				>
					{extraButtonLabel}
				</Button>
			</div>
		</div>
	);
};
