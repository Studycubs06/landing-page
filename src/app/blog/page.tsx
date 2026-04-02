import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog & Insights | StudyCubs",
  description: "Explore the latest stories, education tips, and insights from the StudyCubs team on child development and public speaking.",
};

export default async function BlogPage() {
  const posts = await sanityFetch<any[]>({
    query: BLOG_POSTS_QUERY,
    tags: ["post"],
    revalidate: 0,
  });


  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-28">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[#FFBC36] font-semibold mb-2 tracking-widest uppercase text-sm">Our Blog</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-[#17254E]">Latest Stories & Insights</h1>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Discover the latest trends in education, public speaking, and child development from our expert educators.
          </p>
        </div>

        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link 
                key={post._id} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  {post.mainImageUrl ? (
                    <Image
                      src={post.mainImageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                  {post.categories?.[0] && (
                    <div className="absolute top-4 left-4 bg-[#FE543D] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {post.categories[0]}
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.author?.name || "StudyCubs Team"}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#17254E] mb-3 group-hover:text-[#FE543D] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-[#FE543D] font-bold text-sm group-hover:gap-2 transition-all">
                    Read More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <h3 className="text-xl font-bold text-[#17254E] mb-2">No posts found</h3>
            <p className="text-gray-600">Check back soon for our first blog stories!</p>
            <Link 
              href="/admin" 
              className="mt-6 inline-block bg-[#17254E] text-white px-8 py-3 rounded-full font-bold hover:bg-[#253a7a] transition-all"
            >
              Go to Studio to publish
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
