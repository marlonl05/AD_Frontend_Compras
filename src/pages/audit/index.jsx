import { Tab } from '@headlessui/react';
import { Body, Header } from '../../components/common';
import { TableWrapper } from '../../layout/table';
import { useAuthContext } from '../../hooks';
import { AuditTable, AuditView } from '../../components/audit';

const focusStyle =
	'relative py-2 pr-4 ui-selected:text-secondary-100 ui-selected:before:w-3/4 ui-selected:before: ui-selected:before:h-[2px] ui-selected:before:absolute ui-selected:before:bg-secondary-100 ui-selected:before:left-0 ui-selected:before:rounded-full ui-selected:before:-bottom-[1px] outline-none';

export const Audit = () => {
	const { defaultTabIndex, audit, currentAudit, handleTabIndex } = useAuthContext();

	return (
		<TableWrapper
			defaultIndex={defaultTabIndex}
			handleTabIndex={handleTabIndex}
			header={
				<Header>
					<Tab className={focusStyle}>Tabla de auditoria</Tab>
					<Tab className={focusStyle}>Detalles</Tab>
				</Header>
			}
			body={
				<Body>
					<Tab.Panel>
						<AuditTable />
					</Tab.Panel>
					<Tab.Panel>
						<AuditView audit={audit && audit[currentAudit]} />
					</Tab.Panel>
				</Body>
			}
		/>
	);
};
