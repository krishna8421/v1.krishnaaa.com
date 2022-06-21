import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const ProjectTag = defineNestedType(() => ({
  name: "ProjectTag",
  fields: {
    name: { type: "string", required: true },
    url: { type: "string", required: false },
  },
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    github: {
      type: "string",
      required: true,
    },
    url: {
      type: "string",
      required: true,
    },
    featured: {
      type: "boolean",
      required: true,
    },
    tags: {
      type: "list",
      of: ProjectTag,
    },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (project) => `/${project._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (project) => {
        const pathArr = project._raw.flattenedPath.split("/");
        return pathArr[pathArr.length - 1];
      },
    },
  },
}));

const BlogTag = defineNestedType(() => ({
  name: "BlogTag",
  fields: {
    title: { type: "string", required: true },
  },
}));

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: BlogTag,
    },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (blog) => `/${blog._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (blog) => {
        const pathArr = blog._raw.flattenedPath.split("/");
        return pathArr[pathArr.length - 1];
      },
    },
    readingTime: {
      type: "string",
      resolve: (blog) => {
        const { text } = readingTime(blog.body.raw);
        return text;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "mdx",
  documentTypes: [Project, Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
