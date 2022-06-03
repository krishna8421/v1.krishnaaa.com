import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";

const ProjectTag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    name: { type: "string", required: true },
    url: { type: "string", required: false },
  },
}));

export const Project = defineDocumentType(() => ({
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
    slug: {
      type: "string",
      resolve: (project) => `/${project._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "mdx",
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
