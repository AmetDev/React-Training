export function NameAndPhoto() {
    return (
    <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
    />
    )
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
                <NameAndPhoto />
                <NameAndPhoto />
                <NameAndPhoto />
        </section>
    )
}
