import { Button } from '@chakra-ui/react';

interface ProductAreaButtonProps {
	area: string;
}

const ProductAreaButton: React.FC<ProductAreaButtonProps> = ({ area }) => {
	return (
		<Button
			colorScheme="blue"
			size="sm"
			variant="outline"
			borderRadius="full"
		>
			{area}
		</Button>
	);
};

export default ProductAreaButton;
