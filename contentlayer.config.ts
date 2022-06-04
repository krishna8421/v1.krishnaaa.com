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

export default makeSource({
  contentDirPath: "mdx",
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
