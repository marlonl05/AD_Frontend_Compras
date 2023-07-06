/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { Button, DateField, Form, FormHeader, SelectField } from '../common';
import { providerTypes } from '../../constants';
import { useProviderContext, useShoppingContext } from '../../hooks';

const initialValues = {
	proveedor_id: '',
	tipo_pago: '',
	fecha_vencimiento: '',
};

const shoppingActions = {
	add: 'Agregar compra',
	details: 'Detalles de la compra',
};

export const ShoppingForm = ({ shopping }) => {
	const { providerList } = useProviderContext();
	const { handleSetCurrentShopping, handlePrintShopping, handleEditShopping, handleAddShopping } =
		useShoppingContext();

	const defaultShopping = shopping;

	const {
		reset,
		watch,
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: defaultShopping || initialValues,
	});

	const provider = providerList[watch('proveedor_id')];

	let paymentTypes = [];

	if (!provider) paymentTypes = Object.values(providerTypes);

	if (provider) {
		paymentTypes =
			provider?.tipo_proveedor === providerTypes.CREDITO
				? Object.values(providerTypes)
				: [providerTypes.CONTADO];
	}

	let defatultPaymentType = watch('tipo_pago');

	if (
		defatultPaymentType === providerTypes.CREDITO &&
		provider?.tipo_proveedor !== providerTypes.CREDITO
	) {
		defatultPaymentType = providerTypes.CONTADO;
		setValue('tipo_pago', defatultPaymentType);
	}

	const handleCurrentOption = option => {
		if (option !== shoppingActions.add) return;

		handleSetCurrentShopping(null);
		reset(initialValues);
	};

	const defaultHeaderValue = shopping ? shoppingActions.details : shoppingActions.add;
	const availableHeaderItems = shopping ? Object.values(shoppingActions) : [shoppingActions.add];

	return (
		<Form
			formHeader={
				<FormHeader
					defaultValue={defaultHeaderValue}
					selectList={Object.values(shoppingActions)}
					propertyToUseInValue='name'
					selectOnlyThisItems={availableHeaderItems}
					handleCurrentOption={handleCurrentOption}
					extraButtonLabel='Obtener reportes de compras'
					handleExtraButtonAction={handlePrintShopping}
					styles='lg2:flex-col 2xl:flex-row'
				/>
			}
			headerStyles='lg2:col-span-1 2xl:col-span-2'
			styles='lg2:grid-cols-1 2xl:grid-cols-2'
			onSubmit={handleSubmit(shopping ? handleEditShopping : handleAddShopping)}
		>
			<SelectField
				register={register}
				nameValues={{
					label: 'Proveedor',
					input: 'proveedor_id',
				}}
				selectList={Object.values(providerList)}
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
				{!shopping && (
					<Button type='submit' className='w-auto'>
						Registrar e imprimir esta factura
					</Button>
				)}
				<Button type='submit' className='w-auto'>
					{shopping ? 'Imprimir esta factura' : 'Registrar factura'}
				</Button>
			</div>
			{!shopping && (
				<span className='text-red-600 text-end md:col-span-2 lg2:col-span-1 2xl:col-span-2 text-sm'>
					¡Esta acción no se puede deshacer!
				</span>
			)}
		</Form>
	);
};
