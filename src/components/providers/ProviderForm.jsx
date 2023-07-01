/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
	RiBankCardLine,
	RiBuildingLine,
	RiCellphoneLine,
	RiMailLine,
	RiSubwayLine,
	RiUserLine,
} from 'react-icons/ri';
import { Button, Checkbox, Form, FormField, FormHeader, SelectField } from '../common';
import { providerState, providerTypes, status } from '../../constants';
import { useProviderContext } from '../../hooks';
import { cleanObject, mapNormalToFormProvider } from '../../helpers';

const providersActions = {
	add: 'Agregar proveedor',
	details: 'Detalles del proveedor',
};

export const ProviderForm = ({ provider }) => {
	let defaultProvider = provider && mapNormalToFormProvider(provider);

	defaultProvider = provider && {
		...defaultProvider,
		estado_del_proveedor: providerState.ACTIVO === defaultProvider.estado,
	};

	const {
		reset,
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: defaultProvider,
	});

	const {
		state,
		handleCreateProvider,
		handleEditProvider,
		handleReloadProviders,
		handlePrintProvider,
		handleSetCurrentProvider,
		handleState,
	} = useProviderContext();

	useEffect(() => {
		if (state === status.FAILED) {
			handleState(status.IDLE);
			return;
		}

		if (state !== status.COMPLETED) return;

		let defaultItems = defaultProvider ?? {};
		defaultItems = cleanObject(defaultItems);

		reset(defaultItems);

		handleReloadProviders();
		handleSetCurrentProvider(null);
		handleState(status.IDLE);
	}, [state]);

	const handleCurrentOption = option => {
		if (option !== providersActions.add) return;

		handleSetCurrentProvider(null);

		let defaultItems = defaultProvider ?? {};
		defaultItems = cleanObject(defaultItems);

		reset(defaultItems);
	};

	const defaultHeaderValue = provider ? providersActions.details : providersActions.add;
	const availableHeaderItems = provider ? Object.values(providersActions) : [providersActions.add];

	console.log({ defaultHeaderValue });
	return (
		<Form
			formHeader={
				<FormHeader
					defaultValue={defaultHeaderValue}
					selectList={Object.values(providersActions)}
					propertyToUseInValue='name'
					selectOnlyThisItems={availableHeaderItems}
					handleCurrentOption={handleCurrentOption}
					extraButtonLabel='Imprimir todos los proveedores'
					handleExtraButtonAction={handlePrintProvider}
				/>
			}
			onSubmit={handleSubmit(!provider ? handleCreateProvider : handleEditProvider)}
		>
			<FormField
				Icon={RiUserLine}
				register={register}
				name='Nombres Completos'
				inputConfig={{
					required: { value: true, message: 'El nombre del proveedor es requerido.' },
				}}
				errorMessage={errors.nombres_completos?.message}
			/>
			<FormField
				Icon={RiBankCardLine}
				register={register}
				name='Documento de identificación'
				inputConfig={{
					required: { value: true, message: 'El documento de identificación es requerido.' },
					minLength: {
						value: 10,
						message: 'El documento de identificación debe tener al menos 10 dígitos.',
					},
					maxLength: {
						value: 13,
						message: 'El documento de identificación debe tener máximo 13 dígitos.',
					},
				}}
				errorMessage={errors.documento_de_identificacion?.message}
			/>
			<FormField
				Icon={RiBuildingLine}
				register={register}
				name='Ciudad'
				inputConfig={{
					required: { value: true, message: 'La cuidad del proveedor es requerido.' },
				}}
				errorMessage={errors.ciudad?.message}
			/>
			<FormField
				Icon={RiSubwayLine}
				register={register}
				name='Dirección'
				inputConfig={{
					required: { value: true, message: 'La dirección del proveedor es requerido.' },
				}}
				errorMessage={errors.direccion?.message}
			/>
			<FormField
				Icon={RiCellphoneLine}
				register={register}
				name='Teléfono'
				inputConfig={{
					required: { value: true, message: 'El teléfono del proveedor es requerido.' },
					minLength: { value: 10, message: 'El teléfono debe tener al menos 10 dígitos.' },
				}}
				errorMessage={errors.telefono?.message}
			/>
			<FormField
				Icon={RiMailLine}
				register={register}
				name='Email'
				inputConfig={{
					required: { value: true, message: 'El correo electrónico es requerido.' },
					pattern: { value: /^\S+@\S+\.\S+$/g, message: 'El correo electrónico no es válido' },
				}}
				errorMessage={errors.email?.message}
			/>

			<SelectField
				register={register}
				name='Tipo proveedor'
				selectList={Object.values(providerTypes)}
				defaultValue={provider?.tipo_proveedor}
				required
			/>

			<Checkbox
				register={register}
				text='Estado del proveedor'
				currentValue={watch('estado_del_proveedor') ? providerState.ACTIVO : providerState.INACTIVO}
			/>

			<div className='flex justify-end md:col-span-2'>
				<Button type='submit' className='w-auto'>
					{!provider ? 'Registrar proveedor' : 'Guardar cambios'}
				</Button>
			</div>
		</Form>
	);
};
