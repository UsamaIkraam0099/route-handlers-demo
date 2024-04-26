import { type NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headersList = headers();

  cookies().set("requestPerPage", "20");
  const theme = request.cookies.get("theme");

  console.log({ theme });
  console.log({ requestPerPage: cookies().get("requestPerPage") });
  console.log(requestHeaders.get("Authorization"));
  console.log(headersList.get("Authorization"));

  return new Response("<h1>Profile API Data</h1>", {
    headers: { "Content-TYpe": "text/html", "Set-Cookie": "theme=light" },
  });
}
