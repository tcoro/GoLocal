import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "../App";


it("Renders Home Header",()=> {
    render(<App />);
    expect(screen.getByText("GO LOCAL")).toBeInTheDocument();
})

