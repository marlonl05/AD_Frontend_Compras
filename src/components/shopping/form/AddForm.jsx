/* eslint-disable react/prop-types */
import { providerState, providerTypes } from '../../../constants';
import { Button, DateField, SelectField } from '../../common';
import { ProviderCard } from './';

export const AddForm = ({
	register,
	provider,
	providerList = {},
	errors = {},
	setValue,
	watch,
	paymentTypes = [],
	defatultPaymentType,
}) => {
	return (
		<>
			<SelectField
				register={register}
				nameValues={{
					label: 'Proveedor',
					input: 'proveedor_id',
				}}
				selectList={Object.values(providerList).filter(
					provider => provider?.estado === providerState.ACTIVO
				)}
				defaultValue={providerList[watch('proveedor_id')]}
				errorMessage={errors.proveedor_id?.message}
				handleValueOnChange={setValue}
				propForSelectLabel='nombre'
				filterPlaceholder='Buscar proveedor...'
				activeFilter
				required
			/>

			<SelectField
				register={register}
				nameValues={{
					label: 'Tipo de pago',
					input: 'tipo_pago',
				}}
				selectList={paymentTypes}
				defaultValue={defatultPaymentType}
				errorMessage={errors.tipo_pago?.message}
				handleValueOnChange={setValue}
				required
			/>

			{provider?.tipo_proveedor === providerTypes.CREDITO &&
				watch('tipo_pago') === providerTypes.CREDITO && (
					<DateField
						register={register}
						nameValues={{
							label: 'Fecha de vencimiento',
							input: 'fecha_vencimiento',
						}}
						required
						errorMessage={errors.fecha_vencimiento?.message}
						defaultValue={watch('fecha_vencimiento')}
						handleValueOnChange={setValue}
					/>
				)}

			<div className='flex flex-col md:flex-row justify-end md:col-span-2 lg2:col-span-1 2xl:col-span-2 gap-2'>
				<Button type='submit' className='w-auto'>
					Registrar e imprimir esta factura
				</Button>
				<Button type='submit' className='w-auto'>
					Registrar factura
				</Button>
			</div>
			<span className='text-red-600 text-end md:col-span-2 lg2:col-span-1 2xl:col-span-2 text-sm'>
				¡Esta acción no se puede deshacer!
			</span>

			{provider && <ProviderCard provider={provider} />}
		</>
	);
};
