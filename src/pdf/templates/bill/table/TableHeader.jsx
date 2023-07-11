import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc';
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
	description: {
		width: '50%',
		borderRightColor: borderColor,
		borderRightWidth: 1,
	},
	qty: {
		width: '10%',
		borderRightColor: borderColor,
		borderRightWidth: 1,
	},
	rate: {
		width: '15%',
		borderRightColor: borderColor,
		borderRightWidth: 1,
	},
	amount: {
		width: '15%',
	},
	id: {
		width: '10%',
	},
});

export const TableHeader = () => (
	<View style={styles.container}>
		<Text style={styles.id}>Id</Text>
		<Text style={styles.description}>Producto</Text>
		<Text style={styles.qty}>Cantidad</Text>
		<Text style={styles.rate}>Subtotal</Text>
		<Text style={styles.amount}>Total</Text>
	</View>
);
