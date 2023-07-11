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
		color: 'white',
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
		borderRightColor: borderColor,
		borderRightWidth: 1,
	},
});

export const TableBlankSpace = ({ rowsCount }) => {
	const blankRows = Array(rowsCount).fill(0);
	const rows = blankRows.map((x, i) => (
		<View style={styles.row} key={`BR${i}`}>
			<Text style={styles.id}>-</Text>
			<Text style={styles.description}>-</Text>
			<Text style={styles.qty}>-</Text>
			<Text style={styles.rate}>-</Text>
			<Text style={styles.amount}>-</Text>
		</View>
	));
	return <>{rows}</>;
};
