import React from 'react';
import { Flex, Link } from '@chakra-ui/react';

const MainNavigation = () => {
	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			p={4}
			bg={'#fff'}
		>
			<Link href="/" fontWeight="bold" fontSize="24px">
				CrowdCode
			</Link>
			<Flex as="nav" ml={4}>
				<Link
					href="/projects"
					mr={4}
					opacity={0.75}
					_hover={{ opacity: 1 }}
				>
					Projects
				</Link>
				<Link
					href="/requests"
					mr={4}
					opacity={0.75}
					_hover={{ opacity: 1 }}
				>
					Requests
				</Link>
				<Link href="#" opacity={0.75} _hover={{ opacity: 1 }}>
					Profile
				</Link>
			</Flex>
		</Flex>
	);
};

export default MainNavigation;
