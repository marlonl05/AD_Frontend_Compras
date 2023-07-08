/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { Form, FormHeader } from '../common';
import { providerTypes } from '../../constants';
import { useProviderContext, useShoppingContext } from '../../hooks';
import { AddForm, EditForm } from './form';
import { addDays } from 'date-fns';

const initialValues = {
	proveedor_id: '',
	tipo_pago: '',
	fecha_vencimiento: addDays(new Date(), 1).toISOString(),
};

const shoppingActions = {
	add: 'Agregar compra',
	details: 'Detalles de la compra',
};

export const ShoppingForm = ({ shopping }) => {
	const { providerList } = useProviderContext();
	const {
		cartDetails,
		handleSetCurrentShopping,
		handlePrintShopping,
		handleEditShopping,
		handleAddShopping,
		handleShowMessage,
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
		// const { detalles, total } = cartDetails;
		const { detalles } = cartDetails;

		if (shopping) {
			handleEditShopping(providerRequest);
			return;
		}

		if (!detalles || detalles?.length === 0) {
			handleShowMessage('El carrito debe tener al menos un producto seleccionado', 'error');

			setTimeout(() => {
				handleShowMessage(null, 'error');
			}, 100);

			return;
		}

		handleAddShopping(providerRequest);
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
