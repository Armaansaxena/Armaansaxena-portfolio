/**
 * ============================================================================
 * SEND CONTACT EMAIL - Edge Function
 * ============================================================================
 * 
 * TODO: CONFIGURATION NEEDED
 * --------------------------
 * 1. Create a Resend account at https://resend.com
 * 2. Verify your domain at https://resend.com/domains
 * 3. Create an API key at https://resend.com/api-keys
 * 4. Add the RESEND_API_KEY secret in your Lovable project:
 *    - Go to your project settings
 *    - Add a new secret named RESEND_API_KEY
 *    - Paste your Resend API key as the value
 * 5. Update the "from" email and "to" email addresses below
 * 
 * NOTES:
 * - If using Resend's free tier, you can only send to your verified email
 * - For production, verify your own domain to send from your custom email
 * - The "from" address must be from a verified domain or use onboarding@resend.dev
 * ============================================================================
 */

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check if RESEND_API_KEY is configured
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ 
          error: "Email service not configured. Please add RESEND_API_KEY secret." 
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, message }: ContactEmailRequest = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // TODO: Update these email addresses
    // - "from": Must be a verified domain or use onboarding@resend.dev for testing
    // - "to": Your email address where you want to receive contact messages
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["your-email@example.com"], // TODO: Replace with your email
        reply_to: email,
        subject: `New Contact from ${name}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
              New Contact Form Submission
            </h1>
            
            <div style="margin: 20px 0; padding: 20px; background: #f8f9fa; border-radius: 8px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            </div>
            
            <div style="margin: 20px 0;">
              <h2 style="color: #374151; font-size: 16px;">Message:</h2>
              <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            <p style="color: #9ca3af; font-size: 12px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        `,
      }),
    });

    const responseData = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error("Resend API error:", responseData);
      throw new Error(responseData.message || "Failed to send email");
    }

    console.log("Email sent successfully:", responseData);

    return new Response(JSON.stringify({ success: true, data: responseData }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
