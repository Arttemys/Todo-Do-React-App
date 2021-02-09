import React, { Fragment } from 'react'

const Checkbox = props => {
    const { 
        onChange, 
        data: {
            id, description, done
        }
    } = props;


    return (
        <Fragment>

            <svg viewBox="0 0 0 0" 
            style={{ position: "absolute", zIndex: -1, opacity: 0 }}
            >
                <defs>
                    <linearGradient id="boxGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="25" y2="25">
                    <stop offset="0%"   stop-color="#27FDC7"/>
                    <stop offset="100%" stop-color="#0FC0F5"/>
                    </linearGradient>

                    <linearGradient id="lineGradient">
                    <stop offset="0%"    stop-color="#0FC0F5"/>
                    <stop offset="100%"  stop-color="#27FDC7"/>
                    </linearGradient>

                    <path id="todo__line" stroke="url(#lineGradient)" d="M21 12.3h168v0.1z"></path>
                    <path id="todo__box" stroke="url(#boxGradient)" d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"></path>
                    <path id="todo__check" stroke="url(#boxGradient)" d="M10 13l2 2 5-5"></path>
                    <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>
                </defs>
            </svg>

            <label className="todo new-item">
                <input type="checkbox"
                    className="todo__state"
                    name={id}
                    defaultChecked={done}
                    onChange={onChange}/>
                
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 200 25" 
                    class="todo__icon"
                    >
                        <use xlinkHref="#todo__line" class="todo__line"></use>
                        <use xlinkHref="#todo__box" class="todo__box"></use>
                        <use xlinkHref="#todo__check" class="todo__check"></use>
                        <use xlinkHref="#todo__circle" class="todo__circle"></use>
                    </svg>
                <div className="todo__text">{description}</div>
            </label>
        </Fragment>
    )
}

export default Checkbox
