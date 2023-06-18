/* eslint-disable react/prop-types */
import { RiCloseLine, RiDeleteBin6Line } from 'react-icons/ri';

export const ShoppingCar = ({ showOrder, toggleOrder }) => {
	return (
		<div
			className={`lg:col-span-2 bg-dark-200 fixed w-full h-full lg:right-0 lg:w-[400px] top-0 transition-all z-50 ${
				showOrder ? 'right-0' : '-right-full'
			}`}
		>
			{/* Orders */}
			<div className='relative text-gray-300 p-8 h-full'>
				<RiCloseLine
					className='lg:hidden absolute text-xl right-4 top-4 p-3 box-content bg-[#262837] rounded-full'
					onClick={toggleOrder}
				/>
				<h1 className='text-2xl mb-4 font-semibold'>Orders #152354</h1>

				{/* Orders button */}
				<div className='flex items-center gap-4 flex-wrap mb-8'>
					<button className='bg-[#EC7C6A] text-white py-2 px-4 rounded-xl'>Dine In</button>
					<button className='text-[#EC7C6A] border border-gray-500 py-2 px-4 rounded-xl'>
						To Go
					</button>
					<button className='text-[#EC7C6A] border border-gray-500 py-2 px-4 rounded-xl'>
						Delivery
					</button>
				</div>

				{/* Card */}
				<div className='h-full'>
					<div className='grid grid-cols-6 mb-3 p-4'>
						<h5 className='col-span-4'>Item</h5>
						<h5>Qty</h5>
						<h5>Price</h5>
					</div>

					{/* Products */}
					<div className='h-3/5 md:h-4/6 lg:h-3/5 overflow-y-auto'>
						{/* Product */}
						<div className='bg-[#262837] p-4 rounded-xl mb-4'>
							<div className='grid grid-cols-6 mb-4'>
								{/* Product description */}
								<div className='flex items-center gap-3 col-span-4'>
									<img
										src='https://i0.wp.com/steffensinzinger.de/blog/wp-content/uploads/2013/03/damwild-petersilienwurzel-urkarotte-kakaojus-1-von-1.jpg'
										alt='Food'
										className='w-10 h-10 object-cover rounded-full'
									/>
									<div>
										<h5 className='text-sm'>Spaicy seasoned...</h5>
										<p className='text-xs text-gray-500'>$2.29</p>
									</div>
								</div>

								{/* Qty */}
								<div>
									<span>2</span>
								</div>
								{/* Price */}
								<div>
									<span>$4.58</span>
								</div>
							</div>

							{/* Note */}
							<div className='grid grid-cols-6 gap-2'>
								<form className='col-span-5'>
									<input
										type='text'
										className='bg-[#1F1D2B] py-2 px-4 outline-none rounded-lg w-full'
										placeholder='Order note'
									/>
								</form>

								<div>
									<button className='border border-red-500 p-2 rounded-lg '>
										<RiDeleteBin6Line className='text-red-500 text-xl' />
									</button>
								</div>
							</div>
						</div>
						{/* Product */}
						<div className='bg-[#262837] p-4 rounded-xl mb-4'>
							<div className='grid grid-cols-6 mb-4'>
								{/* Product description */}
								<div className='flex items-center gap-3 col-span-4'>
									<img
										src='https://i0.wp.com/steffensinzinger.de/blog/wp-content/uploads/2013/03/damwild-petersilienwurzel-urkarotte-kakaojus-1-von-1.jpg'
										alt='Food'
										className='w-10 h-10 object-cover rounded-full'
									/>
									<div>
										<h5 className='text-sm'>Spaicy seasoned...</h5>
										<p className='text-xs text-gray-500'>$2.29</p>
									</div>
								</div>

								{/* Qty */}
								<div>
									<span>2</span>
								</div>
								{/* Price */}
								<div>
									<span>$4.58</span>
								</div>
							</div>

							{/* Note */}
							<div className='grid grid-cols-6 gap-2'>
								<form className='col-span-5'>
									<input
										type='text'
										className='bg-[#1F1D2B] py-2 px-4 outline-none rounded-lg w-full'
										placeholder='Order note'
									/>
								</form>

								<div>
									<button className='border border-red-500 p-2 rounded-lg '>
										<RiDeleteBin6Line className='text-red-500 text-xl' />
									</button>
								</div>
							</div>
						</div>
						{/* Product */}
						<div className='bg-[#262837] p-4 rounded-xl mb-4'>
							<div className='grid grid-cols-6 mb-4'>
								{/* Product description */}
								<div className='flex items-center gap-3 col-span-4'>
									<img
										src='https://i0.wp.com/steffensinzinger.de/blog/wp-content/uploads/2013/03/damwild-petersilienwurzel-urkarotte-kakaojus-1-von-1.jpg'
										alt='Food'
										className='w-10 h-10 object-cover rounded-full'
									/>
									<div>
										<h5 className='text-sm'>Spaicy seasoned...</h5>
										<p className='text-xs text-gray-500'>$2.29</p>
									</div>
								</div>

								{/* Qty */}
								<div>
									<span>2</span>
								</div>
								{/* Price */}
								<div>
									<span>$4.58</span>
								</div>
							</div>

							{/* Note */}
							<div className='grid grid-cols-6 gap-2'>
								<form className='col-span-5'>
									<input
										type='text'
										className='bg-[#1F1D2B] py-2 px-4 outline-none rounded-lg w-full'
										placeholder='Order note'
									/>
								</form>

								<div>
									<button className='border border-red-500 p-2 rounded-lg '>
										<RiDeleteBin6Line className='text-red-500 text-xl' />
									</button>
								</div>
							</div>
						</div>
						{/* Product */}
						<div className='bg-[#262837] p-4 rounded-xl mb-4'>
							<div className='grid grid-cols-6 mb-4'>
								{/* Product description */}
								<div className='flex items-center gap-3 col-span-4'>
									<img
										src='https://i0.wp.com/steffensinzinger.de/blog/wp-content/uploads/2013/03/damwild-petersilienwurzel-urkarotte-kakaojus-1-von-1.jpg'
										alt='Food'
										className='w-10 h-10 object-cover rounded-full'
									/>
									<div>
										<h5 className='text-sm'>Spaicy seasoned...</h5>
										<p className='text-xs text-gray-500'>$2.29</p>
									</div>
								</div>

								{/* Qty */}
								<div>
									<span>2</span>
								</div>
								{/* Price */}
								<div>
									<span>$4.58</span>
								</div>
							</div>

							{/* Note */}
							<div className='grid grid-cols-6 gap-2'>
								<form className='col-span-5'>
									<input
										type='text'
										className='bg-[#1F1D2B] py-2 px-4 outline-none rounded-lg w-full'
										placeholder='Order note'
									/>
								</form>

								<div>
									<button className='border border-red-500 p-2 rounded-lg '>
										<RiDeleteBin6Line className='text-red-500 text-xl' />
									</button>
								</div>
							</div>
						</div>
						{/* Product */}
						<div className='bg-[#262837] p-4 rounded-xl mb-4'>
							<div className='grid grid-cols-6 mb-4'>
								{/* Product description */}
								<div className='flex items-center gap-3 col-span-4'>
									<img
										src='https://i0.wp.com/steffensinzinger.de/blog/wp-content/uploads/2013/03/damwild-petersilienwurzel-urkarotte-kakaojus-1-von-1.jpg'
										alt='Food'
										className='w-10 h-10 object-cover rounded-full'
									/>
									<div>
										<h5 className='text-sm'>Spaicy seasoned...</h5>
										<p className='text-xs text-gray-500'>$2.29</p>
									</div>
								</div>

								{/* Qty */}
								<div>
									<span>2</span>
								</div>
								{/* Price */}
								<div>
									<span>$4.58</span>
								</div>
							</div>

							{/* Note */}
							<div className='grid grid-cols-6 gap-2'>
								<form className='col-span-5'>
									<input
										type='text'
										className='bg-[#1F1D2B] py-2 px-4 outline-none rounded-lg w-full'
										placeholder='Order note'
									/>
								</form>

								<div>
									<button className='border border-red-500 p-2 rounded-lg '>
										<RiDeleteBin6Line className='text-red-500 text-xl' />
									</button>
								</div>
							</div>
						</div>
						{/* Product */}
						<div className='bg-[#262837] p-4 rounded-xl mb-4'>
							<div className='grid grid-cols-6 mb-4'>
								{/* Product description */}
								<div className='flex items-center gap-3 col-span-4'>
									<img
										src='https://i0.wp.com/steffensinzinger.de/blog/wp-content/uploads/2013/03/damwild-petersilienwurzel-urkarotte-kakaojus-1-von-1.jpg'
										alt='Food'
										className='w-10 h-10 object-cover rounded-full'
									/>
									<div>
										<h5 className='text-sm'>Spaicy seasoned...</h5>
										<p className='text-xs text-gray-500'>$2.29</p>
									</div>
								</div>

								{/* Qty */}
								<div>
									<span>2</span>
								</div>
								{/* Price */}
								<div>
									<span>$4.58</span>
								</div>
							</div>

							{/* Note */}
							<div className='grid grid-cols-6 gap-2'>
								<form className='col-span-5'>
									<input
										type='text'
										className='bg-[#1F1D2B] py-2 px-4 outline-none rounded-lg w-full'
										placeholder='Order note'
									/>
								</form>

								<div>
									<button className='border border-red-500 p-2 rounded-lg '>
										<RiDeleteBin6Line className='text-red-500 text-xl' />
									</button>
								</div>
							</div>
						</div>
						{/* Product */}
						<div className='bg-[#262837] p-4 rounded-xl mb-4'>
							<div className='grid grid-cols-6 mb-4'>
								{/* Product description */}
								<div className='flex items-center gap-3 col-span-4'>
									<img
										src='https://i0.wp.com/steffensinzinger.de/blog/wp-content/uploads/2013/03/damwild-petersilienwurzel-urkarotte-kakaojus-1-von-1.jpg'
										alt='Food'
										className='w-10 h-10 object-cover rounded-full'
									/>
									<div>
										{/* <h5 className='text-sm'>ultimooo...</h5> */}
										<h5 className='text-sm'>Spaicy seasoned...</h5>
										<p className='text-xs text-gray-500'>$2.29</p>
									</div>
								</div>

								{/* Qty */}
								<div>
									<span>2</span>
								</div>
								{/* Price */}
								<div>
									<span>$4.58</span>
								</div>
							</div>

							{/* Note */}
							<div className='grid grid-cols-6 gap-2'>
								<form className='col-span-5'>
									<input
										type='text'
										className='bg-[#1F1D2B] py-2 px-4 outline-none rounded-lg w-full'
										placeholder='Order note'
									/>
								</form>

								<div>
									<button className='border border-red-500 p-2 rounded-lg '>
										<RiDeleteBin6Line className='text-red-500 text-xl' />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Submit payment */}
				<div className='absolute bottom-0 right-0 bg-[#262837] p-4 w-full lg:h-48'>
					<div className='flex items-center justify-between mb-4'>
						<span className='text-gray-400'>Discount</span>
						<span>$0</span>
					</div>
					<div className='flex items-center justify-between mb-6'>
						<span className='text-gray-400'>Sub total</span>
						<span>$201.03</span>
					</div>
					<div>
						<button className='bg-[#EC7C6A] w-full py-2 px-4 rounded-lg font-semibold'>
							Continue to payment
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
