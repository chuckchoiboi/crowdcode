import React from 'react';
import {
	Box,
	Flex,
	Input,
	IconButton,
	Heading,
	Text,
	Button,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

type ButtonHeroBannerProps = {
	headingText: string;
	secondaryText: string;
	bannerImageUrl?: string;
	buttonText?: string;
};

const ButtonHeroBanner = ({
	headingText,
	secondaryText,
	bannerImageUrl = '/images/-banner.jpg',
	buttonText,
}: ButtonHeroBannerProps) => {
	return (
		<Box
			bgImage={bannerImageUrl}
			bgSize="cover"
			bgPosition="center"
			minHeight="300px"
			width="100vw"
			height="500px"
			position="relative"
		>
			{/* overlay to shade the banner image */}
			<Box
				position="absolute"
				top={0}
				left={0}
				width="100%"
				height="100%"
				backgroundColor="rgba(0, 0, 0, 0.5)"
			/>
			<Flex
				flexDirection="column"
				justifyContent="center"
				alignItems="flex-start"
				textAlign="left"
				color="#fff"
				position="relative"
				height="100%"
				px={4}
				maxWidth="1000px"
				m="auto"
			>
				<Heading as="h1" size="xl" mt={8}>
					{headingText}
				</Heading>
				<Text fontSize="lg" mt={4}>
					{secondaryText}
				</Text>

				{buttonText ? (
					<Box mt={10}>
						<Button size="lg" colorScheme="gray">
							{buttonText}
						</Button>
					</Box>
				) : null}
			</Flex>
		</Box>
	);
};

export default ButtonHeroBanner;
