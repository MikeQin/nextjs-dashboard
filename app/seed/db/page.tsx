import { sql } from "@vercel/postgres";

// export default async function Users({
//   params
// } : {
//   params: { user: string }
// }): Promise<JSX.Element> {
//   const { rows } = await sql`SELECT * from users where id=${params.user}`;

//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.id} - {row.name}, {row.email}
//         </div>
//       ))}
//     </div>
//   );
// }

export default function Page() {
  return (<p>DB page</p>);
}