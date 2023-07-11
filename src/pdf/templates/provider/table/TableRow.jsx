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

export const TableRow = ({ items }) => {
	const rows = items.map(item => {
		return (
			<View style={styles.row} key={item.id.toString()}>
				<Text style={styles.id}>{item.documento_identificacion}</Text>
				<Text style={styles.name}>{item.nombre}</Text>
				<Text style={styles.email}>{item.email}</Text>
				<Text style={styles.phone}>{item.telefono}</Text>
				<Text style={styles.city}>{item.ciudad}</Text>
				<Text style={styles.addrees}>{item.direccion}</Text>
				<Text style={styles.credit}>{item.creditos}</Text>
			</View>
		);
	});

	return <>{rows}</>;
};
