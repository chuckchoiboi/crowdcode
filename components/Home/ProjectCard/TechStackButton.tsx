import { Button } from '@chakra-ui/react';

interface TechStackButtonProps {
	stack: string;
}

const TechStackButton: React.FC<TechStackButtonProps> = ({ stack }) => {
	return (
		<Button
			colorScheme="teal"
			size="sm"
			variant="outline"
			borderRadius="full"
		>
			{stack}
		</Button>
	);
};

export default TechStackButton;
