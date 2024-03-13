import "./intro.scss"
export default function introBar(){
    return (
        <div className="introBar">
            <nav className="introBarNav">
                <ul className="introBarUl">
                    <li className="introBarLi">Activities</li>
                    <li className="introBarLi">Event</li>
                    <li className="introBarLi">Calofic News</li>
                    <li className="introBarLi">Memo</li>
                    <li className="introBarLi">FAQs</li>
                </ul>
            </nav>
        </div>
    )
}