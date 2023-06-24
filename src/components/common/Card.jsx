/* eslint-disable react/prop-types */
export const Card = ({ title, alt, imgSrc, children }) => {
	return (
		<div className='bg-dark-200 p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
			<img
				src={imgSrc}
				alt={alt}
				className='max-w-[160px] max-h-[160px] object-cover rounded-full -mt-16 shadow-2xl'
			/>
			<p className='text-xl'>{title}</p>

			{children}
		</div>
	);
};
