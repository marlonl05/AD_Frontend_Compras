/* eslint-disable react/prop-types */
import { Card } from '../common';

const classname = 'text-xl w-full max-w-md text-start';

export const AuditView = ({ audit }) => {
	if (!audit) return;

	return (
		<div className='flex items-center justify-center'>
			<Card>
				<h3 className='text-2xl font-bold truncate text-secondary-100 w-full max-w-md text-start border border-transparent border-b-secondary-100 mb-4'>
					Detalles de la auditoría #{audit.id}
				</h3>
				<p className={classname}>
					<span className='text-secondary-100 font-bold'>Usuario: </span>
					{audit.aud_usuario}
				</p>
				<p className={classname}>
					<span className='text-secondary-100 font-bold'>Acción: </span>
					{audit.aud_accion}
				</p>
				<p className={classname}>
					<span className='text-secondary-100 font-bold'>Módulo: </span>
					{audit.aud_modulo}
				</p>
				<p className={classname}>
					<span className='text-secondary-100 font-bold'>Fecha: </span>
					{audit.aud_fecha}
				</p>
				<p className={classname}>
					<span className='text-secondary-100 font-bold'>Observación: </span>
					{audit.aud_observacion}
				</p>
				<p className={classname}>
					<span className='text-secondary-100 font-bold'>Funcionalidad: </span>
					{audit.aud_funcionalidad}
				</p>
			</Card>
		</div>
	);
};
