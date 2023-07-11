import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle';
import BillTo from './BillTo';
import InvoiceNo from './InvoiceNo';
import InvoiceItemsTable from './InvoiceItemsTable';
import InvoiceThankYouMsg from './InvoiceThankYouMsg';
import logo from '../../../public/logo-compras.jpeg';
import { invoice } from './invoiceData';

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

// Tutorial:
// https://kags.me.ke/post/generate-dynamic-pdf-incoice-using-react-pdf/
const Invoice = () => (
	<Document>
		<Page size='A4' style={styles.page}>
			<Image style={styles.logo} src={logo} />
			<InvoiceTitle title='Invoice' />
			<InvoiceNo invoice={invoice} />
			<BillTo invoice={invoice} />
			<InvoiceItemsTable invoice={invoice} />
			<InvoiceThankYouMsg />
		</Page>
	</Document>
);

export default Invoice;
