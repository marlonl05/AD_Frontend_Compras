import { format } from 'date-fns';
import es from 'date-fns/locale/es';

export const getNow = () => {
	const date = Date.now();

	return format(date, "d 'de' MMMMMM 'del' yyyy", { locale: es });
};
