/* eslint-disable react/prop-types */
import { View, StyleSheet } from '@react-pdf/renderer';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableBlankSpace } from './TableBlankSpace';

const styles = StyleSheet.create({
	tableContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 24,
		borderWidth: 1,
		borderColor: '#bff0fd',
	},
});

export const ProvidersTable = ({ tableRowsCount = 11, items = [] }) => (
	<View style={styles.tableContainer}>
		<TableHeader />
		<TableRow items={items} />
		<TableBlankSpace
			rowsCount={items.length >= tableRowsCount ? 0 : tableRowsCount - items.length}
		/>
	</View>
);
