/** @param {import("@11ty/eleventy").UserConfig} conf */
export default async function(conf) {
    conf.addPassthroughCopy({"./public/": "/"})
}

export const config = {
    dir: {
        input: "content",
        includes: "../_includes",
        data: "../data"
    },
};