export default function DynamicPage({ page }) {
    return (
        <div>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
        </div>
    );
}