export const calculateDiscount = ({
  price,
  discountPercentage,
}: {
  price: number;
  discountPercentage: number;
}): string => {
  if (price < 0 || discountPercentage < 0 || discountPercentage > 100) {
    throw new Error(
      "Invalid input. Price and discount percentage must be non-negative, and discount percentage cannot be 100% or more"
    );
  }

  const discountAmount = (discountPercentage / 100) * price;
  const discountedPrice = price - discountAmount;

  return discountedPrice.toFixed(2);
};
