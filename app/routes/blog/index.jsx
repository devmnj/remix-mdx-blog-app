import React from 'react'
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import * as firstPost from "../blog/first-post.mdx"
import * as secondPost from "../blog/second-post.mdx"
function postFromModule(mod) {
    return {
      slug: mod.filename.replace(/\.mdx?$/, ""),
      ...mod.attributes.meta,
    
    };
  }

  export async function loader() {
    // Return metadata about each of the posts for display on the index page.
    // Referencing the posts here instead of in the Index component down below
    // lets us avoid bundling the actual posts themselves in the bundle for the
    // index page.
    return json([
      postFromModule(firstPost),
      postFromModule(secondPost),
    ]);
  }
  
  export default function Index() {
    const posts = useLoaderData ();
  
    return (
    <div> 
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
            {post.description ? (
            <p>{post.description}</p>
          ) : null}
          </li>
        ))}
      </ul></div>
    );
  }