import Manu from "../img/manu.png"
const Bio = () => {
    return (
        <div className="bio">
            <div className="inner">
                <img src={Manu} alt="manu-img" />
            </div>
            <div className="about-me">
                <b className="hello">Hello</b> <br/>
                I am <b className="my-name">Emmanuel Erogo Esibitar</b>, a{" "}
                <b className="my-name">Sofwtare Engineer</b> with a 3+ years of
                experince in designing,implementing and testing  software applications. My expertise lies in developing scalable backend and high perfomance applications using modern framework such like Django and Node.js as well as 
                frontend technologies like React. I am committed to creating innovative solutions 
                that meets or exceed client expectations and to deliver a measurable business solution.
            </div>
        </div>
    );
};

export default Bio;