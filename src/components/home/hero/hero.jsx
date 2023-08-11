import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function HomeHero(block) {
    return (
        <section>
            {/* <h3
                className="my-5"
                dangerouslySetInnerHTML={{
                    __html: md.render(block.title),
                }}
            ></h3>
            <p
                dangerouslySetInnerHTML={{
                    __html: md.render(block.description)
                }}
            >
            </p> */}
        </section>
    );
}