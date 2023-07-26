/* eslint-disable react/prop-types */
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc';
const boxStyles = {
	textAlign: 'left',
	borderRightColor: borderColor,
	borderRightWidth: 1,
	paddingLeft: 8,
};
const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		borderBottomColor: '#bff0fd',
		borderBottomWidth: 1,
		alignItems: 'center',
		height: 24,
		fontStyle: 'bold',
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
		textAlign: 'center',
	},
	iva: {
		width: '5%',
		...boxStyles,
		textAlign: 'center',
	},
	subtotal: {
		width: '10%',
		...boxStyles,
		textAlign: 'center',
	},
	total: {
		width: '10%',
		textAlign: 'center',
	},
});

export const TableRow = ({ items }) => {
	const rows = items.map(item => {
		return (
			<View style={styles.row} key={item.id.toString()}>
				<Text style={styles.id}>{item.id}</Text>
				<Text style={styles.provider}>{item.provider}</Text>
				<Text style={styles.product}>{item.pro_nombre}</Text>
				<Text style={styles.state}>{item.estado}</Text>
				<Text style={styles.pay_type}>{item.tipo_pago}</Text>
				<Text style={styles.quantity}>{item?.cantidad}</Text>
				<Text style={styles.cost}>{item.pro_costo}</Text>
				<Text style={styles.iva}>{item.pro_valor_iva}</Text>
				<Text style={styles.subtotal}>{item.subtotal}</Text>
				<Text style={styles.total}>{item.total}</Text>
			</View>
		);
	});

	return <>{rows}</>;
};
