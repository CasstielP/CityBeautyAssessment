import cbLogo from '../quizPages/Page1/city-beauty-logo.png'
import './notFound.css'

const NotFoundPage = () => {


    return (
        <>
        <div className="NF-wrapper">
            <div className="NF-container">
            <div className="logo-container-p1">
                        <img src={cbLogo} className="new-citbeauty-logo" />
                    </div>
            <div className='NF-title'>
                404 Page Not Found
            </div>
            </div>
        </div>

        </>
    )
}

export default NotFoundPage
