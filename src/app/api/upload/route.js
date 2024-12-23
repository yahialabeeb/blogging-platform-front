import { getToken } from 'next-auth/jwt';

export async function POST(req) {
  const body = await req.formData();
  const { accessToken } = (await getToken({ req })) || {};

  const res = await fetch(process.env.BACKEND_URL + '/upload', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
    duplex: 'half',
    body: body,
  });
  if (!res.ok) throw new Error(res.statusText);

  const data = await res.json();
  return Response.json({ ...data });
}
