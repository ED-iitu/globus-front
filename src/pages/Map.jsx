import React, {useEffect} from 'react'



export default function Map() {
    const handleClick = (e) => {
        console.log(e.target.parentElement.dataset);
        // console.log(e.target.parentElement.classList);
        e.target.parentElement.classList.add("show")
    }
    return (
        <div className="map">
            <svg width="1440" height="788" xmlns="http://www.w3.org/2000/svg" fill="none">
                <g id="Layer_1" onClick={handleClick}>
                    <g id="g g1" data-id="1">
                    <path fill="#B2C77A" d="m220,390l0,-280.26126l266.61845,-0.23124l0,2.54363l3.006,0l0,64.05307l-2.775,0l0,5.5498l5.087,0l0,8.3245l-8.787,0l0,58.7345l4.162,0l0,2.313l17.806,0l0,64.284l-15.956,0l0,74.69l-269.16145,0z"/>
                    </g>
                    <g id="g g2" data-id="2">
                    <path fill="#B2C77A" d="m642,400l0,4.393l0,0.232l-63.8218,0l0,-4.625l-3.6998,0l0,-13.412l3.2373,0l0,-4.162l-70.29652,0l0,-25.437l-1.84991,0l0,-21.736l1.84991,0l0,-109.6071l-1.61867,0l0,-20.8114l72.14649,0l0,-10.637l31.68,0l0,-18.49909l33.298,0l0,224.30159l-0.925,0z"/>
                    </g>
                    <g id="g g3" data-id="3">
                    <path fill="#B2C77A" d="m712,400l0,4.624l-64.05309,0l0,-4.624l-3.46858,0l0,-13.412l2.54363,0l0,-38.386l-2.54363,0l0,-21.7362l2.54363,0l0,-23.8176l-2.54363,0l0,-21.9676l2.54363,0l0,-33.76087l34.91704,0l0,-2.31238l8.7871,0l0,2.31238l47.8663,0l0,-2.31238l9.9434,0l0,70.75905l-10.1746,0l0,-2.7749l-24.5113,0l0,69.1405l-1.3874,0l0,4.856l1.3874,0l0,13.412l-1.8499,0z"/>
                    </g>
                    <g id="g g4" data-id="4">
                    <path fill="#B2C77A" d="m718,404l63.82182,0l0,-4.1623l0.925,0l0,-51.7975l2.3124,0l0,-5.781l-47.6352,0l0,-10.8682l1.8499,0l0,9.2496l45.7853,0l0,-14.3368l-2.3124,0l0,-9.71204l-43.4729,0l0,8.78707l-1.8499,0l0,-8.78707l-21.7364,0l0,64.97804l1.84991,0l0,4.856l-1.84991,0l0,13.4119l2.31238,0l0,4.1623z"/>
                    </g>
                    <g id="g g5" data-id="5">
                    <path fill="#B2C77A" d="m761,315l-10.63701,0l0,-69.60284l0.46248,0l0,-2.77487l7.86211,0l0,1.61867l1.84992,0l0,2.31239l22.1989,0l0,33.76085l2.5436,0l0,21.9676l-2.5436,0l0,9.9433l-21.7364,0l0,2.7749z"/>
                    </g>
                    <g id="g g6" data-id="6">
                    <path fill="#B2C77A" d="m919,353l0,-37.92316l-65.2094,0l0,2.77486l-5.0873,0l0,-3.69982l-46.71019,0l0,90.64552l30.52349,0l0,-4.6248l6.0122,0l0,0.925l10.1745,0l0,-18.0366l36.9982,0l0,-30.061l14.3368,0l0,2.3124l-12.4869,0l0,27.7486l31.4486,0l0,-27.7486l-13.412,0l0,-2.3124l13.412,0z"/>
                    </g>
                    <g id="g g7" data-id="7">
                    <path fill="#B2C77A" d="m780,635l3.2373,0l0,-22.1989l0.925,0l0,-47.63513l-72.14648,0l0,69.83403l4.16229,0l0,2.7749l63.82189,0l0,-2.7749z"/>
                    </g>
                    <g id="g g8" data-id="8">
                    <path fill="#B2C77A" d="m839,520l0,1.85l148.45568,0l0,-133.65605l-136.8938,0l0,9.71202l3.6999,0l0,5.54973l-15.26178,0l0,3.6998l-4.1623,0l0,102.2075l2.77487,0l0,10.637l1.38743,0z"/>
                    </g>
                    <g id="g g9" data-id="9">
                    <path fill="#B2C77A" d="m923,637l63.8218,0l0.463,0l0,-112.38208l-64.2848,0l0,3.69982l-5.5497,0l0,-3.69982l-64.2844,0l0,3.69982l-5.0872,0l0,-3.69982l-9.71204,0l0,5.08725l-4.62477,0l0,82.32093l0.92495,0l0,22.1989l3.23734,0l0,3.7l10.17452,0l0,-3.238l5.0872,0l0,2.313l64.2844,0l0,-2.775l5.5497,0l0,2.775z"/>
                    </g>
                    <g id="g g10" data-id="10">
                    <path fill="#B2C77A" d="m712,530l0,33.29833l72.14648,0l0,-33.29833l-4.6248,0l0,-6.0122l-62.89691,0l0,6.0122l-4.62477,0z"/>
                    </g>
                    <g id="g g11" data-id="11">
                    <path fill="#B2C77A" d="m709,635l1.8499,0l0,-104.51993l-2.3124,0l0,-6.0122l-62.8969,0l0,6.0122l-4.62477,0l0,104.51993l4.1623,0l0,3.7l63.82187,0l0,-3.7z"/>
                    </g>
                    <g id="g g12" data-id="12">
                    <path fill="#B2C77A" d="m577,638l63.35942,0l0,-114.23213l-63.35942,0l0,6.0122l-2.77487,0l0,104.51993l2.77487,0l0,3.7z"/>
                    </g>
                    <g id="g g13" data-id="13">
                    <path fill="#B2C77A" d="m573,637l0,-113.76913l-63.3594,0l0,6.0122l-6.0122,0l0,-6.0122l-9.24951,0l0,6.0122l-4.16229,0l0,68.90913l16.1867,0l0,33.7608l3.6998,0l0,5.087l62.8969,0z"/>
                    </g>
                    <g id="g g14" data-id="14">
                    <path fill="#B2C77A" d="m489,600l0,-76.77123l-58.27218,0l0,6.0122l-4.62477,0l0,102.66993l4.62477,0l0,5.087l57.80968,0l0,-5.087l4.1623,0l0,-31.9109l-3.6998,0z"/>
                    </g>
                    <g id="g g15" data-id="15">
                    <path fill="#B2C77A" d="m425,610l0,25.4364l0,0.462l-63.3594,0l0,-4.162l-4.16229,0l0,-21.7364l49.02259,0l0,-1.8499l-49.02259,0l0,-79.08363l4.62477,0l0,-6.0122l62.89692,0l0,85.09583l-12.0244,0l0,1.8499l12.0244,0z"/>
                    </g>
                    <g id="g g16" data-id="16">
                    <path fill="#B2C77A" d="m354,636l0,-113.07608l-50.641,52.25988l0,43.4729l-16.4179,0l0,2.7749l-2.0812,0l0,-4.856l16.1867,0l0,-36.3045l-7.1684,6.9372l-1.1562,-1.1562l-42.31663,42.5479l7.16839,6.706l27.28614,0l0,-4.625l5.781,0l0,5.319l63.3591,0z"/>
                    </g>
                    <g id="g g17" data-id="17">
                    <path fill="#B2C77A" d="m214,530l-48.0976,0l0,-1.85l46.7102,0l0,-6.4746l6.4747,0l0,3.0061l18.4991,-18.4991l0,-37.69193l-9.7121,0l0,-2.31238l-81.39595,0l0,55.72851l2.77486,0l0,6.2434l8.78709,0l0,1.85l-9.71204,0l32.83584,32.8358l32.8359,-32.8358z"/>
                    </g>
                    <g id="g g18" data-id="18">
                    <path fill="#B2C77A" d="m172,465l0,-12.0244l1.85,0l0,12.0244l55.0347,0l0,-6.9371l9.7121,0l0,-48.56012l-64.7468,0l0,37.69192l-1.85,0l0,-37.69192l-24.28,0l0,44.86032l2.54362,0l0,5.5497l-2.54362,0l0,5.0872l24.28,0z"/>
                    </g>
                    <g id="g g20" data-id="20">
                    <path fill="#B2C77A" d="m1110,595l-48.79134,0l0,-135.50627l0.46248,0l0,-3.69982l61.74066,0l1.3875,1.38743l0,41.62296c3.2373,44.629 14.568,67.0587 33.7608,97.3517l-12.2556,0l0,-2.544l-5.0873,0l0,2.775l-25.8987,0l0,-2.775l-5.3185,0l0,1.388z"/>
                    </g>
                    <g id="g g21" data-id="21">
                    <path fill="#B2C77A" d="m1172,387l12.487,-12.7181l-18.499,-18.4991l-35.6106,34.4546l0,22.8926l-9.712,9.9433l-1.1562,-1.3875l9.0183,-9.0183l0,-23.5863l36.0735,-34.6858l-12.0247,-12.25565l-96.65774,0l0,43.70405l5.08725,0l18.96159,18.7304l-1.8499,2.0811l7.8621,7.8621l-1.1562,1.1562l-21.96768,-21.7364l0,60.1225l61.04698,0.462l-31.4484,-31.9109l3.0061,-2.7749l12.4868,12.9494l6.0123,-5.5497l1.1561,1.3874l-5.5497,5.5497l6.2435,6.2435l54.8036,-54.8036l1.387,1.3874z"/>
                    </g>
                    <g id="g g22" data-id="22">
                    <path fill="#B2C77A" d="m1110,597l-47.86642,0l-0.23124,0l0,0.92495l-0.46248,0l0,36.99814l0.46248,0l0,3.6999l48.09766,0l0,-2.5437l2.7748,0l0,-36.53567l-2.7748,0l0,-2.54362z"/>
                    </g>
                    <g id="g g23" data-id="23">
                    <path fill="#B2C77A" d="m1185,330l-5.3185,0l-15.2618,-15.261l-34.22327,0l0,-134.11882l1.1562,1.1562l3.0061,-3.00611l-2.77487,-2.77486l16.64914,0l0,2.77486l5.5498,0l0,-2.77486l55.9597,0l0,2.77486l6.0122,0l0,-2.77486l56.4226,0l0,2.77486l5.087,0l0,-2.77486l56.885,0l0,2.31239l2.312,0l0,56.8847l-2.312,0l0,5.0872l2.312,0l0,26.8237l-16.649,0l0,4.1623l-48.56,0l0,0.6937l-2.775,0l0,5.3186l2.775,0l0,33.992l-4.163,0l-34.685,-34.686l-3.2378,3.238l3.0058,3.006l-47.1723,47.172z"/>
                    </g>
                    <g id="g g24" data-id="24">
                    <path fill="#B2C77A" d="m1128,243l0,-65.44048l-71.6837,0l0,-1.84991l-64.28431,0l0,43.47289l66.59671,0l0,23.8175l69.3713,0z"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}
