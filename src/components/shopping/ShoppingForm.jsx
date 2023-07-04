/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { Button, DateField, Form, SelectField } from '../common';

const initialValues = {
	proveedor_id: '',
	tipo_pago: '',
	fecha_vencimiento: '',
	total: '',
	detalles: [],
};

export const ShoppingForm = ({ shopping }) => {
	console.log({ shopping });

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

	return (
		<Form
		// formHeader={
		// 	<FormHeader
		// 		defaultValue={defaultHeaderValue}
		// 		selectList={Object.values(providersActions)}
		// 		propertyToUseInValue='name'
		// 		selectOnlyThisItems={availableHeaderItems}
		// 		handleCurrentOption={handleCurrentOption}
		// 		extraButtonLabel='Imprimir todos los proveedores'
		// 		handleExtraButtonAction={handlePrintProvider}
		// 	/>
		// }
		// onSubmit={handleSubmit(!provider ? handleCreateProvider : handleEditProvider)}
		>
			<DateField
				register={register}
				nameValues={{
					label: 'Fecha de vencimiento',
					input: 'fecha_vencimiento',
				}}
				required
				errorMessage={errors.fecha_vencimiento?.message}
				defaultValue={watch('fecha_vencimiento')}
			/>

			<SelectField
				register={register}
				nameValues={{
					label: 'Proveedor',
					input: 'proveedor_id',
				}}
				selectList={[]}
				defaultValue={watch('proveedor_id')}
				errorMessage={errors.proveedor_id?.message}
				handleValueOnChange={setValue}
				required
			/>

			<SelectField
				register={register}
				nameValues={{
					label: 'Tipo de pago',
					input: 'tipo_pago',
				}}
				selectList={[]}
				defaultValue={watch('tipo_pago')}
				errorMessage={errors.tipo_pago?.message}
				handleValueOnChange={setValue}
				required
			/>

			<div className='flex justify-end md:col-span-2'>
				<Button type='submit' className='w-auto'>
					{!false ? 'Registrar proveedor' : 'Guardar cambios'}
				</Button>
			</div>
		</Form>
	);
};
