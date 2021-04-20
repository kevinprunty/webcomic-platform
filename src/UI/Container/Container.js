import './Container.css';

function Container({ children, title }) {
    return (
        <div className="container">
            <h2>{title}</h2>
            { children }
        </div>
    )
}

export default Container
