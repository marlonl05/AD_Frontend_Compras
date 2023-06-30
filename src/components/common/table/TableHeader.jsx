/* eslint-disable react/prop-types */
import { twMerge } from 'tailwind-merge';

const defaulStyles = 'hidden md:grid gap-4 mb-4 pb-4 border-b';

export const TableHeader = ({ labels, columsStyle = 'md:grid-cols-4', minRows }) => {
	return (
		<div className={twMerge(defaulStyles, columsStyle)}>
			{Object.values(labels).map(
				(label, index) =>
					label && (
						<h5 key={index} className='truncate'>
							{label}
						</h5>
					)
			)}
		</div>
	);
};
