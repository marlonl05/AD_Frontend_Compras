/* eslint-disable react/prop-types */
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import { BillTitle } from '../bill/BillTitle';
import { ProvidersTable } from './table/ProvidersTable';

const styles = StyleSheet.create({
	page: {
		fontFamily: 'Helvetica',
		fontSize: 11,
		paddingTop: 30,
		paddingLeft: 60,
		paddingRight: 60,
		lineHeight: 1.5,
		flexDirection: 'column',
	},
	logo: {
		width: 74,
		height: 66,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});

export const AllProvidersPdf = ({ providers = [] }) => {
	return (
		<Document>
			<Page size='A4' style={styles.page} orientation='landscape'>
				<BillTitle title='Reporte de proveedores' />
				<ProvidersTable items={providers} />
			</Page>
		</Document>
	);
};
