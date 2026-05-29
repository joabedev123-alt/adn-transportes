'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
	// Divide as imagens em 3 colunas
	const columns: GalleryImage[][] = [[], [], []];
	images.forEach((img, i) => {
		columns[i % 3].push(img);
	});

	return (
		<div className="relative flex w-full flex-col items-center justify-center py-6">
			<div className="mx-auto grid w-full max-w-6xl gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-3">
				{columns.map((colImages, colIndex) => (
					<div key={colIndex} className="grid gap-4 sm:gap-6 h-fit">
						{colImages.map((img, index) => {
							// Alterna as proporções para criar um visual alvenaria (masonry)
							const isPortrait = (colIndex + index) % 2 === 0;
							const ratio = isPortrait ? 3 / 4 : 4 / 3;

							return (
								<AnimatedImage
									key={`${colIndex}-${index}`}
									alt={img.alt}
									src={img.src}
									ratio={ratio}
								/>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
}

interface AnimatedImageProps {
	alt: string;
	src: string;
	className?: string;
	placeholder?: string;
	ratio: number;
}

function AnimatedImage({ alt, src, ratio, placeholder }: AnimatedImageProps) {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true, margin: "200px 0px" });
	const [isLoading, setIsLoading] = React.useState(true);
	const [imgSrc, setImgSrc] = React.useState(src);

	const handleError = () => {
		if (placeholder) {
			setImgSrc(placeholder);
		}
	};

	return (
		<AspectRatio
			ref={ref}
			ratio={ratio}
			className="bg-gray-100 dark:bg-gray-800 relative size-full rounded-xl overflow-hidden border border-gray-200 shadow-sm"
		>
			<img
				alt={alt}
				src={imgSrc}
				className={cn(
					'size-full rounded-xl object-cover opacity-0 transition-all duration-1000 ease-in-out hover:scale-105',
					{
						'opacity-100': isInView && !isLoading,
					},
				)}
				onLoad={() => setIsLoading(false)}
				loading="lazy"
				onError={handleError}
			/>
		</AspectRatio>
	);
}
