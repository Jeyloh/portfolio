export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "color",
      title: "Project Color",
      type: "color"
    },
    {
      name: "technologyString",
      title: "Technology",
      type: "text"
    },
    {
      name: "dateString",
      title: "Date",
      type: "date"
    }
  ]
};
