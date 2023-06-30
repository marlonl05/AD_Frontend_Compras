/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiSearchLine } from 'react-icons/ri';
import ReactPaginate from 'react-paginate';

const pageLinkClass =
	'w-full px-2 rounded-md font-semibold border border-secondary-100 flex items-center justify-center hover:bg-secondary-100 hover:text-dark-100 transition-colors';

export function TableLayout({ items, itemsPerPage, inputPlaceholder, Table }) {
	const [itemOffset, setItemOffset] = useState(0);
	const [pattern, setPattern] = useState();

	const { register, handleSubmit, reset } = useForm();

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	const handlePageClick = event => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		setItemOffset(newOffset);
	};

	const handleSearch = ({ pattern }) => setPattern(pattern);

	const handleReset = () => {
		reset({ pattern: '' });
		setPattern('');
	};

	return (
		<div className='bg-dark-200 p-8 rounded-xl lg:block text-white'>
			<div className='mb-10'>
				<div className='flex items-center justify-start flex-col sm:flex-row gap-2'>
					<form onSubmit={handleSubmit(handleSearch)} className='relative mr-2 text-dark-100'>
						<RiSearchLine className='absolute top-1/2 -translate-y-1/2 left-4' />
						<input
							className='w-full md:w-96 py-2 pl-10 pr-4 rounded-lg outline-none placeholder:text-dark-100'
							placeholder={inputPlaceholder}
							{...register('pattern', { required: true })}
						/>
					</form>
					<button
						className='px-4 py-2 rounded-md bg-secondary-100 text-dark-100 transition-colors'
						onClick={handleReset}
					>
						Limpiar
					</button>
				</div>
			</div>

			<Table items={currentItems} pattern={pattern} />

			<ReactPaginate
				className='flex justify-center items-center gap-2 flex-col md:flex-row '
				previousLabel='Anterior'
				nextLabel='Siguiente'
				pageLinkClassName={pageLinkClass}
				previousLinkClassName={pageLinkClass}
				nextLinkClassName={pageLinkClass}
				breakLabel='...'
				breakLinkClassName={pageLinkClass}
				pageCount={pageCount}
				marginPagesDisplayed={1}
				pageRangeDisplayed={1}
				onPageChange={handlePageClick}
				activeClassName='rounded-md bg-secondary-100 text-dark-100 transition-colors'
			/>
		</div>
	);
}
