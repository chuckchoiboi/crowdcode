import React from 'react';
import Image from 'next/image';

import { Flex, Link } from '@chakra-ui/react';

const MainNavigation = () => {
	return (
		<Flex justifyContent="space-between" alignItems="center" p={4}>
			<Link
				href="/"
				fontWeight="bold"
				fontSize="24px"
				fontFamily="Monospace"
				_hover={{ textDecoration: 'none' }}
			>
				crowdCode
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
					href="/api/auth/signin"
					opacity={0.75}
					_hover={{ opacity: 1 }}
				>
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
						alt="Google"
						width="25"
						height="25"
					/>
				</Link>
			</Flex>
		</Flex>
	);
};

export default MainNavigation;
