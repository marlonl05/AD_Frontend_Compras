/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { Button, DateField, Form, FormHeader, SelectField } from '../common';
import { providerTypes } from '../../constants';
import { useProviderContext } from '../../hooks';

const initialValues = {
	proveedor_id: '',
	tipo_pago: '',
	fecha_vencimiento: '',
	total: '',
	detalles: [],
};

const shoppingActions = {
	add: 'Agregar compra',
	details: 'Detalles de la compra',
};

export const ShoppingForm = ({ shopping }) => {
	const { providerList } = useProviderContext();

	const {
		reset,
		watch,
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: shopping || initialValues,
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

		reset(initialValues);
	};

	const handlePrintShopping = () => {
		console.log('Obtener reportes de compras');
	};

	const handleSubmitShopping = shoppingRequest => {
		console.log('Registrar compra');
		console.log({ shoppingRequest });
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
				/>
			}
			onSubmit={handleSubmit(handleSubmitShopping)}
		>
			<SelectField
				register={register}
				nameValues={{
					label: 'Proveedor',
					input: 'proveedor_id',
				}}
				selectList={Object.values(providerList)}
				defaultValue={watch('proveedor_id') + ''}
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

			<div className='flex justify-end md:col-span-2'>
				<Button type='submit' className='w-auto'>
					{shopping ? 'Imprimir esta factura' : 'Registrar factura'}
				</Button>
			</div>
		</Form>
	);
};
