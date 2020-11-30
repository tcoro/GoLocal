import { render, screen } from '@testing-library/react';
import Cart from "../components/cart/Cart";




it('Shoult render the Item Milk', () => {


    const item = Array({ count: 1, name: "Milk", farmer: "Hans", price: 5 });

    render(<Cart items={item} />);
    expect(screen.getByText("Milk")).toBeInTheDocument();
    
});