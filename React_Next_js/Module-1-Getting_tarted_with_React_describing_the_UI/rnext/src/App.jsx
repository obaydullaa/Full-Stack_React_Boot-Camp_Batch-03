import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

export default function app() {
    return (
        <div>
            <div>
                <Profile>
                    <Avatar />
                </Profile>
            </div>
        </div>
    );
}
