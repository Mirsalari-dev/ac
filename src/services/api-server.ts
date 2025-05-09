import { API_URL } from "@/constant/api-url.data";
import { cookies } from "next/headers";
import querystring from "querystring";

export default async function apiServer(
  endpoint: string,
  params?: any,
  requireToken: boolean = true
) {
  const cookieStore = cookies();
  const token = requireToken ? (await cookieStore).get("TOKEN") : null;

  let url = API_URL + endpoint;
  if (params) url = url + "?" + querystring.stringify(params);

  const headers: HeadersInit = {};
  if (token?.value) {
    headers.Authorization = `Bearer ${token.value}`;
  }

  try {
    const res = await fetch(url, {
      headers,
      // Add cache: 'no-store' to ensure fresh data
      cache: "no-store",
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`API error (${res.status}): ${errorText}`);
    }

    return res.json();
  } catch (error) {
    console.error(`API request failed for ${url}:`, error);
    // Re-throw the error but with more context
    throw error;
  }
}
