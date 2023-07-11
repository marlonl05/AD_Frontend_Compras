/* eslint-disable react/prop-types */
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	billRow: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	billText: {
		fontSize: 12,
		fontStyle: 'bold',
		width: 75,
	},
	label: {
		width: 125,
	},
});

export const BillNo = ({ billHeader = {} }) => (
	<>
		<View style={styles.billRow}>
			<Text style={styles.label}>Factura Nro:</Text>
			<Text style={styles.billText}>{billHeader?.id}</Text>
		</View>
		<View style={styles.billRow}>
			<Text style={styles.label}>Tipo de pago: </Text>
			<Text style={styles.billText}>{billHeader?.tipo_pago?.toLowerCase()}</Text>
		</View>
		<View style={styles.billRow}>
			<Text style={styles.label}>Fecha de compra: </Text>
			<Text style={styles.billText}>{billHeader?.fecha_factura}</Text>
		</View>
		<View style={styles.billRow}>
			<Text style={styles.label}>Fecha de vencimiento: </Text>
			<Text style={styles.billText}>{billHeader?.fecha_vencimiento}</Text>
		</View>
	</>
);
