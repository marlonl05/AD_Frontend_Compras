/* eslint-disable react/prop-types */
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	headerContainer: {
		marginTop: 20,
	},
	billTo: {
		marginTop: 20,
		paddingBottom: 3,
		fontFamily: 'Helvetica-Oblique',
	},
});

export const BillTo = ({ provider = {} }) => (
	<View style={styles.headerContainer}>
		<Text style={styles.billTo}>Detalles del proveedor:</Text>
		<Text>{provider.nombre}</Text>
		<Text>{provider.telefono}</Text>
		<Text>{provider.email}</Text>
		<Text>{provider.direccion}</Text>
	</View>
);
