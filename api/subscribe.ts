import { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl || "", supabaseServiceRoleKey || "");

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { email } = request.body;

  if (!email || !email.trim()) {
    return response.status(400).json({ error: "Email is required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return response.status(400).json({ error: "Invalid email format" });
  }

  try {
    const { data, error } = await supabase
      .from("emails")
      .insert({ email: email.toLowerCase().trim() })
      .select();

    if (error) {
      if (error.code === "23505") {
        console.log(`Email already exists: ${email}`);
        return response.status(200).json({
          success: true,
          message: "Email already subscribed",
        });
      }

      console.error("Supabase insert error:", error);
      return response.status(500).json({ error: "Failed to subscribe" });
    }

    console.log(`New email added: ${email}`);

    return response.status(200).json({
      success: true,
      message: "Successfully subscribed",
      id: data?.[0]?.id,
    });
  } catch (err) {
    console.error("Server error:", err);
    return response.status(500).json({
      error: "Internal server error",
      message: err instanceof Error ? err.message : "Unknown error",
    });
  }
}
