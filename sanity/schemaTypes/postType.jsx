import { defineField, defineType } from "sanity";

export const postType = defineType({
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            validation: (Rule) => Rule.required(),
            options: {
                source: 'title',
                maxLength: 50,
                slugify: (input) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
            }
        },),
        defineField({
            name: "blogShortRead",
            type: "text",
            title: "Blog Short Read",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Blog Post Image",
            fields: [
                {
                    type: "text",
                    name: "alt",
                    title: "ALT",
                    validation: (Rule) => Rule.required(),
                }
            ],
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: "body",
            type: "array",
            title: "Content",
            of: [
                { type: "block" },
                {
                    type: "image",
                    fields: [{ type: "text", name: "alt", title: "ALT" }],
                },
            ],
        }),
    ],
});
