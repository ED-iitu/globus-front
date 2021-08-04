import React from 'react'
import API from "../utils/api";


export default function Contacts() {
    const [contacts, setData] = React.useState([]);

    React.useEffect(() => {
        API.get(`/contact/info`)
            .then(res => {
                setData(res.data?.info)
            })
    }, []);
    return (
        <div className="contacts">
         
                
           
            <div className="contacts-wrapper">
                <div className="contacts-form">
                
                    <h2 className="contacts-heading">Привет, свяжитесь с нами!</h2>
                    <p className="contacts-subheading">Либо заполните форму заявки и мы позвоним Вам.</p>
                    <div className="contacts-info">
                        <p class="nobr">Казахстан, г. Алматы, <br />{contacts.address}</p>
                        <p>{contacts.work_time}<br /> {contacts.phone}</p>
                    </div>
                    <form className="form-contacts">
                        <input type="text" placeholder="Ваше имя"/> <br />
                        <input type="text" placeholder="Номер телефона"/> <br />
                        <textarea placeholder="Ваше сообщение"></textarea> <br />
                        <button  className="submit-btn">Отправить</button>
                        {/* <div className="tenants-bg"></div> */}
                    </form>
                </div>
            </div>
           
        </div>
    )
}
