import './Bowl.css'


const Bowl = ({ title }) => {
    return (
        <section className='bowl__wrapper'>
            <div className="bowl__shadow"></div>
            <div className="bowl">
                <div className="fluid">

                </div>
            </div>
            <div className='bowl__text'>{title}</div>
        </section>
    );
};

export default Bowl;