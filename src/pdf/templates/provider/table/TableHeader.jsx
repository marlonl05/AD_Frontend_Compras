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

export const TableHeader = () => (
	<View style={styles.container}>
		<Text style={styles.id}>DNI</Text>
		<Text style={styles.name}>Nombre</Text>
		<Text style={styles.email}>Email</Text>
		<Text style={styles.phone}>Teléfono</Text>
		<Text style={styles.city}>Cuidad</Text>
		<Text style={styles.addrees}>Dirección</Text>
		<Text style={styles.credit}>Crédito</Text>
	</View>
);
