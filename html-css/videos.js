const Videos = () => {
    const vidMap = vidArr.map(v => (
        <div class='flex-child' key={v}>
            <video
                width={600}
                height={400}
                src={v}
                controls={true}
            />
        </div>
    ))
    console.log(vidMap)
    return (
        <div class='container'>
            {vidMap}
        </div>
    )
}