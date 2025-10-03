interface BlogProps {
  blog: {
    title: string;
    content: string;
    excerpt: string;
    categories: string[];
    tags: string[];
    meta: {
      seo_title: string;
      seo_description: string;
      focus_keyword: string;
      keywords: string[];
    };
    custom_fields: {
      reading_time: string;
      rating: number;
    };
    featured_media: string;
    author?: string;
    datePublished?: string;
  };
}

export default function BlogPage({ blog }: BlogProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {blog.featured_media && (
        <img
          src={blog.featured_media}
          alt={blog.title}
          className="rounded-2xl shadow-lg w-full object-cover mb-8"
        />
      )}

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
        <span>By {blog.author ?? "Shawarma Moose Team"}</span>
        <span>•</span>
        <span>{blog.datePublished ?? "October 3, 2025"}</span>
        <span>•</span>
        <span>{blog.custom_fields.reading_time} read</span>
        <span>•</span>
        <span>⭐ {blog.custom_fields.rating}/10</span>
      </div>

      <p className="text-lg text-gray-700 italic mb-6">{blog.excerpt}</p>

      <article
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-li:marker:text-gray-500"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <div className="mt-10 border-t pt-6 text-sm text-gray-500">
        <p>
          <strong>SEO Title:</strong> {blog.meta.seo_title}
        </p>
        <p>
          <strong>SEO Description:</strong> {blog.meta.seo_description}
        </p>
        <p className="capitalize">
          <strong>Focus Keyword:</strong> {blog.meta.focus_keyword}
        </p>
        <strong>Keywords: </strong>
        {blog.meta.keywords.map((data) => {
          return <span className="capitalize">{data},</span>;
        })}
        <p>
          <strong>Categories</strong>:
          {blog.categories.map((data) => {
            return <span className="capitalize">{data},</span>;
          })}
        </p>

        <p>
          <strong>Tags</strong>:
          {blog.tags.map((data) => {
            return <span className="capitalize">{data},</span>;
          })}
        </p>
      </div>
    </div>
  );
}
