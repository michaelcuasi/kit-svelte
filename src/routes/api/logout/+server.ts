import { json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = ({cookies}) => {
  cookies.delete('token', {path: '/'})
  return json({success: true})
} 