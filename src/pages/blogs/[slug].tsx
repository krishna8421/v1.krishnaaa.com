import { Main } from "@layouts/Main";
import { capitalizeFirstLetter } from "@utils/capitalize";
import { allBlogs, Blog } from "@contentlayer/generated";
import { Content } from "@components/Content";
import Tags from "@components/Tag";
import { NAME } from "@constants";
import Image from "next/image";
import Link from "next/link";

const Blogs = ({ blog }: { blog: Blog }) => {
  return (
    <Main
      title={`${capitalizeFirstLetter(blog.title)} | ${NAME}`}
      description={capitalizeFirstLetter(blog.summary)}
      image={blog.image}
      type="article"
    >
      <header className="mt-16 flex w-fit items-center justify-center gap-8">
        <span className="text-4xl font-extrabold md:text-4xl">{blog.title}</span>
      </header>
      <div className="my-4 flex items-center gap-2 text-xs font-bold text-gray-400">
        <Image
          src={blog.image}
          alt={blog.title}
          width={25}
          height={25}
          className="rounded-full object-cover"
        />
        <span>{NAME}</span>
        <span className="md:mx-2">&bull;</span>
        <span>{blog.publishedAt.replaceAll("-", "/")}</span>
        <span className="md:mx-2">&bull;</span>
        <span>{blog.readingTime}</span>
      </div>
      <div className="mb-8 sm:mt-0">
        {blog.tags.map((tag, index) => (
          <Link href={`/blogs?search=${tag as unknown as string}`} key={index}>
            <Tags name={tag} />
          </Link>
        ))}
      </div>
      <Image
        src={blog.image}
        alt={blog.title}
        width={1200}
        height={800}
        className="rounded-md object-cover"
      />
      <Content content={blog.body.code} />
    </Main>
  );
};

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((blog) => ({
      params: { slug: blog.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find((b) => b.slug === params.slug);
  return { props: { blog } };
}

export default Blogs;
