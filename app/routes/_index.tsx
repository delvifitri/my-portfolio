// import Profile from "~/components/Template/Profile";
// import Me from "/me.png";

// import React from "react";
// import { Link, useLoaderData } from "@remix-run/react";
// import type { LoaderFunctionArgs} from "@remix-run/node";
// import { json } from "@remix-run/node";
// import { gql } from "graphql-request";
// import { hygraph } from "~/utils/hygraph.server";
// import type { Post } from "~/utils/interface";

// interface AppProps {
//   posts: Post;
// }

// export async function loader({}: LoaderFunctionArgs) {
//   const query = gql`
//     query Posts {
//       posts {
//         createdAt
//         id
//         overview
//         slug
//         title
//         updatedAt
//       }
//     }
//   `;
//   const posts = await hygraph.request(query);
//   return json({ posts });
// }

// export default function Index() {
//   const { posts } = useLoaderData() as AppProps;
//   return (
//     <div>
//       <Profile
//         imageSrc={Me}
//         name="Delvi Fitri Assary"
//         description="Developer with a passion for crafting smart software solutions"
//         width={128} // replace with actual image width
//         height={128} 
//       />
//       <h1 className="tracking-tighter font-bold dark:text-slate-300 text-slate-800 text-3xl md:text-4xl mx-auto m-6">
//         My Recent Posts
//       </h1>
//       <ul className="flex flex-col gap-4">
//         {posts.posts.slice(0, 3).map((post) => (
//           <li key={post.id}>
//             <article className="p-4 rounded-ld space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 hover:bg-zinc-200 dark:hover:bg-zinc-800">
//               {/* This div will contain the date, which we want to stack on top on small screens */}
//               <div className="xl:col-span-1">
//                 <p className="text-base font-medium leading-6 dark:text-zinc-300 text-zinc-700">
//                   {new Date(post.createdAt).toISOString().split("T")[0]}
//                 </p>
//               </div>
//               {/* The link and post content will follow */}
//               <Link
//                 to={`/post/${post.slug}`}
//                 prefetch="intent"
//                 className="xl:col-span-3" // This will ensure the link takes up the remaining space on larger screens
//               >
//                 <h2 className="text-xl font-bold leading-6 tracking-tight mb-2 dark:text-slate-500">
//                   {post.title}
//                 </h2>
//                 <div className="prose max-w-none dark:text-slate-300">
//                   {post.overview}
//                 </div>
//               </Link>
//             </article>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import Profile from "~/components/Template/Profile";
import Me from "/me.png";

import React from "react";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { gql } from "graphql-request";
import { hygraph } from "~/utils/hygraph.server";
import type { Post } from "~/utils/interface";

interface AppProps {
  posts: Post;
}

export async function loader({}: LoaderFunctionArgs) {
  const query = gql`
    query Posts {
      posts {
        createdAt
        id
        overview
        slug
        title
        updatedAt
      }
    }
  `;
  const posts = await hygraph.request(query);
  return json({ posts });
}

export default function Index() {
  const { posts } = useLoaderData() as AppProps;
  return (
    <div>
      <Profile
        imageSrc={Me}
        name="Delvi Fitri Assary"
        description="Developer with a passion for crafting smart software solutions"
        width={128} // replace with actual image width
        height={128}
      />

      {/* Highlight Section: Skills, Experience, Certifications */}
      <div className="highlight-section p-6 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-slate-800">Key Skills</h2>
        <ul className="list-disc ml-6 text-slate-700">
          <li>PHP, Python, JavaScript, Flask, MikroTik</li>
          <li>Leadership, Time Management, Effective Communication</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mt-4">Experience</h2>
        <p className="text-slate-700">IT Operations Intern at PT Surya Citra Media</p>
        <p className="text-slate-700">Head of Public Relations at Himpunan Mahasiswa Informatika</p>

        <h2 className="text-2xl font-bold text-slate-800 mt-4">Certifications</h2>
        <ul className="list-disc ml-6 text-slate-700">
          <li>Data Science with Python - Sinau Jogja</li>
          <li>MikroTik Certified Network Associate</li>
        </ul>
        
        {/* Download Resume Button */}
        <div className="mt-6">
          <a href="/path-to-resume.pdf" download>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600">
              Download Full Resume
            </button>
          </a>
        </div>
      </div>

      {/* Posts Section */}
      <h1 className="tracking-tighter font-bold dark:text-slate-300 text-slate-800 text-3xl md:text-4xl mx-auto m-6">
        My Recent Posts
      </h1>
      <ul className="flex flex-col gap-4">
        {posts.posts.slice(0, 3).map((post) => (
          <li key={post.id}>
            <article className="p-4 rounded-ld space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 hover:bg-zinc-200 dark:hover:bg-zinc-800">
              {/* This div will contain the date, which we want to stack on top on small screens */}
              <div className="xl:col-span-1">
                <p className="text-base font-medium leading-6 dark:text-zinc-300 text-zinc-700">
                  {new Date(post.createdAt).toISOString().split("T")[0]}
                </p>
              </div>
              {/* The link and post content will follow */}
              <Link
                to={`/post/${post.slug}`}
                prefetch="intent"
                className="xl:col-span-3" // This will ensure the link takes up the remaining space on larger screens
              >
                <h2 className="text-xl font-bold leading-6 tracking-tight mb-2 dark:text-slate-500">
                  {post.title}
                </h2>
                <div className="prose max-w-none dark:text-slate-300">
                  {post.overview}
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}