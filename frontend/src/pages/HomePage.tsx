import CityList from "../features/cities/CityList.tsx";
import {useNavigate} from "react-router";

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <CityList/>
        </>
    )
}