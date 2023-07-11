/* eslint-disable react/prop-types */
import { PDFDownloadLink } from '@react-pdf/renderer';
import { RiBillFill } from 'react-icons/ri';

export const PdfLink = ({ document, fileName, text, getProps, showIcon = false }) => (
	<PDFDownloadLink
		className='font-normal flex items-center justify-center gap-2 w-64 md:w-full truncate text-white px-4 py-2 bg-secondary-100 rounded-md'
		document={document}
		fileName={fileName}
	>
		{({ blob, url, loading, error }) => {
			if (getProps) getProps({ blob, url, loading, error });
			return loading ? (
				'Cargando pdf...'
			) : (
				<>
					{text}
					{showIcon && <RiBillFill />}
				</>
			);
		}}
	</PDFDownloadLink>
);
