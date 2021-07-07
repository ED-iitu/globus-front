import React from 'react'
import "./../styles/pages/about-page.scss"
import poster from './../assets/about-page.png'
import API from './../utils/api';

export default function About() {
    const [data, setData] = React.useState([])


    React.useEffect(() => {
        API.get(`/about`)
            .then(res => {
                setData(res.data?.info)
            })
    }, [])

    return (
        <div>
            <div className="page-poster">
                <img src={poster} alt="" />
            </div>
            <div className="container ">
                <div className="row about-page-heading">
                    <h1 className="heading"><span>6</span> причин <br /> почему <span>globus</span></h1>
                    <a className="more-link" href="#">подробнее о globus</a>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="reasons">
                        <div className="reason">
                            <div className="icon"></div>
                            <h3 className="title">Расположение</h3>
                            <p className="content">Идейные соображения высшего порядка, а также убеждённость некоторых оппонентов.</p>
                        </div>
                        <div className="reason">
                            <div className="icon"></div>
                            <h3 className="title">Расположение</h3>
                            <p className="content">Идейные соображения высшего порядка, а также убеждённость некоторых оппонентов.</p>
                        </div>
                        <div className="reason">
                            <div className="icon"></div>
                            <h3 className="title">Расположение</h3>
                            <p className="content">Идейные соображения высшего порядка, а также убеждённость некоторых оппонентов.</p>
                        </div>
                        <div className="reason">
                            <div className="icon"></div>
                            <h3 className="title">Расположение</h3>
                            <p className="content">Идейные соображения высшего порядка, а также убеждённость некоторых оппонентов.</p>
                        </div>
                        <div className="reason">
                            <div className="icon"></div>
                            <h3 className="title">Расположение</h3>
                            <p className="content">Идейные соображения высшего порядка, а также убеждённость некоторых оппонентов.</p>
                        </div>
                        <div className="reason">
                            <div className="icon"></div>
                            <h3 className="title">Расположение</h3>
                            <p className="content">Идейные соображения высшего порядка, а также убеждённость некоторых оппонентов.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <h2 className="main-title">несколько слов <br /> <span>о globus</span></h2>

                    <p className="text">Открытый в 2010 г., современный торгово-развлекательный комплекс Globus быстро завоевал симпатии жителей города и стал одним среди самых популярных торговых центров Алматы. Этот престижный центр отличается очень удобным месторасположением, прекрасной архитектурой, интересными дизайнерскими решениями и высочайшим уровнем сервиса. </p>
                    
                    {data.map((item, i) => (
                        <>
                            <h3 className="sub-title">
                                <span className="icon icon1"></span>
                                {item.title}
                            </h3>
                            <p className="text">{item.description}</p>
                        </>
                    ))}
                    {/* <h3 className="sub-title">
                        <span className="icon icon1"></span>
                        Расположение торгового центра Globus
                    </h3>
                    <p className="text">Торговый центр Глобус представляет собой двухэтажное здание общей площадью более 12000 кв.м. Престижное месторасположение в центре выгодно отличает его среди других 
торгово-развлекательных центров Алматы. Рядом находящиеся остановки городского транспорта позволят посетителям легко добраться в любую точку города. Для владельцев личных авто предусмотрено наличие подземной и наземной парковки.
</p>
                    <h3 className="sub-title"><span className="icon icon2"></span>предоставляемые услуги</h3>
                    <p className="text">Торговые центры Алматы всегда стараются порадовать своих посетителей наличием различных сервисов. ТРЦ Глобус на протяжении нескольких лет занимает лидирующие позиции по количеству предоставляемых услуг и качеству обслуживания. Мы позаботились о том, чтобы, посетив Globus  Алматы, каждый смог удовлетворить все свои потребности.
</p>
                    <h3 className="sub-title"><span className="icon icon3"></span>магазины в торговом центре globus</h3>
                    <p className="text">Шоппинг в ТРЦ Глобус способен удовлетворить самого взыскательного клиента. Бутики самых популярных брендов одежды и обуви представляют торговую галерею Globus. 
Одежда и обувь для всей семьи, детские игрушки и другие товары, товары для дома и техника – тут Вы сможете купить всё, что угодно!</p>
                    <p className="text">Также мы предлагаем для всех желающих аренду офисных помещений и аренду торговых площадей в нашем центре.</p>


                    <h3 className="sub-title"><span className="icon icon4"></span>развлекательный центр</h3>
                    <p className="text">Торгово-развлекательный комплекс Globus готов предоставить своим посетителям развлечения любого вкуса и для любого возраста.


</p>
                    <p className="text">В четырех зальном кинотеатре «Kinopark» можно посмотреть последние новинки киноиндустрии с друзьями, провести романтический вечер за просмотром фильма с любимыми или отдохнуть всей семьёй. <br /> Дети всегда будут в восторге от посещения Batut city. </p>
                    
                    <h3 className="sub-title"><span className="icon icon5"></span>зона фудкорта</h3>
                    <p className="text">Далеко не все торгово-развлекательные центры Алматы могут похвастаться такой зоной фудкорта, как Globus. Сюда можно прийти на обеденный перерыв, провести деловой или романтический ужин в ресторане, забежать подкрепиться или выпить чашечку ароматного кофе в перерыве между шопингом – каждый для себя выберет то, что ему по вкусу.
</p>

                    <hr className="divider" />

                    <p className="text">Торгово-развлекательный комплекс Globus способен удовлетворить запросы каждого! Комфортная атмосфера, множество возможностей для приятного отдыха всей семьей и общения, супермаркет и множество бутиков помогут провести время с максимальной пользой.</p>
                    <p className="text">Для комфорта своих посетителей, дизайнеры торгового центра Globus создали удивительный интерьер, повторяющий стиль старого города со своими улицами. Посещение Globus всегда оставит множество положительных эмоций о приятно проведённом времени!</p> */}
                </div>
            </div>
        </div>
    )
}
