import { providerState } from '../constants';

export const mapNormalToFormProvider = provider => {
	return {
		...provider,
		documento_de_identificacion: provider.documento_identificacion,
		nombres_completos: provider.nombre,
		estado_del_proveedor: provider.estado,
	};
};

export const mapFormProviderToNormal = provider => {
	provider.documento_identificacion = provider.documento_de_identificacion;
	provider.nombre = provider.nombres_completos;
	provider.estado = !provider.estado_del_proveedor ? providerState.INACTIVO : providerState.ACTIVO;

	delete provider.documento_de_identificacion;
	delete provider.estado_del_proveedor;
	delete provider.nombres_completos;

	return provider;
};
