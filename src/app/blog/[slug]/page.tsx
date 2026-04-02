import { sanityFetch } from "@/sanity/lib/fetch";
import { POST_BY_SLUG_QUERY, BLOG_POSTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface PostPageProps {
  params: { slug: string };
}

// SEO Metadata Generation
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  
  const post = await sanityFetch<any>({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
    tags: ["post"],
    revalidate: 0,
  });



  if (!post) return { title: "Post Not Found | StudyCubs" };

  return {
    title: `${post.title} | StudyCubs Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImageUrl ? [post.mainImageUrl] : [],
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

const components = {
  marks: {
    highlight: ({children}: any) => (
      <span className="bg-[#FFBC36] bg-opacity-30 px-1 rounded-sm border-b-2 border-[#FFBC36]">
        {children}
      </span>
    ),
    underline: ({children}: any) => (
      <span className="underline decoration-[#0097B2] decoration-2 underline-offset-4">
        {children}
      </span>
    ),
    link: ({value, children}: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a 
          href={value?.href} 
          target={target} 
          rel={target === '_blank' ? 'noindex nofollow' : undefined}
          className="text-[#FE543D] font-bold hover:underline"
        >
          {children}
        </a>
      )
    },
  },
  block: {
    blockquote: ({children}: any) => (
      <blockquote className="border-l-8 border-[#FFBC36] bg-orange-50 p-8 my-10 rounded-r-3xl italic text-2xl font-serif text-[#17254E]">
        &quot;{children}&quot;
      </blockquote>
    ),
    h2: ({children}: any) => (
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#17254E] mt-16 mb-6 tracking-tight">
        {children}
      </h2>
    ),
  },
  types: {
    image: ({value}: any) => (
      <figure className="my-12 group">
        <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] shadow-lg border-4 border-white group-hover:shadow-2xl transition-all duration-500">
           {value.asset?._ref && (
             <Image 
               src={client.imageUrl(value).url()} 
               alt={value.alt || "Post image"} 
               fill 
               className="object-cover"
             />
           )}
        </div>
        {value.caption && (
          <figcaption className="mt-4 text-center text-gray-500 italic text-sm font-medium">
            — {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  }
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  
  const post = await sanityFetch<any>({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
    tags: ["post"],
    revalidate: 0,
  });



  if (!post) {
    notFound();
  }

  // Fetch recent posts (excluding current)
  const allPosts = await sanityFetch<any[]>({
    query: BLOG_POSTS_QUERY,
    tags: ["post"],
    revalidate: 0,
  });
  
  const recentPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <article className="min-h-screen bg-[#FAFAFA] pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-28">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[#FE543D] mb-12 hover:translate-x-[-4px] transition-all text-sm font-bold uppercase tracking-widest"
          >
            ← Back to Blog
          </Link>
          
          <header className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              {post.categories?.map((cat: string) => (
                <span key={cat} className="bg-[#FE543D] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                  {cat}
                </span>
              ))}
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-none">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-[#17254E] leading-[1.1] mb-12 tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 mb-12">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFBC36] shadow-md">
                {post.author?.imageUrl ? (
                  <Image src={post.author.imageUrl} alt={post.author.name} fill className="object-cover" />
                ) : (
                  <div className="bg-[#17254E] w-full h-full flex items-center justify-center text-white font-bold">SC</div>
                )}
              </div>
              <div>
                <p className="font-black text-[#17254E] text-lg leading-tight uppercase tracking-tight">{post.author?.name || "StudyCubs Team"}</p>
                <p className="text-gray-400 text-xs font-bold mt-1 uppercase tracking-widest">Storyteller & Educator</p>
              </div>
            </div>
          </header>
        </div>

        {post.mainImageUrl && (
          <div className="relative w-full h-[400px] md:h-[650px] rounded-[3rem] overflow-hidden mb-24 shadow-2xl border-8 border-white">
            <Image
              src={post.mainImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="max-w-3xl mx-auto blog-content">
          <div className="prose prose-xl prose-slate max-w-none">
            <PortableText 
              value={post.body} 
              components={components}
            />
          </div>
          
          <div className="mt-32 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-black text-[#17254E] mb-12 uppercase tracking-tight flex items-center gap-4">
              More to read
              <div className="h-1 flex-1 bg-gray-100 rounded-full"></div>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((rPost) => (
                <Link key={rPost._id} href={`/blog/${rPost.slug}`} className="group">
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 border border-gray-100 shadow-sm">
                    {rPost.mainImageUrl && <Image src={rPost.mainImageUrl} alt={rPost.title} fill className="object-cover group-hover:scale-110 transition-all duration-500" />}
                  </div>
                  <h4 className="font-bold text-[#17254E] text-sm group-hover:text-[#FE543D] transition-colors line-clamp-2 leading-relaxed">
                    {rPost.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

