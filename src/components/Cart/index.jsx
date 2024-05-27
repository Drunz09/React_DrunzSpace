import { ShippingDetail } from "./ShippingDetail";
import { ShoppingCart } from "./ShoppingCart";

export const CartMenu = () => {
  return (
    <section className="md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 flex-wrap">
          <ShoppingCart />
          <ShippingDetail />
        </div>
      </div>
    </section>
  );
};
