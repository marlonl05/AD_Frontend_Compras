/* eslint-disable react/prop-types */
import { twMerge } from 'tailwind-merge';

const defaulStyles =
	'grid grid-cols-2 gap-4 items-center mb-4 p-4 md:px-0 md:pt-0 rounded-xl animate-fade border-2 md:border-none ';

export const TableRow = ({ item, itemLabels, rowStyles = 'md:grid-cols-4', detailBtn }) => {
	const itemKeys = Object.keys(itemLabels);
	const length = itemKeys.length;

	if (!item) return;

	return (
		<div className={twMerge(defaulStyles, rowStyles)}>
			{itemKeys.map((key, index) => {
				return (
					<div key={index}>
						<h5 className='md:hidden font-bold mb-2'>
							{length === index + 1 ? 'Ver detalles' : itemLabels[key]}
						</h5>
						<span className={`truncate block ${key !== 'email' && 'capitalize'}`}>
							{length === index + 1 ? detailBtn : item[key]?.toString().toLowerCase()}
						</span>
					</div>
				);
			})}
		</div>
	);
};
