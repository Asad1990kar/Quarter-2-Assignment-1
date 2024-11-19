
export default async function Intro(){
    await new Promise ((resolve) => {
        setTimeout(resolve, 5000);
    });
    
    return(
        <div className="text-4xl text-justify mx-5 text-blue-600 font-sans">
            <br/>
            Name : Asad
            <br/>
            Surname : Nadeem
            <br/>
            Age : 34
            <br/>
            Gender : Male

        </div>
    )
}