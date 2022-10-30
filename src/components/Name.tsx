type name = {
    firstname: string;
    middlename: string;
    lastname: string;
}
export default function MyName(props:name){
    return(
        <div>
            <h1>{props.firstname} {props.middlename} {props.lastname}</h1>
        </div>
    )
}