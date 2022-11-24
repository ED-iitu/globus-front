import React from 'react'
import API from "../utils/api";
import Icon from "../assets/mail.svg"

export default function Contacts(props) {
    const [contacts, setData] = React.useState([]);
    const [currentLang,setLang]=React.useState(props.lang)
     if(props.lang!=currentLang)
     {
         setLang(props.lang)
         API.get(`/contact/info?lang=${props.lang}`)
         .then(res => {
             setData(res.data?.info)
         })
         
     }
    React.useEffect(() => {
        API.get(`/contact/info?lang=${currentLang}`)
            .then(res => {
                setData(res.data?.info)
            })
    }, []);
    return (
        <div className="contacts">
         
                
           
            <div className="contacts-wrapper">
            {props.lang==="ru"&&  <div className="contacts-form">
                
                    <h2 className="contacts-heading">Привет, свяжитесь с нами!</h2>
                    <p className="contacts-subheading">Либо заполните форму заявки и мы позвоним Вам.</p>
                    <div className="contacts-info">
                        <p>
                        <p className="nobr">Казахстан, г. Алматы, <br />{contacts.address}</p>
                        <p>f.nurmakhanova@kdi.kz<br/>
                        a.osmanova@kdi.kz<br/></p>

                        </p>
                        <p> 
                            <p>{contacts.work_time}<br /></p>
                            <p dangerouslySetInnerHTML={ {__html: contacts.phone} }/>
                        </p>
                    </div>
                    <form className="form-contacts">
                        <input type="text" placeholder="Ваше имя"/> <br />
                        <input type="text" placeholder="Номер телефона"/> <br />
                        <textarea placeholder="Ваше сообщение"></textarea> <br />
                        <button  className="submit-btn">Отправить</button>
                        {/* <div className="tenants-bg"></div> */}
                    </form>
                </div>}
                {props.lang==="kz"&&  <div className="contacts-form">
                
                    <h2 className="contacts-heading">Сәлеметсіз бе, Бізбен хабарласыңыз!</h2>
                    <p className="contacts-subheading">Немесе байланыс формасын толтырып жибере аласыз, біз сізге хабарласамыз</p>
                    <div className="contacts-info">
                        <p class="nobr">Казахстан, Алматы, <br />{contacts.address}</p>
                        <p>f.nurmakhanova@kdi.kz<br/>
                        a.osmanova@kdi.kz<br/></p>
                        <p> 
                            <p>{contacts.work_time}<br /></p>
                            <p dangerouslySetInnerHTML={ {__html: contacts.phone} }/>
                        </p>
                    </div>
                    <form className="form-contacts">
                        <input type="text" placeholder="Ваше имя"/> <br />
                        <input type="text" placeholder="Номер телефона"/> <br />
                        <textarea placeholder="Ваше сообщение"></textarea> <br />
                        <button  className="submit-btn">Жиберу</button>
                        {/* <div className="tenants-bg"></div> */}
                    </form>
                </div>}
                {props.lang==="en"&&  <div className="contacts-form">
                
                    <h2 className="contacts-heading">Hello, contact us!</h2>
                    <p className="contacts-subheading">Also you can fill our contact form and we contact you. </p>
                    <div className="contacts-info">
                        <p class="nobr">Kazakhstan, Almaty, <br />{contacts.address}</p>
                        <p>f.nurmakhanova@kdi.kz<br/>
                        a.osmanova@kdi.kz<br/></p>
                        <p> 
                            <p>{contacts.work_time}<br /></p>
                            <p dangerouslySetInnerHTML={ {__html: contacts.phone} }/>
                        </p>
                    </div>
                    <form className="form-contacts">
                        <input type="text" placeholder=" Your name"/> <br />
                        <input type="text" placeholder="Number phone"/> <br />
                        <textarea placeholder="Your message"></textarea> <br />
                        <button  className="submit-btn">Send</button>
                        {/* <div className="tenants-bg"></div> */}
                    </form>
                </div>}
            </div> 
           
        </div>
    )
}
