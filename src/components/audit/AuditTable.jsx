/* eslint-disable react/prop-types */
import { Button, Loading, TableHeader, TableRow } from '../common';
import { useAuthContext } from '../../hooks';
import { TableLayout } from '../../layout/table';
import { RiEye2Fill } from 'react-icons/ri';

const auditLabels = {
	id: 'ID',
	aud_accion: 'Acción',
	aud_fecha: 'Fecha',
	aud_funcionalidad: 'Funcionalidad',
	aud_modulo: 'Módulo',
	aud_usuario: 'Usuario',
};

const Table = ({ items }) => {
	const { handleSetCurrentAudit } = useAuthContext();

	return (
		<>
			<TableHeader
				labels={{ ...auditLabels, detalles: 'Ver detalles' }}
				columsStyle='md:grid-cols-7'
			/>

			{items.map(audit => (
				<TableRow
					key={+audit.id}
					item={audit}
					itemLabels={{ ...auditLabels, aux: null }}
					rowStyles='md:grid-cols-7'
					exceptionKeysToCapitalize={['aud_usuario']}
					detailBtn={
						<Button onClick={() => handleSetCurrentAudit(+audit.id)}>
							<RiEye2Fill />
							Detalles
						</Button>
					}
				/>
			))}
		</>
	);
};

export const AuditTable = () => {
	const { audit } = useAuthContext();

	if (!audit) return <Loading />;

	return (
		<TableLayout
			items={Object.values(audit) || []}
			itemsPerPage={5}
			inputPlaceholder='Buscar una auditoría'
			Table={Table}
		/>
	);
};
