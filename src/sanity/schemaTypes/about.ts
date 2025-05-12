const about = {
  name: "about",
  type: "document",
  title: "about",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tiltle",
    },
    {
      name: "image",
      type: "image",
      title: "About Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "skills",
      type: "array",
      title: "Skills",
      of: [{ type: "string" }],
    },
    {
      name: "experience",
      type: "array",
      title: "Experience",
      of: [{ type: "string" }],
    },
    {
      name: "education",
      type: "array",
      title: "Education",
      of: [{ type: "string" }],
    },
  ],
};
export default about;
