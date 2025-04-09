import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import { visit } from "unist-util-visit";
import rehypeClassNames from "rehype-class-names";

export default class Markdown {
    private constructor(private content: string) {}

    private static stylesConfig = {
        "h2": "text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-gray-300 pb-2",
        "h3": "text-2xl font-semibold text-gray-800 mt-10 mb-4",
        "h4": "text-xl font-medium text-gray-700 mt-8 mb-3",
        "p": "text-gray-700 leading-relaxed text-md mt-4 mb-6",
        "ul": "list-disc pl-8 mt-4 mb-6 space-y-2",
        "ol": "list-decimal pl-8 mt-4 mb-6 space-y-2",
        "li": "text-gray-800 text-lg",
        "blockquote": "border-l-4 border-blue-500 pl-6 italic text-gray-600 bg-gray-100 rounded-lg py-3 px-5 mt-8 mb-8",
        "img": "my-8 rounded-xl shadow-lg mx-auto",
        "pre": "bg-gray-900 text-white text-sm p-5 rounded-lg overflow-x-auto mt-8 mb-8",
        "code": "bg-gray-200 text-red-600 px-2 py-1 rounded-md text-sm",
        "hr": "border-t border-gray-300 my-12",
        "table": "w-full border-collapse border border-gray-300 my-8 shadow-sm",
        "th": "border border-gray-300 bg-gray-100 p-4 text-left text-gray-700 font-semibold",
        "td": "border border-gray-300 p-4 text-gray-800"
    };

    static from(content: string): Markdown {
        return new Markdown(content);
    }

    async toHTML(): Promise<string> {
        const matterResult = await remark()
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeRaw)
            .use(() => tree => visit(tree, "element", this.setupElements))
            .use(rehypeClassNames, Markdown.stylesConfig)
            .use(rehypeStringify)
            .process(this.content);
        return matterResult.toString();
    }

    private setupElements(node: any) {
        if (node.tagName?.match(/^h[1-5]$/)) {
            const currentLevel = parseInt(node.tagName[1], 10);
            node.tagName = `h${Math.min(currentLevel + 1, 6)}`;
        }
    }
}
