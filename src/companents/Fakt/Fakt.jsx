import React from 'react'
import './Fakt.scss'
function Fakt() {
  return (
    <div className='fakt'>
        <h3>Faktlar sonlarda</h3>
        <div className="container">
        <div className="card">
            <div className="cards">
                <h5>100</h5>
                <hr />
                <p>
                    100 ga yaqin kasalliklarni
                    oldini olish va davolashda
                    qollaniladi
                </p>
            </div>
            <div className="cards">
                <h5>1.3 mlrd</h5>
                <hr />
                <p>
                1,3 mlrd xitoyliklar
                jenshenni inson uchun
                eng foydali mahsulot
                deb hisoblashadi
                </p>
            </div>
            <div className="cards">
                <h5>100</h5>
                <hr />
                <p>
                Jenshen  o'simligi
                 100  yilgacha
                 umr  ko'radi
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Fakt