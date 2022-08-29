import {beforeEach, describe, expect, test} from 'vitest'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'

import Home from './home'

describe("App Test", () => {

    beforeEach(() => {
        render(<Home></Home>)
    });

    test("loads and renders", () => {
        expect(screen.getByText(/The Goerli Fundraising Demo/i)).toBeDefined()
    })
})