/* eslint-disable react/prop-types */
import { useState } from 'react';
import { RiBillFill, RiCalendarEventFill, RiCurrencyFill, RiUser2Fill } from 'react-icons/ri';
import { providerTypes, shoppingState } from '../../../constants';
import { FormFieldUnEditable } from '../../common/form';
import { ProviderCard } from './';
import { useShoppingContext } from '../../../hooks';

const PaymentCheckBox = ({ isCheck, onChange }) => {
	const [currentCheck, setCurrentCheck] = useState(isCheck);

	const handleSetCheck = ({ target }) => {
		setCurrentCheck(target.checked);
		onChange(target.checked);
	};

	return (
		<div className='flex items-start flex-col md:flex-row gap-2 mb-8'>
			<div className='w-full md:w-2/6'>Estado</div>
			<div className='flex items-center gap-2'>
				<label className='relative h-8 w-14 cursor-pointer block'>
					<input
						type='checkbox'
						className='peer sr-only [&:checked_+_span_svg[data-unchecked-icon]]:hidden [&:checked_+_span_svg[data-checked-icon]]:block'
						defaultChecked={currentCheck}
						onChange={handleSetCheck}
					/>
					<span className='absolute inset-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition peer-checked:translate-x-6 peer-checked:text-secondary-100'>
						<svg
							data-unchecked-icon
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>

						<svg
							data-checked-icon
							xmlns='http://www.w3.org/2000/svg'
							className='hidden h-4 w-4'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
								clipRule='evenodd'
							/>
						</svg>
					</span>
					<span className='absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-secondary-100'></span>
				</label>
				<p className='capitalize'>{currentCheck ? shoppingState.ACTIVO : shoppingState.INACTIVO}</p>
			</div>
		</div>
	);
};

export const EditForm = ({ provider, shopping }) => {
	const { handleEditShopping } = useShoppingContext();
	return (
		<>
			<FormFieldUnEditable
				Icon={RiUser2Fill}
				nameValues={{
					label: 'Proveedor',
					input: provider?.nombre,
				}}
				required
			/>
			<FormFieldUnEditable
				Icon={RiBillFill}
				nameValues={{
					label: 'Tipo de pago',
					input: shopping?.tipo_pago,
				}}
				required
			/>

			<FormFieldUnEditable
				Icon={RiCalendarEventFill}
				nameValues={{
					label: 'Fecha de compra',
					input: shopping?.fecha_factura,
				}}
				required
			/>
			{provider?.tipo_proveedor === providerTypes.CREDITO &&
				providerTypes.CREDITO === shopping?.tipo_pago && (
					<FormFieldUnEditable
						Icon={RiCalendarEventFill}
						nameValues={{
							label: 'Fecha de vencimiento',
							input: shopping?.fecha_vencimiento,
						}}
						required
					/>
				)}

			<FormFieldUnEditable
				Icon={RiCurrencyFill}
				nameValues={{
					label: 'Pago total',
					input: shopping?.total,
				}}
				required
			/>

			<PaymentCheckBox
				isCheck={shopping.estado === shoppingState.ACTIVO}
				onChange={handleEditShopping}
			/>

			<ProviderCard provider={provider} />
		</>
	);
};
