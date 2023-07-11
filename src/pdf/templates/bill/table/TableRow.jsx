/* eslint-disable react/prop-types */
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc';
const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		borderBottomColor: '#bff0fd',
		borderBottomWidth: 1,
		alignItems: 'center',
		height: 24,
		fontStyle: 'bold',
	},
	description: {
		width: '50%',
		textAlign: 'left',
		borderRightColor: borderColor,
		borderRightWidth: 1,
		paddingLeft: 8,
	},
	qty: {
		width: '10%',
		borderRightColor: borderColor,
		borderRightWidth: 1,
		textAlign: 'right',
		paddingRight: 8,
	},
	rate: {
		width: '15%',
		borderRightColor: borderColor,
		borderRightWidth: 1,
		textAlign: 'right',
		paddingRight: 8,
	},
	amount: {
		width: '15%',
		textAlign: 'right',
		paddingRight: 8,
	},
	id: {
		width: '10%',
		textAlign: 'center',
		borderRightColor: borderColor,
		borderRightWidth: 1,
		paddingLeft: 8,
	},
});

export const TableRow = ({ items, products }) => {
	const rows = items.map(item => {
		const product = products[item.producto_id];
		return (
			<View style={styles.row} key={item.producto_id.toString()}>
				<Text style={styles.id}>{item.producto_id.toString()}</Text>
				<Text style={styles.description}>{product?.pro_nombre}</Text>
				<Text style={styles.qty}>{item.cantidad}</Text>
				<Text style={styles.rate}>{item.subtotal}</Text>
				<Text style={styles.amount}>{item.total}</Text>
			</View>
		);
	});

	return <>{rows}</>;
};
