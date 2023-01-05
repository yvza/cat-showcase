export default function Content(props){
    return props.catData.map((item, index) => (
        <section key={index}>
            <h1>{item.name}</h1>
        </section>
    ))
}