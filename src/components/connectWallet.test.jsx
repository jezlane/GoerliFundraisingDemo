import {beforeEach, describe, expect, test} from 'vitest'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'

import ConnectWallet from './connectWallet'

describe("App Test", () => {

    beforeEach(() => {
        render(<ConnectWallet></ConnectWallet>)
    });

    test("loads and renders", () => {
        
        expect(screen.getByText(/Connect/i)).toBeDefined()
    })

    test("click on connect wallet",async () => {

        const walletButton = screen.getByText(/Connect your Wallet/i);
        fireEvent.click(walletButton)

        expect(await screen.findByText(/Connect/i)).toBeDefined()
    })
})