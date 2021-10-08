import React from 'react'
import API from "../utils/api";
export default function Tenants(props) {
    const [renters, setData] = React.useState([]);
    const [currentLang,setLang]=React.useState(props.lang)
     if(props.lang!=currentLang)
     {
         setLang(props.lang)
         API.get(`/renter/info?lang=${props.lang}`)
         .then(res => {
             setData(res.data?.data)
         })
         
     }
    React.useEffect(() => {
        API.get(`/renter/info?lang=${currentLang}`)
            .then(res => {
                setData(res.data?.data)
            })
    }, []);
    return (
        <div className="container tenants">
            <div className="row">
                <div className="Page_top">
                    {props.lang==="ru"&&<h1 className="Page_heading">арендаторам</h1>}
                    {props.lang==="kz"&&<h1 className="Page_heading">Жалгерлерге</h1>}
                    {props.lang==="en"&&<h1 className="Page_heading">Tenants</h1>}
                    <div className="call">
                        <a href="tel:+77273561515">+7 (727) 356 15 15</a>
                        <div className="icon tel"></div>
                    </div>
                </div>
                <div className="article-wrapper">
                    {renters.map((item,i)=>(
                         <div className="article">
                         <h3 className="article_title">{item.title}</h3>
                         <p className="article_text" dangerouslySetInnerHTML={ {__html: item.description} }/>
                     </div>
                    ))}
                </div>
                {props.lang==="ru"&&<form className="form" post="/v1/email/send">
                    <input type="text" placeholder="Ваше имя"/> <br />
                    <input type="text" placeholder="Номер телефона"/> <br />
                    <input type="text" placeholder="Ваша почта"/> <br />
                    <div Style="max-height:150px;"className="col-lg-12 row">
                    <div className="col-lg-7" Style="margin-top:45px">
                    <input name="file" type="file" Style="opacity:0;visibly:hidden;width:0%; padding:0px;"name="file" id="input__file" className="input input__file" multiple></input>
                     <label for="input__file" className="subimt-btn"><span className="submit-btn">Прикрепить файл</span></label>
                     </div>
                    <button Style="float:right;max-height:82px;" className="submit-btn col-lg-4">Отправить</button>
                    </div> 
                    <div className="tenants-bg"></div>
                </form>}
                {props.lang==="en"&&<form className="form">
                    <input type="text" placeholder="Your name"/> <br />
                    <input type="text" placeholder="Phone number"/> <br />
                    <input type="text" placeholder="Your email"/> <br />
                    <div Style="max-height:150px;"className="col-lg-12 row">
                    <div className="col-lg-7" Style="margin-top:45px">
                    <input name="file" type="file" Style="opacity:0;visibly:hidden;width:0%; padding:0px;"name="file" id="input__file" className="input input__file" multiple></input>
                     <label for="input__file" className="subimt-btn"><span className="submit-btn">Attach file</span></label>
                     </div>
                    <button Style="float:right;max-height:82px;" className="submit-btn col-lg-4">Send</button>
                    </div> 
                    <div className="tenants-bg"></div>
                </form>}
                {props.lang==="kz"&&<form className="form">
                    <input type="text" placeholder="Сіздің атыңыз"/> <br />
                    <input type="text" placeholder="Телефон номері"/> <br />
                    <input type="text" placeholder="Сіздің почтаңыз"/> <br />
                    <div Style="max-height:150px;"className="col-lg-12 row">
                    <div className="col-lg-7" Style="margin-top:45px">
                    <input name="file" type="file" Style="opacity:0;visibly:hidden;width:0%; padding:0px;"name="attachment" id="input__file" className="input input__file" multiple></input>
                     <label for="input__file" className="subimt-btn"><span className="submit-btn">Файлды тіркеу</span></label>
                     </div>
                    <button Style="float:right;max-height:82px;" className="submit-btn col-lg-4">Жиберу</button>
                    </div> 
                    <div className="tenants-bg"></div>
                </form>}
            </div>
        </div>
    )
}
