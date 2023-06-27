import { RiUserLine } from 'react-icons/ri';
import { Button, FormField, SelectField } from '../common';
import { useForm } from 'react-hook-form';
import { providerState, providerTypes } from '../../constants';

export const NewProvider = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => console.log(data);

	return (
		<div className='py-10 text-white'>
			<form onSubmit={handleSubmit(onSubmit)}>
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
					Icon={RiUserLine}
					register={register}
					name='Documento de identificación'
					inputConfig={{
						required: { value: true, message: 'Documento de identificación es requerido.' },
						minLength: 10,
						maxLength: 13,
					}}
					errorMessage={errors.documento_de_identificacion?.message}
				/>
				<FormField
					Icon={RiUserLine}
					register={register}
					name='Ciudad'
					inputConfig={{
						required: { value: true, message: 'La cuidad del proveedor es requerido.' },
					}}
					errorMessage={errors.ciudad?.message}
				/>
				<FormField
					Icon={RiUserLine}
					register={register}
					name='Dirección'
					inputConfig={{
						required: { value: true, message: 'La dirección del proveedor es requerido.' },
					}}
					errorMessage={errors.direccion?.message}
				/>
				<FormField
					Icon={RiUserLine}
					register={register}
					name='Teléfono'
					inputConfig={{
						required: { value: true, message: 'El teléfono del proveedor es requerido.' },
						minLength: 10,
					}}
					errorMessage={errors.telefono?.message}
				/>
				<FormField
					Icon={RiUserLine}
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
