import React from 'react';
import { Box, Flex, Input, Button, Heading, Text } from '@chakra-ui/react';

type HeroBannerProps = {
	headingText: string;
	secondaryText: string;
	imageUrl?: string;
};

const HeroBanner = ({
	headingText,
	secondaryText,
	imageUrl = '/images/-banner.jpg',
}: HeroBannerProps) => {
	return (
		<Box
			bgImage={imageUrl}
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
				alignItems="center"
				textAlign="center"
				color="#fff"
				position="relative"
				height="100%"
				px={4}
			>
				<Heading as="h1" size="xl" mt={8}>
					{headingText}
				</Heading>
				<Text fontSize="lg" mt={4}>
					{secondaryText}
				</Text>
				<Box mt={10} id="search-bar" width="100%" zIndex={2}>
					<Flex
						justifyContent="center"
						alignItems="center"
						maxWidth="800px"
						mx="auto"
					>
						<Input
							type="text"
							placeholder="Search..."
							size="md"
							mr={2}
							flex="1"
							boxShadow="0px 0px 4px rgba(0, 0, 0, 0.1)"
							bg="#fff"
						/>
						<Button colorScheme="blue">Search</Button>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default HeroBanner;
