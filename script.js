document.addEventListener("DOMContentLoaded", function () {
    const communityItem = document.querySelector(".nav-item.dropdown");

    if (communityItem) {
        communityItem.addEventListener("mouseenter", function () {
            this.querySelector(".dropdown-menu").classList.add("show");
        });

        communityItem.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").classList.remove("show");
        });
    }
});

function directToUniswap (){
    const tokenAddress = "0x82a7e44b8df7ee6f9a6d291602f2a18cb1cc0605";
    //const ethAddress = "ETH_ADDRESS";
 const uniswapSwapURL = `https://app.uniswap.org/swap?outputCurrency=${tokenAddress}&inputCurrency=ETH`;

    window.open(uniswapSwapURL,"_blank");
}

async function toggleWalletConnection() {
    try {
        // Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            // If connected, disconnect; otherwise, request user's permission to connect
            if (window.ethereum.selectedAddress) {
                await window.ethereum.request({ method: 'wallet_requestPermissions' });
                console.log('Disconnected from wallet.');
            } else {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log('Connected to wallet successfully!');
            }

            // Update navigation item based on connection status
            updateNavItemText();
        } else {
            console.error('MetaMask not found. Please install it.');
        }
    } catch (error) {
        console.error('Error toggling wallet connection:', error);
    }
}

function updateNavItemText() {
    // Get the navigation item element
    const walletNavItem = document.getElementById('walletNavItem');

    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        // Update navigation item text based on connection status
        walletNavItem.querySelector('a').textContent = window.ethereum.selectedAddress ? 'Disconnect' : 'Connect to Wallet';
    }
}

// copytng ca to clickboard

        function copyToClipboard(value) {
            // Create a temporary textarea element
            var textarea = document.createElement("textarea");
            textarea.value = value;

            // Append the textarea to the document
            document.body.appendChild(textarea);

            // Select the text in the textarea
            textarea.select();
            textarea.setSelectionRange(0, 99999); // For mobile devices

            // Copy the selected text to the clipboard
            document.execCommand("copy");

            // Remove the textarea from the document
            document.body.removeChild(textarea);

            // You can provide feedback to the user here (e.g., show a tooltip)
            alert("Copied to clipboard: " + value);
        }
