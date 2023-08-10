import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalError(block) {
    return (
        <section className="py-xxl-12 py-lg-9 py-10 py-sm-6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="error-content text-center">
                            <h1 className="counter">404</h1>
                            <h3
                                className="my-5"
                                dangerouslySetInnerHTML={{
                                    __html: md.render(block.description),
                                }}
                            ></h3>
                            <a href="/" className="btn btn-lg btn-primary">
                                Try again
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}