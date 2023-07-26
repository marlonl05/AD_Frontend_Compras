import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc';
const boxStyles = {
	borderRightColor: borderColor,
	borderRightWidth: 1,
};
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderBottomColor: '#bff0fd',
		backgroundColor: '#bff0fd',
		borderBottomWidth: 1,
		alignItems: 'center',
		height: 24,
		textAlign: 'center',
		fontStyle: 'bold',
		flexGrow: 1,
	},
	id: {
		width: '7%',
		...boxStyles,
	},
	provider: {
		width: '15%',
		...boxStyles,
	},
	product: {
		width: '20%',
		...boxStyles,
	},
	state: {
		width: '8%',
		...boxStyles,
	},
	pay_type: {
		width: '8%',
		...boxStyles,
	},
	quantity: {
		width: '7%',
		...boxStyles,
	},
	cost: {
		width: '10%',
		...boxStyles,
	},
	iva: {
		width: '5%',
		...boxStyles,
	},
	subtotal: {
		width: '10%',
		...boxStyles,
	},
	total: {
		width: '10%',
		alignItems: 'center',
	},
});

export const TableHeader = () => (
	<View style={styles.container}>
		<Text style={styles.id}>Factura Id</Text>
		<Text style={styles.provider}>Proveedor</Text>
		<Text style={styles.product}>Producto</Text>
		<Text style={styles.state}>Estado</Text>
		<Text style={styles.pay_type}>Tipo Pago</Text>
		<Text style={styles.quantity}>Cantidad</Text>
		<Text style={styles.cost}>Costo</Text>
		<Text style={styles.iva}>Iva</Text>
		<Text style={styles.subtotal}>Subtotal</Text>
		<Text style={styles.total}>Total Factura</Text>
	</View>
);
