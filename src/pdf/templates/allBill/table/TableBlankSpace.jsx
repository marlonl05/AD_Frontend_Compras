/* eslint-disable react/prop-types */
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc';
const boxStyles = {
	borderRightColor: borderColor,
	borderRightWidth: 1,
};
const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		borderBottomColor: '#bff0fd',
		borderBottomWidth: 1,
		alignItems: 'center',
		height: 24,
		fontStyle: 'bold',
		color: 'white',
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
		width: '10%',
		...boxStyles,
	},
	pay_type: {
		width: '13%',
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
	},
});

export const TableBlankSpace = ({ rowsCount }) => {
	const blankRows = Array(rowsCount).fill(0);
	const rows = blankRows.map((x, i) => (
		<View style={styles.row} key={`BR${i}`}>
			<Text style={styles.id}>-</Text>
			<Text style={styles.provider}>-</Text>
			<Text style={styles.product}>-</Text>
			<Text style={styles.state}>-</Text>
			<Text style={styles.pay_type}>-</Text>
			<Text style={styles.cost}>-</Text>
			<Text style={styles.iva}>-</Text>
			<Text style={styles.subtotal}>-</Text>
			<Text style={styles.total}>-</Text>
		</View>
	));
	return <>{rows}</>;
};
