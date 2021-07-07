import React from 'react'

export default function Contacts() {
    return (
        <div className="contacts">
            <div className="contacts-wrapper">
                <div className="contacts-form">
                    <h2 className="contacts-heading">Привет, свяжитесь с нами!</h2>
                    <p className="contacts-subheading">Либо заполните форму заявки и мы позвоним Вам.</p>
                    <div className="contacts-info">
                        <p>Казахстан, Алматы, пр. <br /> Абая, 108 В</p>
                        <p>10:00 - 22:00 <br /> +7 775 221 3455</p>
                    </div>
                    <form className="form">
                        <input type="text" placeholder="Ваше имя"/> <br />
                        <input type="text" placeholder="Номер телефона"/> <br />
                        <button className="submit-btn">Отправить</button>
                        {/* <div className="tenants-bg"></div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}
