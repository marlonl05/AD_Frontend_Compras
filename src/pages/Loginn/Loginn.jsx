import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../hooks';
import './StyLoginn.css';
import { Navigate } from 'react-router-dom';

function Loginn() {
	const { handleLogin, logged } = useAuthContext();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	if (logged) return <Navigate to='/compras' replace />;

	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
			<div className='flex flex-col items-center justify-center bg-gray-100 p-4'>
				<div className='my-8'>
					<img
						className='rounded-lg'
						src='/logo-compras.jpeg'
						alt='Logo modulo compras'
						width='100'
						height='100'
					/>
				</div>
				<div className='flex flex-col items-center gap-8'>
					<h1 className='text-4xl font-bold text-gray-900'>Login</h1>
				</div>
				<div className='my-14'>
					<p className='text-center relative text-gray-500 bg-gray-100 before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]'>
						Ingrese sus credenciales
					</p>
				</div>
				<div className='w-full mb-8'>
					<form onSubmit={handleSubmit(handleLogin)}>
						<div className='flex justify-center '>
							<input
								type='text'
								className='w-full max-w-md py-2 px-4 rounded-lg outline-none'
								placeholder='Usuario o correo'
								{...register('usuario', {
									required: { value: true, message: 'El campo es requerido.' },
								})}
							/>
						</div>
						{/* Errors */}
						<div className='flex justify-center mb-4 h-5'>
							{errors.email && (
								<div className='w-full max-w-md animate-fade error-message'>
									{errors.email.message}
								</div>
							)}
						</div>
						<div className='flex justify-center'>
							<input
								type='password'
								className='w-full max-w-md py-2 px-4 rounded-lg outline-none'
								placeholder='Password'
								{...register('password', {
									required: {
										value: true,
										message: 'El campo es requerido',
									},
									minLength: {
										value: 6,
										message: 'La contraseña debe tener al menos 6 caracteres',
									},
								})}
							/>
						</div>
						{/* Errors */}
						<div className='flex justify-center mb-6 h-5'>
							{errors.password && (
								<div className='w-full max-w-md animate-fade error-message'>
									{errors.password.message}
								</div>
							)}
						</div>
						<div className='w-full max-w-md mx-auto'>
							<button
								type='submit'
								className='w-full bg-gray-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors'
							>
								Iniciar sesión
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className='hidden bg-white lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg'>
				<img src='/logo-login.avif' className='w-full object-cover' />
			</div>
		</div>
	);
}

export default Loginn;
