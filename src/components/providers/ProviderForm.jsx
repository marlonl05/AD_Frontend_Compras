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
import { Button, FormField, SelectField } from '../common';
import { providerState, providerTypes, status } from '../../constants';
import { useProviderContext } from '../../hooks';

export const ProviderForm = ({ defaultValues }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues,
	});

	const { state, handleCreateProvider, handleReloadProviders, handleState } = useProviderContext();

	useEffect(() => {
		if (state === status.FAILED) {
			handleState(status.IDLE);
			return;
		}

		if (state !== status.COMPLETED) return;

		reset();
		handleReloadProviders();
		handleState(status.IDLE);
	}, [state]);

	return (
		<div className='py-10 text-white'>
			<form onSubmit={handleSubmit(handleCreateProvider)}>
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
					required
				/>
				<SelectField
					register={register}
					name='Estado del proveedor'
					selectList={Object.values(providerState)}
					required
				/>

				<div className='flex justify-end'>
					<Button type='submit' className='w-auto'>
						Registrar
					</Button>
				</div>
			</form>
		</div>
	);
};
