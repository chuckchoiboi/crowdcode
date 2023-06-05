import React from 'react';
import {
	Box,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	IconButton,
	Heading,
	Text,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

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
				<Box mt={10} id="search-bar" width="100%">
					<Flex
						justifyContent="flex-start"
						alignItems="center"
						mx="auto"
					>
						<InputGroup size="md" width="100%">
							<Input
								type="text"
								placeholder="Search..."
								boxShadow="0px 0px 4px rgba(0, 0, 0, 0.1)"
								bg="#fff"
								color="black"
							/>
							<InputRightElement ml={-2}>
								<IconButton
									colorScheme="blue"
									aria-label="Search"
									icon={<FaSearch />}
									h="full"
								/>
							</InputRightElement>
						</InputGroup>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default HeroBanner;
