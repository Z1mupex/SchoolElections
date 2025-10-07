type InstagramEmbedProps = {
	url: string;
	id: number;
};

const InstagramEmbed = ({ url, id }: InstagramEmbedProps) => {
	// if (!url) return null;
	return (
		<section className='mt-6'>
			<h2 className='text-xl font-semibold mb-2'>
				Видеопредставление кандидата:
			</h2>
			<blockquote
				className='instagram-media'
				data-instgrm-captioned
				data-instgrm-permalink={url}
				data-instgrm-version='14'
				style={{
					background: "#FFF",
					border: 0,
					borderRadius: "3px",
					boxShadow:
						"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
					margin: "1px",
					maxWidth: "540px",
					minWidth: "326px",
					padding: 0,
					width: "calc(100% - 2px)",
				}}
			></blockquote>
			<script async src='//www.instagram.com/embed.js'></script>
		</section>
	);
};

export default InstagramEmbed;
