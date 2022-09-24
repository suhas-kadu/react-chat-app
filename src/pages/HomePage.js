// built-in imports

// user defined imports
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';

// third party imports

const HomePage = () => {
    return (
        <div className='home'>
            <div className='container'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default HomePage;