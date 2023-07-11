/* eslint-disable react/prop-types */
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import { BillTitle } from './BillTitle';
import { BillNo } from './BillNo';
import { BillTo } from './BillTo';
import { BillItemsTable } from './table/BillItemsTable';

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

export const OneBillPdf = ({ billHeader = {}, billDetails = [], provider, products }) => {
	return (
		<Document>
			<Page size='A4' style={styles.page}>
				{/* <Image style={styles.logo} src={logo} /> */}
				<BillTitle title='Factura de la compra' />
				<BillNo billHeader={billHeader} />
				{provider && <BillTo provider={provider} />}
				<BillItemsTable items={billDetails} total={billHeader?.total} products={products} />
			</Page>
		</Document>
	);
};
