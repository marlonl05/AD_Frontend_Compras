import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
});

export const AllProvidersPdf = () => (
	<Document>
		<Page size='A4' style={styles.page}>
			<View style={styles.section}>
				<Text>Reporte de PDF</Text>
			</View>
			<View style={styles.section}>
				<Text>Proveedores</Text>
			</View>
		</Page>
	</Document>
);
