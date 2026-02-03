/**
 * Vercel Serverless Function for iOS Waitlist
 * Handles form submissions and stores/notifies of new interested users.
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, device } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  try {
    // In a real production app, we would save this to a database (e.g., Supabase, Airtable, etc.)
    // For now, we'll simulate success and log the interest.
    // If you have EmailJS or similar configured, you can call it here.
    
    console.log(`New Waitlist Entry: ${email} for ${device || 'iOS'}`);

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully joined the waitlist!' 
    });
  } catch (error) {
    console.error('Waitlist Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
