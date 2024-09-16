import {useAxiosLoader} from "../../../../core/http";
import {ReactComponent as IconLoading} from "src/assets/images/icon/sprinner.svg";


export const LoadingComponent = () => {
    const [active] = useAxiosLoader()

    return (
        <div className={`loading ${active ? 'active' : ''}`}>
            <IconLoading />
        </div>
    );
}