/* eslint-disable react/prop-types */
import { PDFDownloadLink } from '@react-pdf/renderer';

export const PdfLink = ({ document, fileName, text, getProps }) => (
	<PDFDownloadLink
		className='font-normal text-start inline-block w-64 md:w-auto truncate text-white px-4 py-2 bg-secondary-100 rounded-md'
		document={document}
		fileName={fileName}
	>
		{({ blob, url, loading, error }) => {
			if (getProps) getProps({ blob, url, loading, error });
			return loading ? 'Cargando pdf...' : text;
		}}
	</PDFDownloadLink>
);
