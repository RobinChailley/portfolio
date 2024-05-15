import { Download } from 'lucide-react';

export default function DownloadCVButton() {
	return (
		<a
			href="/Robin_Chailley_CV.pdf"
			download="Robin_Chailley_CV.pdf"
			className="right-6 min-w-fit bottom-6 group transition-all duration-1000 fixed rounded-full opacity-30 hover:opacity-100 border-[1px] border-white flex items-center justify-center p-2"
		>
			<span className="px-4 transition-all duration-1000 hidden group-hover:inline-flex">Download CV</span>
			<Download />
		</a>
	);
}
