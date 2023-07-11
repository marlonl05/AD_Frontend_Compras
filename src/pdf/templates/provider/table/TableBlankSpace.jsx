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
		width: '15%',
		...boxStyles,
	},
	name: {
		width: '20%',
		...boxStyles,
	},
	email: {
		width: '20%',
		...boxStyles,
	},
	phone: {
		width: '10%',
		...boxStyles,
	},
	city: {
		width: '10%',
		...boxStyles,
	},
	addrees: {
		width: '15%',
		...boxStyles,
	},
	credit: {
		width: '10%',
	},
});

export const TableBlankSpace = ({ rowsCount }) => {
	const blankRows = Array(rowsCount).fill(0);
	const rows = blankRows.map((x, i) => (
		<View style={styles.row} key={`BR${i}`}>
			<Text style={styles.id}>-</Text>
			<Text style={styles.name}>-</Text>
			<Text style={styles.email}>-</Text>
			<Text style={styles.phone}>-</Text>
			<Text style={styles.city}>-</Text>
			<Text style={styles.addrees}>-</Text>
			<Text style={styles.credit}>-</Text>
		</View>
	));
	return <>{rows}</>;
};
