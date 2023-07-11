/* eslint-disable react/prop-types */
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 20,
	},
	reportTitle: {
		color: '#61dafb',
		letterSpacing: 3,
		fontSize: 25,
		textAlign: 'center',
		textTransform: 'uppercase',
	},
	logo: {
		width: 74,
		height: 66,
		top: -10,
	},
});

export const BillTitle = ({ title }) => (
	<View style={styles.titleContainer}>
		<Text style={styles.reportTitle}>{title}</Text>
		<Image style={styles.logo} src='/logo-compras.jpeg' />
	</View>
);
