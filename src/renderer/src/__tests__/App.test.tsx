import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from '../App'

it("App 컴포넌트는 렌더되어야 한다.", () => {
  render(<App />);
  const element = screen.queryByText("create-electron");
  expect(element).toBeInTheDocument();
})