import './title.css'

const Title = ({subTitle, Title})=>{
    return(
        <div className="title">
            <p>{subTitle}</p>
            <h2>{Title}</h2>
        </div>
    )
}
export default Title;