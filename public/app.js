// ZeroToken Checkout functionality
document.addEventListener('DOMContentLoaded', function() {
    const SUPABASE_FN = 'https://ppvergvfxththbwtjsmu.supabase.co/functions/v1/stripe_create_checkout';
    
    // Handle Pro checkout
    const proBtn = document.getElementById('proCheckoutBtn');
    if (proBtn) {
        proBtn.addEventListener('click', async function() {
            await handleCheckout('pro_monthly_usd_999', this);
        });
    }
    
    // Handle Lite checkout  
    const liteBtn = document.getElementById('liteCheckoutBtn');
    if (liteBtn) {
        liteBtn.addEventListener('click', async function() {
            await handleCheckout('payg_1_usd_net299', this);
        });
    }
    
    async function handleCheckout(sku, button) {
        const originalText = button.textContent;
        const errorSpan = button.parentNode.querySelector('.checkout-error') || createErrorSpan(button);
        
        // Clear previous errors
        errorSpan.textContent = '';
        errorSpan.style.display = 'none';
        
        // Show loading state
        button.disabled = true;
        button.textContent = 'Loading...';
        
        try {
            const response = await fetch(SUPABASE_FN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sku: sku,
                    userId: 'USER_UUID',
                    email: 'user@example.com'
                })
            });
            
            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }
            
            const data = await response.json();
            
            if (data.url) {
                // Redirect to Stripe checkout
                window.location.href = data.url;
            } else {
                throw new Error('No checkout URL received');
            }
            
        } catch (error) {
            console.error('Checkout error:', error);
            errorSpan.textContent = 'Failed to start checkout. Please try again.';
            errorSpan.style.display = 'block';
        } finally {
            // Reset button state
            button.disabled = false;
            button.textContent = originalText;
        }
    }
    
    function createErrorSpan(button) {
        const errorSpan = document.createElement('span');
        errorSpan.className = 'checkout-error';
        errorSpan.style.cssText = 'display: none; color: #ef4444; font-size: 0.875rem; margin-top: 0.5rem;';
        button.parentNode.appendChild(errorSpan);
        return errorSpan;
    }
});