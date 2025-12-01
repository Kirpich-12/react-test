function List({zn}) {
    const res = zn.map((element) => {
        return <p> zadach: {element}</p>
    })
}

export default List