import { getToken } from 'next-auth/jwt';

export async function POST(req) {
  const body = await req.json();
  const { accessToken } = (await getToken({ req })) || {};

  const res = await fetch(process.env.BACKEND_URL + '/blogs', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error();
  const data = await res.json();
  return Response.json({ ...data });
}
