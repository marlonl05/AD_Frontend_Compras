/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormHeader } from '../common';
import { providerTypes, status } from '../../constants';
import { useProviderContext, useShoppingContext } from '../../hooks';
import { AddForm, EditForm } from './form';
import { addDays, format } from 'date-fns';
import { AllBill, PdfLink } from '../../pdf';

const initialValues = {
	proveedor_id: '',
	tipo_pago: '',
	fecha_vencimiento: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
};

const shoppingActions = {
	add: 'Agregar compra',
	details: 'Detalles de la compra',
};

export const ShoppingForm = ({ shopping }) => {
	const { providerList } = useProviderContext();
	const {
		state,
		shoppingList,
		productList,
		handleSetCurrentShopping,
		handleAddShopping,
		handleState,
		handleReloadShoppings,
	} = useShoppingContext();

	const defaultShopping = shopping;

	const {
		reset,
		watch,
		register,
		setValue,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({
		defaultValues: defaultShopping || initialValues,
	});

	useEffect(() => {
		if (state === status.FAILED) {
			handleState(status.IDLE);
			return;
		}

		if (state !== status.COMPLETED) return;

		reset(initialValues);

		handleReloadShoppings();
		handleSetCurrentShopping(null);
	}, [state]);

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

	const handleProviderSubmit = providerRequest => {
		if (shopping) return;

		handleAddShopping(providerRequest);
	};

	const defaultHeaderValue = shopping ? shoppingActions.details : shoppingActions.add;
	const availableHeaderItems = shopping ? Object.values(shoppingActions) : [shoppingActions.add];

	const bills = Object.values(shoppingList)
		.map(shopping => shopping.detalles)
		.flat()
		.map(detail => {
			const bill = shoppingList[detail.factura_id];

			return {
				...detail,
				...bill,
				provider: providerList[bill.proveedor_id]?.nombre,
				detalles: undefined,
				...productList[detail.producto_id],
			};
		});
	return (
		<Form
			formHeader={
				<FormHeader
					defaultValue={defaultHeaderValue}
					selectList={Object.values(shoppingActions)}
					propertyToUseInValue='name'
					selectOnlyThisItems={availableHeaderItems}
					handleCurrentOption={handleCurrentOption}
					button={
						<PdfLink
							document={<AllBill bills={bills} />}
							fileName='reporte_compras_total.pdf'
							text='Obtener reportes de compras'
						/>
					}
					styles='lg2:flex-col 2xl:flex-row'
				/>
			}
			headerStyles='lg2:col-span-1 2xl:col-span-2'
			styles='lg2:grid-cols-1 2xl:grid-cols-2'
			onSubmit={handleSubmit(handleProviderSubmit)}
		>
			{shopping ? (
				<EditForm provider={provider} shopping={getValues()} />
			) : (
				<AddForm
					defatultPaymentType={defatultPaymentType}
					provider={provider}
					register={register}
					setValue={setValue}
					watch={watch}
					errors={errors}
					paymentTypes={paymentTypes}
					providerList={providerList}
				/>
			)}
		</Form>
	);
};
