export default {
  name: "venue",
  title: "Venue",
  type: "document",
  description: "A venue",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        { name: "address1", type: "string", title: "Address 1" },
        { name: "address2", type: "string", title: "Address 2" },
        { name: "city", type: "string", title: "City" },
        { name: "region", type: "string", title: "Region" },
        { name: "postalCode", type: "string", title: "Postal code" },
      ],
    },
    {
      name: "coordinates",
      title: "Coordinates",
      type: "geopoint",
      description:
        "This can be used to display the location of the venue when using a mapping service",
    },
  ],
  preview: {
    select: {
      title: "name",
      address: "address",
    },
    prepare(selection) {
      const { title, address } = selection;

      const formattedAddress = Object.keys(address)
        .map((key) => address[key])
        .filter((e) => e.trim().length > 0)
        .join(", ");

      return {
        title: title,
        subtitle: formattedAddress,
      };
    },
  },
};