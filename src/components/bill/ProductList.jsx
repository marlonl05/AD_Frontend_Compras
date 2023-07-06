/* eslint-disable react/prop-types */

const Product = ({ name, price, quantity, subtotal, total }) => {
	return (
		<div className='bg-dark-200 p-4 mb-4 border border-b-secondary-100 border-transparent'>
			<div className='grid grid-cols-4 gap-3 mb-1'>
				<div className='flex items-center'>
					<div>
						<h5 className='text-sm w-[90px] truncate'>{name}</h5>
						<p className='text-xs text-gray-500'>$ {price}</p>
					</div>
				</div>

				<div className='text-center'>
					<span>{quantity}</span>
				</div>
				<div>
					<span>$ {subtotal}</span>
				</div>
				<div>
					<span>$ {total}</span>
				</div>
			</div>
		</div>
	);
};

export const ProductList = ({ productList }) => {
	return (
		<>
			{/* Products */}
			<Product name='Tallarines' price={2.23} quantity={4} subtotal={9.12} total={11.44} />
			<Product name='Coca cola 3Litros' price={2.23} quantity={4} subtotal={9.12} total={11.44} />
		</>
	);
};
