import { useState } from 'react';
import { getNow } from '../../helpers';
import { useAuthContext } from '../../hooks';
import { Button, Modal } from './';

export const Head = () => {
	const { user, permissions } = useAuthContext();
	const [showModal, setShowModal] = useState(false);

	return (
		<div className='flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center'>
			<div>
				<h1 className='text-2xl text-gray-300 capitalize'>{user?.name}</h1>
				<p className='text-gray-500'>{getNow()}</p>
			</div>
			<div>
				<Button className='text-white w-72' onClick={() => setShowModal(true)}>
					Mostrar permisos del usuario
				</Button>
				<Modal
					title='Permisos del usuario actual'
					isOpen={showModal}
					closeModal={() => setShowModal(false)}
				>
					<div className='flex flex-col gap-2'>
						<p>Ver facturas {permissions?.facturas ? '✅' : '❌'} </p>
						<p>Ver proveedores {permissions?.proveedores ? '✅' : '❌'} </p>
						<p>Ver auditoría {permissions?.auditoria ? '✅' : '❌'} </p>
					</div>
				</Modal>
			</div>
		</div>
	);
};
