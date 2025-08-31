// Stripe integration utility
export const upgradeToProStripe = async (): Promise<string> => {
  try {
    const response = await fetch('https://ppvergvfxththbwtjsmu.supabase.co/functions/v1/stripe_create_checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: generateUserId(),
        email: generateUserEmail()
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Stripe checkout error:', error);
    throw new Error('Upgrade failed — please try again.');
  }
};

// Generate a temporary user ID for demo purposes  
const generateUserId = (): string => {
  return 'demo-' + Math.random().toString(36).substr(2, 9);
};

// Generate a temporary user email for demo purposes
const generateUserEmail = (): string => {
  return `demo-${Math.random().toString(36).substr(2, 5)}@example.com`;
};