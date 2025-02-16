import { defineType, defineField } from "sanity";

const projects = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "githubLink",
      title: "GitHub Link",
      type: "url",
    }),
    defineField({
      name: "vercelLink",
      title: "Vercel Link",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "tag",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Add Tag",
      validation: (Rule) =>
        Rule.required().min(1).error("At least one tag is required"),
    }),
  ],
});

export default projects;
