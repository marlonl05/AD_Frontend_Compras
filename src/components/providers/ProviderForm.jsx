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

const providersActions = {
	add: 'Agregar proveedor',
	details: 'Detalles del proveedor',
};

const initialValues = {
	documento_identificacion: '',
	nombre: '',
	ciudad: '',
	email: '',
	direccion: '',
	telefono: '',
	estado: true,
	tipo_proveedor: '',
};

export const ProviderForm = ({ provider }) => {
	const defaultProvider = provider && {
		...provider,
		estado: providerState.ACTIVO === provider?.estado,
	};

	const {
		reset,
		watch,
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: defaultProvider || initialValues,
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

		reset(initialValues);

		handleReloadProviders();
		handleSetCurrentProvider(null);
	}, [state]);

	const handleCurrentOption = option => {
		if (option !== providersActions.add) return;

		handleSetCurrentProvider(null);

		reset(initialValues);
	};

	const defaultHeaderValue = provider ? providersActions.details : providersActions.add;
	const availableHeaderItems = provider ? Object.values(providersActions) : [providersActions.add];

	return (
		<Form
			formHeader={
				<FormHeader
					defaultValue={defaultHeaderValue}
					selectList={Object.values(providersActions)}
					propertyToUseInValue='name'
					selectOnlyThisItems={availableHeaderItems}
					handleCurrentOption={handleCurrentOption}
					extraButtonLabel='Obtener reportes de proveedores'
					handleExtraButtonAction={handlePrintProvider}
				/>
			}
			onSubmit={handleSubmit(!provider ? handleCreateProvider : handleEditProvider)}
		>
			<FormField
				Icon={RiUserLine}
				register={register}
				nameValues={{
					label: 'Nombres Completos',
					input: 'nombre',
				}}
				inputConfig={{
					required: { value: true, message: 'El nombre del proveedor es requerido.' },
				}}
				errorMessage={errors.nombre?.message}
			/>
			<FormField
				Icon={RiBankCardLine}
				register={register}
				nameValues={{
					label: 'Documento de identificación',
					input: 'documento_identificacion',
				}}
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
				errorMessage={errors.documento_identificacion?.message}
			/>
			<FormField
				Icon={RiBuildingLine}
				register={register}
				nameValues={{
					label: 'Ciudad',
					input: 'ciudad',
				}}
				inputConfig={{
					required: { value: true, message: 'La cuidad del proveedor es requerido.' },
				}}
				errorMessage={errors.ciudad?.message}
			/>
			<FormField
				Icon={RiSubwayLine}
				register={register}
				nameValues={{
					label: 'Dirección',
					input: 'direccion',
				}}
				inputConfig={{
					required: { value: true, message: 'La dirección del proveedor es requerido.' },
				}}
				errorMessage={errors.direccion?.message}
			/>
			<FormField
				Icon={RiCellphoneLine}
				register={register}
				nameValues={{
					label: 'Teléfono',
					input: 'telefono',
				}}
				inputConfig={{
					required: { value: true, message: 'El teléfono del proveedor es requerido.' },
					minLength: { value: 10, message: 'El teléfono debe tener al menos 10 dígitos.' },
				}}
				errorMessage={errors.telefono?.message}
			/>
			<FormField
				Icon={RiMailLine}
				register={register}
				nameValues={{
					label: 'Correo electrónico',
					input: 'email',
				}}
				inputConfig={{
					required: { value: true, message: 'El correo electrónico es requerido.' },
					pattern: { value: /^\S+@\S+\.\S+$/g, message: 'El correo electrónico no es válido' },
				}}
				errorMessage={errors.email?.message}
			/>

			<SelectField
				register={register}
				nameValues={{
					label: 'Tipo proveedor',
					input: 'tipo_proveedor',
				}}
				selectList={Object.values(providerTypes)}
				defaultValue={watch('tipo_proveedor')}
				errorMessage={errors.tipo_proveedor?.message}
				handleValueOnChange={setValue}
				required
			/>

			<Checkbox
				register={register}
				nameValues={{
					label: 'Estado del proveedor',
					input: 'estado',
				}}
				currentValue={watch('estado') ? providerState.ACTIVO : providerState.INACTIVO}
			/>

			<div className='flex justify-end md:col-span-2'>
				<Button type='submit' className='w-auto'>
					{!provider ? 'Registrar proveedor' : 'Guardar cambios'}
				</Button>
			</div>
		</Form>
	);
};
