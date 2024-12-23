import { getToken } from 'next-auth/jwt';

export async function PATCH(req, { params }) {
  const { id } = await params;
  const { accessToken } = await getToken({ req });
  const body = JSON.stringify(await req.json());

  const res = await fetch(process.env.BACKEND_URL + `/blogs/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
    body,
  });
  console.log(body);

  if (!res.ok) throw new Error(res.statusText);
  const data = await res.json();
  return Response.json({ ...data });
}
