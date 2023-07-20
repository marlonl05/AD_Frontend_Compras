/* eslint-disable react/prop-types */
import { View, StyleSheet } from '@react-pdf/renderer';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableBlankSpace } from './TableBlankSpace';
import { TableFooter } from './TableFooter';

const styles = StyleSheet.create({
	tableContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 24,
		borderWidth: 1,
		borderColor: '#bff0fd',
	},
});

export const BillItemsTable = ({ tableRowsCount = 11, items = [], total, products }) => (
	<View style={styles.tableContainer}>
		<TableHeader />
		<TableRow items={items} products={products} />
		<TableBlankSpace
			rowsCount={items.length > tableRowsCount ? tableRowsCount : tableRowsCount - items.length}
		/>
		<TableFooter total={total} />
	</View>
);
