export const runtime = 'edge';

export default function Page({params}: {params: { slug: string }}) {
  const { slug } = params

  return <div>My Post: {slug}</div>
}